import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Truck,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Features", href: "#features" },
    { name: "Download App", href: "#download" },
    { name: "Driver App", href: "#driver" },
  ];

  const services = [
    { name: "Food Delivery", href: "#food" },
    { name: "Package Delivery", href: "#packages" },
    { name: "Grocery Delivery", href: "#grocery" },
    { name: "Medicine Delivery", href: "#medicine" },
    { name: "Business Solutions", href: "#business" },
    { name: "Enterprise", href: "#enterprise" },
  ];

  const support = [
    { name: "Help Center", href: "#help" },
    { name: "Contact Us", href: "#contact" },
    { name: "Track Order", href: "#track" },
    { name: "Report Issue", href: "#report" },
    { name: "Safety", href: "#safety" },
    { name: "Insurance", href: "#insurance" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Driver Terms", href: "/driver-terms" },
    { name: "Accessibility", href: "/accessibility" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      href: "#facebook",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      href: "#twitter",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      href: "#instagram",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "#linkedin",
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-5 h-5" />,
      href: "#youtube",
    },
  ];

  const cities = [
    "Thika",
    "Nairobi",
    "Mombasa",
    "Kisumu",
    "Nakuru",
    "Nyeri",
    "Kitale",
    "Kitui",
    "Kakamega",
    "Kisii",
    "Kisumu",
    "Karren",
    "Kiambu",
    "Kilifi",
    "Nyeri",
    "Machakos",
    "Makueni",
    "Mombasa",
    "Moi",
    "Murang'a",
    "Nakuru",
    "Nairobi",
    "Nyeri",
    "Thika",
    "Uasin Gishu",
    "Vihiga",
    "Wajir",
    "Kilifi",
    "Nyeri",
    "Machakos",
    
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 lg:px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl lg:text-4xl font-bold">
                Stay Updated with{" "}
                <span className="text-tranzit-green">Tranzit</span>
              </h3>
              <p className="text-xl text-gray-300">
                Get the latest updates, exclusive offers, and delivery tips
                directly in your inbox.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-tranzit-green"
                />
                <Button className="bg-tranzit-green hover:bg-tranzit-green/90 text-white px-8 py-3 rounded-xl font-semibold">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-400">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-tranzit-green p-3 rounded-xl">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold text-tranzit-green">
                Tranzit
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed">
              The fastest, most reliable delivery service connecting you with
              local couriers for instant delivery across your city. Available
              24/7 with real-time tracking.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-tranzit-green flex-shrink-0" />
                <span>Kimabu, Juja, Kiambu County, Kenya</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-tranzit-orange flex-shrink-0" />
                <span>+254 700 088 271</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-tranzit-blue flex-shrink-0" />
                <span>support@tranzit.ke</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-tranzit-green transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-tranzit-green transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-tranzit-green transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-tranzit-green transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-tranzit-green transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Cities Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-6 py-12">
          <h4 className="text-xl font-semibold text-white mb-6">
            Available in These Cities
          </h4>
          <div className="flex flex-wrap gap-3">
            {cities.map((city) => (
              <span
                key={city}
                className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
              >
                {city}
              </span>
            ))}
          </div>
          <p className="text-gray-400 mt-4">
            Don't see your city?{" "}
            <a
              href="#request-city"
              className="text-tranzit-green hover:underline"
            >
              Request Tranzit in your area
            </a>
          </p>
        </div>
      </div>

      {/* App Download Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h4 className="text-2xl font-semibold text-white mb-2">
                Download the Tranzit App
              </h4>
              <p className="text-gray-300">
                Get faster service and exclusive app-only features
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* App Store */}
              <div className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer">
                <div className="text-2xl">📱</div>
                <div>
                  <div className="text-xs opacity-90">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </div>

              {/* Google Play */}
              <div className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer">
                <div className="text-2xl">🤖</div>
                <div>
                  <div className="text-xs opacity-90">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Tranzit. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-gray-400">
              <span>Available 24/7</span>
              <span>•</span>
              <span>15 min avg delivery</span>
              <span>•</span>
              <span>4.9★ rated</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
