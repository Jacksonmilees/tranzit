"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Building, Check, Crown, MapPin, Zap, Truck } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
  const [showAnimation, setShowAnimation] = useState(true);
  const plans = [
    {
      name: "Standard",
      icon: <Zap className="h-6 w-6" />,
      price: "$2.99",
      period: "per delivery",
      description: "Perfect for occasional deliveries",
      features: [
        "Real-time tracking",
        "30-45 min delivery",
        "Standard support",
        "Insurance up to $50",
        "Cash on delivery",
        "Multiple payment options",
      ],
      color: "text-tranzit-blue",
      bgColor: "bg-tranzit-blue/10",
      buttonColor: "bg-tranzit-blue hover:bg-tranzit-blue/90",
      popular: false,
    },
    {
      name: "Express",
      icon: <Crown className="h-6 w-6" />,
      price: "$4.99",
      period: "per delivery",
      description: "For when you need it fast",
      features: [
        "Priority delivery",
        "15-20 min delivery",
        "Premium support",
        "Insurance up to $200",
        "Live chat support",
        "Delivery notifications",
        "Express pickup",
      ],
      color: "text-tranzit-green",
      bgColor: "bg-tranzit-green/10",
      buttonColor: "bg-tranzit-green hover:bg-tranzit-green/90",
      popular: true,
    },
    {
      name: "Business",
      icon: <Building className="h-6 w-6" />,
      price: "KES 5,000",
      period: "per month",
      description: "For businesses and enterprises",
      features: [
        "Unlimited deliveries",
        "Priority support",
        "Custom branding",
        "API access",
        "Delivery analytics",
        "Team management",
        "Custom reports",
        "Dedicated account manager",
      ],
      color: "text-tranzit-orange",
      bgColor: "bg-tranzit-orange/10",
      buttonColor: "bg-tranzit-orange hover:bg-tranzit-orange/90",
      popular: false,
    },
    {
      name: "Enterprise",
      icon: <Building className="h-6 w-6" />,
      price: "Custom",
      period: "per month",
      description: "Tailored solutions for large enterprises",
      features: [
        "Custom pricing",
        "Enterprise support",
        "Custom integrations",
        "Advanced analytics",
        "Multi-region support",
        "Custom SLAs",
        "Dedicated team",
        "Priority development",
      ],
      color: "text-tranzit-purple",
      bgColor: "bg-tranzit-purple/10",
      buttonColor: "bg-tranzit-purple hover:bg-tranzit-purple/90",
      popular: false,
    },
  ];

  const addons = [
    {
      name: "Same-Day Guarantee",
      price: "KES 100",
      description: "100% refund if not delivered same day",
    },
    {
      name: "Premium Insurance",
      price: "KES 200",
      description: "Coverage up to KES 50,000 for valuable items",
    },
    {
      name: "White Glove Service",
      price: "KES 500",
      description: "Special handling and setup service",
    },
    {
      name: "Scheduled Delivery",
      price: "KES 100",
      description: "Choose exact delivery time slot",
    },
  ];

  const benefits = [
    {
      title: "Fast Delivery",
      description: "Deliveries within 30-45 minutes across Kenya",
      icon: <Truck className="w-8 h-8 text-white" />,
      color: "bg-tranzit-blue"
    },
    {
      title: "Nationwide Coverage",
      description: "We deliver to all major cities in Kenya",
      icon: <MapPin className="w-8 h-8 text-white" />,
      color: "bg-tranzit-green"
    },
    {
      title: "Real-time Tracking",
      description: "Track your package every step of the way",
      icon: <Truck className="w-8 h-8 text-white" />,
      color: "bg-tranzit-orange"
    },
    {
      title: "100% Satisfaction",
      description: "Guaranteed delivery or money back",
      icon: <Check className="w-8 h-8 text-white" />,
      color: "bg-tranzit-purple"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Quick & <span className="text-tranzit-green">Affordable</span> Delivery
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get your packages delivered anywhere in Kenya in minutes. No hidden fees, just fast and reliable service.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Get Your Delivery Now
            </h3>
            <p className="text-lg text-gray-600">
              We deliver anywhere in Kenya within minutes
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="relative w-64 h-64">
              {showAnimation && (
                <div className="absolute inset-0 animate-pulse">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Truck className="w-12 h-12 text-tranzit-green animate-bounce" />
                  </div>
                </div>
              )}
              <div className="absolute inset-0">
                <MapPin className="w-24 h-24 text-tranzit-blue mx-auto" />
              </div>
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Truck className="w-16 h-16 text-tranzit-orange" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-tranzit-blue">Tranzit</span>?
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-tranzit-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    No Subscription Required
                  </h4>
                  <p className="text-gray-600">
                    Pay per delivery or choose monthly plans. No long-term
                    commitments.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-tranzit-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Transparent Pricing
                  </h4>
                  <p className="text-gray-600">
                    What you see is what you pay. No hidden fees or surprise
                    charges.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-tranzit-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Money-Back Guarantee
                  </h4>
                  <p className="text-gray-600">
                    If you're not satisfied, we'll refund your delivery fee. No
                    questions asked.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Enterprise */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Enterprise <span className="text-tranzit-green">Solutions</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Need custom solutions for your large organization? We offer
              tailored packages with volume discounts, dedicated support, and
              API integration.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-tranzit-green" />
                <span>Custom pricing based on volume</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-tranzit-green" />
                <span>Dedicated account management</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-tranzit-green" />
                <span>24/7 priority support</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-tranzit-green" />
                <span>Advanced analytics and reporting</span>
              </div>
            </div>

            <Button className="w-full bg-tranzit-green hover:bg-tranzit-green/90 text-white font-semibold py-3 rounded-xl">
              Contact Enterprise Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
