import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, BookOpen } from "lucide-react";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Refund Policy
            </h1>
            <p className="text-xl text-gray-600">Last updated: June 14, 2025</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <section className="mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="text-xl">1. Overview</CardTitle>
                  </div>
                  <Shield className="h-6 w-6 text-tranzit-green" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    This refund policy outlines the terms and conditions under which we will process refunds for our delivery services.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section className="mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="text-xl">2. Eligibility for Refunds</CardTitle>
                  </div>
                  <Clock className="h-6 w-6 text-tranzit-blue" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-green/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-green">•</span>
                      </div>
                      <p className="text-gray-600">Delivery Cancellation</p>
                    </div>
                    <p className="ml-8 text-gray-600">
                      If you cancel a delivery request before the driver has picked up the item, you will be eligible for a full refund minus any cancellation fee.
                    </p>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-blue/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-blue">•</span>
                      </div>
                      <p className="text-gray-600">Failed Deliveries</p>
                    </div>
                    <p className="ml-8 text-gray-600">
                      If a delivery fails due to our fault (e.g., incorrect pricing, system error), you will be eligible for a full refund.
                    </p>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-orange/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-orange">•</span>
                      </div>
                      <p className="text-gray-600">Service Issues</p>
                    </div>
                    <p className="ml-8 text-gray-600">
                      If you experience significant service issues (e.g., long delays, lost items), we may offer a partial refund at our discretion.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="text-xl">3. Refund Process</CardTitle>
                  </div>
                  <BookOpen className="h-6 w-6 text-tranzit-orange" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      To request a refund, please contact our support team at support@tranzit.ke or call +254 700 088 271. We will review your request and process the refund if eligible.
                    </p>
                    <p className="text-gray-600">
                      Refunds will be processed using the same payment method used for the original transaction. Processing times may vary depending on your payment provider.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="text-xl">4. Non-Refundable Situations</CardTitle>
                  </div>
                  <Shield className="h-6 w-6 text-tranzit-green" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      We do not offer refunds in the following situations:
                    </p>
                    <ul className="list-disc ml-8 text-gray-600">
                      <li>Cancellations after driver pickup</li>
                      <li>Failed deliveries due to incorrect address or recipient unavailability</li>
                      <li>Delays due to traffic or weather conditions</li>
                      <li>Service issues resolved through alternative means</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="text-xl">5. Contact Us</CardTitle>
                  </div>
                  <BookOpen className="h-6 w-6 text-tranzit-orange" />
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Team Members</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="/about" className="text-tranzit-green hover:text-tranzit-green/80">
                            Jackson Alex - Frontend Developer
                          </a>
                        </li>
                        <li>
                          <a href="/about" className="text-tranzit-blue hover:text-tranzit-blue/80">
                            Elijah Kibuchi - Backend Developer
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold">Contact Information</h3>
                      <div className="space-y-2">
                        <p>Kimabu, Juja, Kiambu County, Kenya</p>
                        <p>+254 700 088 271</p>
                        <p>support@tranzit.ke</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
