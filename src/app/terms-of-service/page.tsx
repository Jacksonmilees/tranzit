import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, BookOpen } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">Last updated: June 14, 2025</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <section className="mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="text-xl">1. Acceptance of Terms</CardTitle>
                  </div>
                  <Shield className="h-6 w-6 text-tranzit-green" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    By using Tranzit's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section className="mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="text-xl">2. User Responsibilities</CardTitle>
                  </div>
                  <Clock className="h-6 w-6 text-tranzit-blue" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-green/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-green">•</span>
                      </div>
                      <p className="text-gray-600">Account Security</p>
                    </div>
                    <p className="ml-8 text-gray-600">
                      You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                    </p>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-blue/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-blue">•</span>
                      </div>
                      <p className="text-gray-600">Prohibited Activities</p>
                    </div>
                    <p className="ml-8 text-gray-600">
                      You agree not to use our services for any illegal or unauthorized purposes, including but not limited to fraud, harassment, or unauthorized access.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="text-xl">3. Service Terms</CardTitle>
                  </div>
                  <BookOpen className="h-6 w-6 text-tranzit-orange" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-green/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-green">•</span>
                      </div>
                      <p className="text-gray-600">Delivery Services</p>
                    </div>
                    <p className="ml-8 text-gray-600">
                      We provide delivery services for various items, including food, packages, and groceries. Delivery times may vary based on location and demand.
                    </p>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-blue/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-blue">•</span>
                      </div>
                      <p className="text-gray-600">Payment Terms</p>
                    </div>
                    <p className="ml-8 text-gray-600">
                      Payments must be made in advance for delivery services. We accept various payment methods including mobile money and credit cards.
                    </p>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-orange/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-orange">•</span>
                      </div>
                      <p className="text-gray-600">Cancellation Policy</p>
                    </div>
                    <p className="ml-8 text-gray-600">
                      Orders may be cancelled before the driver has picked up the item. Cancellation fees may apply in certain circumstances.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="text-xl">4. Limitation of Liability</CardTitle>
                  </div>
                  <Shield className="h-6 w-6 text-tranzit-green" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    In no event shall Tranzit be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services.
                  </p>
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
