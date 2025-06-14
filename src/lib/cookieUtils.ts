export const setCookie = (name: string, value: string, options: { path?: string; expires?: number; secure?: boolean; sameSite?: 'strict' | 'lax' | 'none' } = {}) => {
  const expires = options.expires ? `; max-age=${options.expires}` : '';
  const path = options.path ? `; path=${options.path}` : '';
  const secure = options.secure ? '; secure' : '';
  const sameSite = options.sameSite ? `; samesite=${options.sameSite}` : '';
  document.cookie = `${name}=${value}${expires}${path}${secure}${sameSite}`;
};

export const getCookie = (name: string): string | null => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
};

export const removeCookie = (name: string, options: { path?: string; domain?: string } = {}) => {
  setCookie(name, '', { ...options, expires: -1 });
};

// Common cookie types
export const CookieTypes = {
  ESSENTIAL: 'essential',
  PERFORMANCE: 'performance',
  FUNCTIONAL: 'functional',
  TARGETING: 'targeting'
} as const;

// Cookie configuration
export const CookieConfig = {
  [CookieTypes.ESSENTIAL]: {
    description: 'These cookies are necessary for the website to function properly.',
    required: true
  },
  [CookieTypes.PERFORMANCE]: {
    description: 'These cookies help us understand how visitors interact with our website.',
    required: false
  },
  [CookieTypes.FUNCTIONAL]: {
    description: 'These cookies enable additional website functionality.',
    required: false
  },
  [CookieTypes.TARGETING]: {
    description: 'These cookies are used for advertising purposes.',
    required: false
  }
} as const;

// Set initial cookie preferences
export const setInitialCookiePreferences = () => {
  // Set essential cookies by default
  setCookie('cookieConsent', JSON.stringify({
    [CookieTypes.ESSENTIAL]: true,
    [CookieTypes.PERFORMANCE]: false,
    [CookieTypes.FUNCTIONAL]: false,
    [CookieTypes.TARGETING]: false
  }), {
    expires: 365 * 24 * 60 * 60, // 1 year in seconds
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  });
};

// Get current cookie preferences
export const getCookiePreferences = (): { [key: string]: boolean } | null => {
  const preferences = getCookie('cookieConsent');
  return preferences ? JSON.parse(preferences) : null;
};
