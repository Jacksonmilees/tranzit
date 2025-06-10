import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  CreditCard,
  MapPin,
  Search,
  Smartphone,
  Truck,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <Search className="h-8 w-8" />,
      title: "Browse & Order",
      description:
        "Browse through thousands of restaurants, stores, and services. Place your order in just a few taps.",
      color: "text-tranzit-green",
      bgColor: "bg-tranzit-green/10",
      borderColor: "border-tranzit-green/20",
    },
    {
      number: "02",
      icon: <CreditCard className="h-8 w-8" />,
      title: "Secure Payment",
      description:
        "Choose your preferred payment method. Pay securely with card, wallet, or cash on delivery.",
      color: "text-tranzit-orange",
      bgColor: "bg-tranzit-orange/10",
      borderColor: "border-tranzit-orange/20",
    },
    {
      number: "03",
      icon: <MapPin className="h-8 w-8" />,
      title: "Real-Time Tracking",
      description:
        "Track your courier in real-time. Get live updates on pickup, transit, and estimated delivery time.",
      color: "text-tranzit-blue",
      bgColor: "bg-tranzit-blue/10",
      borderColor: "border-tranzit-blue/20",
    },
    {
      number: "04",
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Fast Delivery",
      description:
        "Receive your order at your doorstep. Average delivery time is just 15 minutes in most areas.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-200",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How <span className="text-tranzit-green">Tranzit</span> Works
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Getting your items delivered is easier than ever. Follow these
            simple steps and experience the convenience of on-demand delivery.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-200 z-0">
                  <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse" />
                </div>
              )}

              <Card
                className={`relative z-10 border-2 ${step.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white`}
              >
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div
                      className={`w-8 h-8 rounded-full ${step.bgColor} border-2 ${step.borderColor} flex items-center justify-center`}
                    >
                      <span className={`text-sm font-bold ${step.color}`}>
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${step.bgColor} mt-4`}
                  >
                    <div className={step.color}>{step.icon}</div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                See It In <span className="text-tranzit-green">Action</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Watch how easy it is to get anything delivered with Tranzit.
                From placing an order to receiving it at your door, everything
                is seamless.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-tranzit-green rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Order placed in under 2 minutes
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-tranzit-orange rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Live tracking from pickup to delivery
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-tranzit-blue rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Contactless delivery options available
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <button className="bg-tranzit-green text-white px-8 py-4 rounded-xl font-semibold hover:bg-tranzit-green/90 transition-colors flex items-center space-x-2">
                  <Smartphone className="w-5 h-5" />
                  <span>Try Demo App</span>
                </button>
              </div>
            </div>

            {/* Right Content - Process Visualization */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  Live Order Progress
                </h4>

                <div className="space-y-6">
                  {/* Progress Steps */}
                  <div className="relative">
                    {/* Progress Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
                    <div className="absolute left-6 top-0 w-0.5 h-20 bg-tranzit-green" />

                    {/* Step 1 - Completed */}
                    <div className="relative flex items-center space-x-4 pb-6">
                      <div className="w-12 h-12 bg-tranzit-green rounded-full flex items-center justify-center z-10">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Order Confirmed
                        </div>
                        <div className="text-sm text-gray-600">2:34 PM</div>
                      </div>
                    </div>

                    {/* Step 2 - In Progress */}
                    <div className="relative flex items-center space-x-4 pb-6">
                      <div className="w-12 h-12 bg-tranzit-orange rounded-full flex items-center justify-center z-10">
                        <Truck className="w-6 h-6 text-white animate-pulse" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Courier En Route
                        </div>
                        <div className="text-sm text-tranzit-orange">
                          5 minutes away
                        </div>
                      </div>
                    </div>

                    {/* Step 3 - Pending */}
                    <div className="relative flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center z-10">
                        <MapPin className="w-6 h-6 text-gray-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-400">
                          Delivered
                        </div>
                        <div className="text-sm text-gray-400">
                          Estimated 2:49 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
