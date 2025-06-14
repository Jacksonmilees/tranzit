import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, BookOpen } from "lucide-react";

export default function DriverTerms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Driver Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600">Last updated: June 14, 2025</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <section className="mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="text-xl">1. Driver Requirements</CardTitle>
                  </div>
                  <Shield className="h-6 w-6 text-tranzit-green" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-green/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-green">•</span>
                      </div>
                      <p className="text-gray-600">Age & License</p>
                    </div>
                    <p className="ml-8 text-gray-600">
                      Drivers must be at least 21 years old and possess a valid Kenyan driving license.
                    </p>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-blue/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-blue">•</span>
                      </div>
                      <p className="text-gray-600">Vehicle Requirements</p>
                    </div>
                    <p className="ml-8 text-gray-600">
                      Vehicles must be in good working condition, insured, and meet our safety standards.
                    </p>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-orange/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-orange">•</span>
                      </div>
                      <p className="text-gray-600">Background Check</p>
                    </div>
                    <p className="ml-8 text-gray-600">
                      All drivers must pass a background check before being approved to use our platform.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="text-xl">2. Driver Responsibilities</CardTitle>
                  </div>
                  <Clock className="h-6 w-6 text-tranzit-blue" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-green/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-green">•</span>
                      </div>
                      <p className="text-gray-600">Delivery Standards</p>
                    </div>
                    <p className="ml-8 text-gray-600">
                      Drivers must maintain professional behavior and ensure timely deliveries.
                    </p>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-blue/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-blue">•</span>
                      </div>
                      <p className="text-gray-600">Vehicle Maintenance</p>
                    </div>
                    <p className="ml-8 text-gray-600">
                      Drivers are responsible for maintaining their vehicles in good working condition.
                    </p>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-orange/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-orange">•</span>
                      </div>
                      <p className="text-gray-600">Safety Compliance</p>
                    </div>
                    <p className="ml-8 text-gray-600">
                      Drivers must comply with all traffic laws and safety regulations.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="text-xl">3. Payment & Earnings</CardTitle>
                  </div>
                  <BookOpen className="h-6 w-6 text-tranzit-orange" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Drivers earn a percentage of each delivery fee, with the exact percentage varying based on delivery type and distance.
                    </p>
                    <p className="text-gray-600">
                      Payments are processed weekly through mobile money or bank transfer.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="text-xl">4. Termination of Service</CardTitle>
                  </div>
                  <Shield className="h-6 w-6 text-tranzit-green" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We reserve the right to terminate a driver's access to our platform if they violate our terms, fail to meet performance standards, or engage in unsafe behavior.
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
