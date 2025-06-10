"use client";

import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "+254700088271"; // Replace with your actual WhatsApp number
  const [selectedOption, setSelectedOption] = useState<string>('');

  // Initialize Tawk.to API
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.Tawk_API = window.Tawk_API || {};
      // @ts-ignore
      window.Tawk_API.onLoad = function() {
        console.log('Tawk.to loaded successfully');
      };
    }
  }, []);

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber.replace(/\\D/g, '')}?text=Hi%20Tranzit%20Team%21%20I%20need%20help%20with...`,
      '_blank'
    );
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    
    if (option === 'whatsapp') {
      openWhatsApp();
    } else if (option === 'bot') {
      if (typeof window !== 'undefined') {
        // @ts-ignore
        if (window.Tawk_API) {
          // @ts-ignore
          window.Tawk_API.toggle();
        }
      }
    }
  };

  return (
    <div className="fixed bottom-16 right-4 z-[9999]">
      {/* Main Chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-tranzit-green hover:bg-tranzit-green/90 text-white rounded-full p-3 shadow-lg transition-colors"
        style={{
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          transform: 'translateY(-50%)',
          transition: 'all 0.3s ease'
        }}
      >
        <Phone className="h-6 w-6" />
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 bg-white rounded-xl shadow-lg p-4 w-80 max-h-[80vh] overflow-y-auto z-[9999]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Chat with Tranzit</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">
              Choose how to chat with us:
            </p>
            <div className="space-y-3">
              <button
                onClick={() => handleOptionSelect('bot')}
                className="w-full bg-tranzit-green text-white py-2 px-4 rounded-lg hover:bg-tranzit-green/90 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Chat with Bot</span>
                </div>
                <span className="text-sm text-gray-500">24/7</span>
              </button>

              <button
                onClick={() => handleOptionSelect('whatsapp')}
                className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Chat via WhatsApp</span>
                </div>
                <span className="text-sm text-white">Instant</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
