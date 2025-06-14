"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if cookie consent has been given before
    if (!document.cookie.includes('cookieConsent=true')) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    document.cookie = 'cookieConsent=true; path=/; max-age=' + (365 * 24 * 60 * 60); // 1 year
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Cookie Consent</h3>
          <p className="text-gray-600 mb-6">
            We use cookies to enhance your experience on our website. By clicking "Accept All", 
            you consent to the use of all cookies. You can manage your preferences by clicking 
            "Cookie Settings".
          </p>
          <div className="flex justify-end space-x-4">
            <Button 
              variant="outline" 
              onClick={() => setShowConsent(false)}
              className="text-gray-600 hover:text-gray-800"
            >
              Decline
            </Button>
            <Button 
              onClick={acceptCookies} 
              className="bg-tranzit-green hover:bg-tranzit-green/90 text-white"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
