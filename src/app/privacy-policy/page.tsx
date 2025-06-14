import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">Last updated: June 14, 2025</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <section className="mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="text-xl">1. Introduction</CardTitle>
                  </div>
                  <Shield className="h-6 w-6 text-tranzit-green" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    This Privacy Policy describes how Tranzit ("we", "us", or "our") collects, uses, and protects your personal information when you use our delivery services and website. We are committed to protecting your privacy and ensuring that your personal information is handled in a secure and transparent manner.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section className="mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="text-xl">2. Information We Collect</CardTitle>
                  </div>
                  <Clock className="h-6 w-6 text-tranzit-blue" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We collect various types of information to provide and improve our services:
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-green/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-green">•</span>
                      </div>
                      <p className="text-gray-600">Personal Information:</p>
                    </div>
                    <ul className="ml-8 list-disc text-gray-600">
                      <li>Name and contact information</li>
                      <li>Delivery addresses</li>
                      <li>Payment information (for service users)</li>
                    </ul>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-blue/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-blue">•</span>
                      </div>
                      <p className="text-gray-600">Usage Data:</p>
                    </div>
                    <ul className="ml-8 list-disc text-gray-600">
                      <li>IP address and device information</li>
                      <li>Location data (for delivery services)</li>
                      <li>Service usage patterns</li>
                    </ul>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-orange/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-orange">•</span>
                      </div>
                      <p className="text-gray-600">Driver Information:</p>
                    </div>
                    <ul className="ml-8 list-disc text-gray-600">
                      <li>Driver license information</li>
                      <li>Vehicle details</li>
                      <li>Delivery performance metrics</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="text-xl">3. How We Use Your Information</CardTitle>
                  </div>
                  <BookOpen className="h-6 w-6 text-tranzit-orange" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-green/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-green">•</span>
                      </div>
                      <p className="text-gray-600">Service Delivery:</p>
                    </div>
                    <ul className="ml-8 list-disc text-gray-600">
                      <li>To process and fulfill delivery requests</li>
                      <li>To match drivers with delivery requests</li>
                      <li>To provide real-time tracking information</li>
                    </ul>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-blue/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-blue">•</span>
                      </div>
                      <p className="text-gray-600">Business Operations:</p>
                    </div>
                    <ul className="ml-8 list-disc text-gray-600">
                      <li>To improve our services and features</li>
                      <li>To communicate important updates</li>
                      <li>To manage payments and billing</li>
                    </ul>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-orange/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-orange">•</span>
                      </div>
                      <p className="text-gray-600">Legal Compliance:</p>
                    </div>
                    <ul className="ml-8 list-disc text-gray-600">
                      <li>To comply with legal requirements</li>
                      <li>To protect our rights and property</li>
                      <li>To prevent fraud and abuse</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="text-xl">4. Your Rights</CardTitle>
                  </div>
                  <Shield className="h-6 w-6 text-tranzit-green" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-green/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-green">•</span>
                      </div>
                      <p className="text-gray-600">Access Your Information</p>
                    </div>
                    <p className="ml-8 text-gray-600">You have the right to access the personal information we hold about you.</p>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-blue/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-blue">•</span>
                      </div>
                      <p className="text-gray-600">Correct Information</p>
                    </div>
                    <p className="ml-8 text-gray-600">You can request to correct any inaccurate information we have about you.</p>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-orange/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-orange">•</span>
                      </div>
                      <p className="text-gray-600">Delete Information</p>
                    </div>
                    <p className="ml-8 text-gray-600">You can request deletion of your personal information in certain circumstances.</p>
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
