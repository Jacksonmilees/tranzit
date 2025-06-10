import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Star, Truck, Users } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-16 lg:pt-20 bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-tranzit-green/10 text-tranzit-green border-tranzit-green/20 hover:bg-tranzit-green/20">
                ⚡ Fast & Reliable Delivery
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Deliver
                <span className="text-tranzit-green"> Anything</span>
                <br />
                <span className="text-tranzit-orange">Anywhere</span>
                <br />
                <span className="text-tranzit-blue">Anytime</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Experience the future of delivery with Tranzit. From food to
                packages, we connect you with local couriers for instant,
                reliable delivery across your city.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-semibold">4.9/5</span>
                <span>Rating</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-5 w-5 text-tranzit-blue" />
                <span className="font-semibold">50K+</span>
                <span>Users</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-5 w-5 text-tranzit-orange" />
                <span className="font-semibold">15 min</span>
                <span>Avg Delivery</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-tranzit-green hover:bg-tranzit-green/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Truck className="w-5 h-5 mr-2" />
                Order Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-tranzit-blue text-tranzit-blue hover:bg-tranzit-blue hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                Become a Driver
              </Button>
            </div>

            {/* App Download Badges */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                <div className="text-2xl">📱</div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                <div className="text-2xl">🤖</div>
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Phone Mockup */}
              <div className="mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* App Interface Mockup */}
                  <div className="p-6 space-y-4">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold">9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-tranzit-green rounded-sm" />
                        <div className="w-4 h-2 bg-tranzit-green rounded-sm" />
                        <div className="w-4 h-2 bg-gray-300 rounded-sm" />
                      </div>
                    </div>

                    {/* Header */}
                    <div className="text-center py-4">
                      <h3 className="text-2xl font-bold text-tranzit-green">
                        Tranzit
                      </h3>
                      <p className="text-gray-600">
                        What do you need delivered?
                      </p>
                    </div>

                    {/* Categories */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-tranzit-green/10 p-4 rounded-xl text-center">
                        <div className="text-2xl mb-2">🏠</div>
                        <div className="font-semibold text-tranzit-green">
                          Relocation
                        </div>
                      </div>
                      <div className="bg-tranzit-orange/10 p-4 rounded-xl text-center">
                        <div className="text-2xl mb-2">📦</div>
                        <div className="font-semibold text-tranzit-orange">
                          Packages
                        </div>
                      </div>
                      <div className="bg-tranzit-blue/10 p-4 rounded-xl text-center">
                        <div className="text-2xl mb-2">🍕</div>
                        <div className="font-semibold text-tranzit-blue">
                          Food
                        </div>
                      </div>
                      <div className="bg-purple-100 p-4 rounded-xl text-center">
                        <div className="text-2xl mb-2">🛒</div>
                        <div className="font-semibold text-purple-600">
                          Groceries
                        </div>
                      </div>
                    </div>

                    {/* Live Orders */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">
                        Live Orders Near You
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg">
                          <div className="w-2 h-2 bg-tranzit-green rounded-full animate-pulse" />
                          <div className="flex-1">
                            <div className="font-medium">House relocation</div>
                            <div className="text-sm text-gray-600">
                              15 min away
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 bg-orange-50 p-3 rounded-lg">
                          <div className="w-2 h-2 bg-tranzit-orange rounded-full animate-pulse" />
                          <div className="flex-1">
                            <div className="font-medium">Furniture delivery</div>
                            <div className="text-sm text-gray-600">
                              25 min away
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-tranzit-green/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-tranzit-orange/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -right-5 w-24 h-24 bg-tranzit-blue/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
