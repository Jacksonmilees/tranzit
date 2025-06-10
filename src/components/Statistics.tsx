import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Package, Star, Truck, Users } from "lucide-react";

export default function Statistics() {
  const stats = [
    {
      icon: <Package className="h-8 w-8" />,
      number: "2.5M+",
      label: "Deliveries Completed",
      subtext: "Safe & on time",
      color: "text-tranzit-green",
      bgColor: "bg-tranzit-green/10",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      number: "50+",
      label: "Cities Covered",
      subtext: "And growing fast",
      color: "text-tranzit-blue",
      bgColor: "bg-tranzit-blue/10",
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "150K+",
      label: "Happy Customers",
      subtext: "5-star ratings",
      color: "text-tranzit-orange",
      bgColor: "bg-tranzit-orange/10",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: "12 min",
      label: "Average Delivery",
      subtext: "Lightning fast",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "App of the Year",
      description: "2024 Mobile Excellence Award",
      year: "2024",
    },
    {
      icon: "⭐",
      title: "4.9 Star Rating",
      description: "Highest rated delivery app",
      year: "2024",
    },
    {
      icon: "🚀",
      title: "Fastest Growing",
      description: "Delivery platform in the region",
      year: "2024",
    },
    {
      icon: "🌟",
      title: "Customer Choice",
      description: "Most trusted delivery service",
      year: "2024",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-tranzit-green rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-tranzit-orange rounded-full blur-xl" />
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-tranzit-blue rounded-full blur-xl" />
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-purple-500 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Trusted by <span className="text-tranzit-green">Thousands</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            These numbers speak for themselves. Join the growing community of
            satisfied customers who rely on Tranzit for all their delivery
            needs.
          </p>
        </div>

        {/* Main Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${stat.bgColor}`}
                >
                  <div className={stat.color}>{stat.icon}</div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-gray-300">{stat.subtext}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Awards & <span className="text-tranzit-orange">Recognition</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className="text-lg font-bold mb-2">{achievement.title}</h4>
                <p className="text-gray-300 text-sm mb-2">
                  {achievement.description}
                </p>
                <div className="text-xs text-tranzit-green font-semibold">
                  {achievement.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Activity */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold">
                Live <span className="text-tranzit-green">Activity</span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                See what's happening right now on the Tranzit platform. Real
                deliveries, real customers, real satisfaction.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-tranzit-green rounded-full animate-pulse" />
                    <span>Active deliveries</span>
                  </div>
                  <span className="font-bold text-tranzit-green">1,247</span>
                </div>

                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-tranzit-orange rounded-full animate-pulse" />
                    <span>Couriers online</span>
                  </div>
                  <span className="font-bold text-tranzit-orange">3,892</span>
                </div>

                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-tranzit-blue rounded-full animate-pulse" />
                    <span>Orders today</span>
                  </div>
                  <span className="font-bold text-tranzit-blue">12,847</span>
                </div>
              </div>
            </div>

            {/* Right Content - Live Feed */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold mb-6">Recent Deliveries</h4>

              <div className="space-y-3 max-h-80 overflow-hidden">
                {[
                  {
                    time: "Just now",
                    action: "House relocation completed",
                    location: "Westlands",
                    icon: "🏠",
                  },
                  {
                    time: "2 min ago",
                    action: "Furniture moved",
                    location: "Karen",
                    icon: "🛋️",
                  },
                  {
                    time: "3 min ago",
                    action: "Office relocation",
                    location: "CBD",
                    icon: "🏢",
                  },
                  {
                    time: "5 min ago",
                    action: "Medicine delivered",
                    location: "Central Park",
                    icon: "💊",
                  },
                  {
                    time: "7 min ago",
                    action: "Food delivered",
                    location: "Business District",
                    icon: "🍜",
                  },
                  {
                    time: "8 min ago",
                    action: "Documents pickup",
                    location: "University",
                    icon: "📄",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 bg-white/5 rounded-xl p-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <div className="flex-1">
                      <div className="font-medium">{item.action}</div>
                      <div className="text-sm text-gray-400">
                        {item.location}
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">{item.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
