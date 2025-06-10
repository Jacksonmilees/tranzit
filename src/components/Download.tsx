import { Button } from "@/components/ui/button";
import {
  Download as DownloadIcon,
  QrCode,
  Smartphone,
  Star,
} from "lucide-react";

export default function Download() {
  return (
    <section id="download" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Download the
                <br />
                <span className="text-tranzit-green">Tranzit</span> App
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get the most convenient delivery experience right at your
                fingertips. Available for iOS and Android with millions of
                satisfied users worldwide.
              </p>
            </div>

            {/* App Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-tranzit-green rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">
                  4.9★ rating with 50,000+ reviews
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-tranzit-orange rounded-full flex items-center justify-center">
                  <DownloadIcon className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">
                  2M+ downloads and counting
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-tranzit-blue rounded-full flex items-center justify-center">
                  <Smartphone className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">
                  Available on all devices
                </span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* App Store */}
                <div className="flex items-center space-x-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer group">
                  <div className="text-3xl">📱</div>
                  <div>
                    <div className="text-xs opacity-90">Download on the</div>
                    <div className="text-lg font-semibold group-hover:text-gray-200">
                      App Store
                    </div>
                  </div>
                </div>

                {/* Google Play */}
                <div className="flex items-center space-x-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer group">
                  <div className="text-3xl">🤖</div>
                  <div>
                    <div className="text-xs opacity-90">Get it on</div>
                    <div className="text-lg font-semibold group-hover:text-gray-200">
                      Google Play
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Code */}
              <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-2xl">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center border-2 border-gray-200">
                  <QrCode className="w-12 h-12 text-gray-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Quick Download
                  </h4>
                  <p className="text-sm text-gray-600">
                    Scan QR code with your phone camera to download instantly
                  </p>
                </div>
              </div>
            </div>

            {/* Driver App */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Want to <span className="text-tranzit-orange">Earn</span> with
                Tranzit?
              </h3>
              <p className="text-gray-600 mb-6">
                Join thousands of drivers earning flexible income. Download the
                Tranzit Driver app and start earning today.
              </p>
              <Button className="bg-tranzit-orange hover:bg-tranzit-orange/90 text-white px-8 py-3 rounded-xl font-semibold">
                <Smartphone className="w-5 h-5 mr-2" />
                Download Driver App
              </Button>
            </div>
          </div>

          {/* Right Content - Phone Screenshots */}
          <div className="relative">
            {/* Main Phone */}
            <div className="relative z-20 mx-auto">
              <div className="w-80 h-[640px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* App Screenshots Carousel */}
                  <div className="h-full flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center p-4 text-sm">
                      <span className="font-semibold">9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-tranzit-green rounded-sm" />
                        <div className="w-4 h-2 bg-tranzit-green rounded-sm" />
                        <div className="w-4 h-2 bg-gray-300 rounded-sm" />
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="flex-1 p-4 space-y-4">
                      {/* Header */}
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-tranzit-green mb-2">
                          Tranzit
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Order placed successfully! 🎉
                        </p>
                      </div>

                      {/* Order Tracking */}
                      <div className="bg-green-50 rounded-2xl p-4">
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-semibold text-gray-900">
                            Order #TR12847
                          </span>
                          <span className="bg-tranzit-green text-white px-3 py-1 rounded-full text-xs font-semibold">
                            In Transit
                          </span>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-tranzit-green rounded-full flex items-center justify-center">
                              <div className="w-3 h-3 bg-white rounded-full" />
                            </div>
                            <div>
                              <div className="font-medium text-sm">
                                Order Confirmed
                              </div>
                              <div className="text-xs text-gray-600">
                                2:34 PM
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-tranzit-orange rounded-full flex items-center justify-center">
                              <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                            </div>
                            <div>
                              <div className="font-medium text-sm">
                                On the way
                              </div>
                              <div className="text-xs text-tranzit-orange">
                                Arriving in 5 minutes
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                              <div className="w-3 h-3 bg-gray-400 rounded-full" />
                            </div>
                            <div>
                              <div className="font-medium text-sm text-gray-400">
                                Delivered
                              </div>
                              <div className="text-xs text-gray-400">
                                Estimated 2:49 PM
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Driver Info */}
                      <div className="bg-white border border-gray-200 rounded-2xl p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-tranzit-blue rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">MJ</span>
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900">
                              Jackson Alex
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-3 h-3 text-yellow-400 fill-current"
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-gray-600">4.9</span>
                            </div>
                          </div>
                          <div className="flex flex-col space-y-1">
                            <button className="w-8 h-8 bg-tranzit-green rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">📞</span>
                            </button>
                            <button className="w-8 h-8 bg-tranzit-blue rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">💬</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Map Preview */}
                      <div className="bg-gray-100 rounded-2xl h-32 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">
                          🗺️ Live Map Tracking
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-tranzit-green/20 rounded-full blur-3xl z-10" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-tranzit-orange/20 rounded-full blur-3xl z-10" />
            <div className="absolute top-1/3 -right-4 w-24 h-24 bg-tranzit-blue/20 rounded-full blur-2xl z-10" />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-tranzit-green via-tranzit-blue to-tranzit-orange text-white rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Join Millions of Happy Users
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Experience the fastest, most reliable delivery service in your
              city. Download now and get your first delivery free!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-tranzit-green px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
                <DownloadIcon className="w-5 h-5 mr-2" />
                Download Now
              </Button>
              <Button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-tranzit-green transition-colors">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
