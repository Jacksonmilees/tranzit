import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Clock,
  CreditCard,
  Globe,
  Headphones,
  MapPin,
  Shield,
  Star,
  Users,
  Zap,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast Delivery",
      description:
        "Get your orders delivered in as little as 15 minutes with our network of local couriers.",
      color: "text-tranzit-green",
      bgColor: "bg-tranzit-green/10",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Real-Time Tracking",
      description:
        "Track your delivery in real-time with live GPS updates and estimated arrival times.",
      color: "text-tranzit-blue",
      bgColor: "bg-tranzit-blue/10",
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Multiple Payment Options",
      description:
        "Pay with credit card, digital wallet, cash on delivery, or split payments with friends.",
      color: "text-tranzit-orange",
      bgColor: "bg-tranzit-orange/10",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "24/7 Customer Support",
      description:
        "Get help anytime with our round-the-clock customer support via chat, phone, or email.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Wide Coverage Network",
      description:
        "Available in 50+ cities with thousands of local couriers ready to deliver.",
      color: "text-tranzit-green",
      bgColor: "bg-tranzit-green/10",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure & Insured",
      description:
        "All deliveries are insured and our couriers are background-checked for your safety.",
      color: "text-tranzit-blue",
      bgColor: "bg-tranzit-blue/10",
    },
  ];

  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      number: "50K+",
      label: "Active Users",
      color: "text-tranzit-green",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      number: "15 min",
      label: "Avg Delivery Time",
      color: "text-tranzit-orange",
    },
    {
      icon: <Star className="h-6 w-6" />,
      number: "4.9/5",
      label: "User Rating",
      color: "text-yellow-500",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      number: "50+",
      label: "Cities Covered",
      color: "text-tranzit-blue",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-tranzit-green">Tranzit</span>?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We've revolutionized delivery with cutting-edge technology, reliable
            service, and a commitment to getting your items where they need to
            be, fast.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white shadow-md mb-4 ${stat.color}`}
              >
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <CardHeader className="pb-4">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${feature.bgColor}`}
                >
                  <div className={feature.color}>{feature.icon}</div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-tranzit-green to-tranzit-blue text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Experience the Future of Delivery?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of satisfied customers who trust Tranzit for all
              their delivery needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-tranzit-green px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Download App Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-tranzit-green transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
