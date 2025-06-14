import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, BookOpen } from "lucide-react";

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Accessibility Statement
            </h1>
            <p className="text-xl text-gray-600">Last updated: June 14, 2025</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <section className="mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="text-xl">1. Commitment to Accessibility</CardTitle>
                  </div>
                  <Shield className="h-6 w-6 text-tranzit-green" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    At Tranzit, we are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section className="mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="text-xl">2. Accessibility Standards</CardTitle>
                  </div>
                  <Clock className="h-6 w-6 text-tranzit-blue" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-green/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-green">•</span>
                      </div>
                      <p className="text-gray-600">Web Content Accessibility Guidelines (WCAG)</p>
                    </div>
                    <p className="ml-8 text-gray-600">
                      We strive to maintain compliance with WCAG 2.1 Level AA guidelines.
                    </p>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-blue/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-blue">•</span>
                      </div>
                      <p className="text-gray-600">Mobile App Accessibility</p>
                    </div>
                    <p className="ml-8 text-gray-600">
                      Our mobile app is designed to be accessible on both iOS and Android devices.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="text-xl">3. Features & Support</CardTitle>
                  </div>
                  <BookOpen className="h-6 w-6 text-tranzit-orange" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-green/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-green">•</span>
                      </div>
                      <p className="text-gray-600">Keyboard Navigation</p>
                    </div>
                    <p className="ml-8 text-gray-600">
                      Our website and app support full keyboard navigation.
                    </p>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-blue/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-blue">•</span>
                      </div>
                      <p className="text-gray-600">Screen Reader Support</p>
                    </div>
                    <p className="ml-8 text-gray-600">
                      We provide proper ARIA labels and roles for screen reader support.
                    </p>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-tranzit-orange/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-tranzit-orange">•</span>
                      </div>
                      <p className="text-gray-600">Color Contrast</p>
                    </div>
                    <p className="ml-8 text-gray-600">
                      We ensure sufficient color contrast for readability.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="mb-12">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="text-xl">4. Feedback & Assistance</CardTitle>
                  </div>
                  <Shield className="h-6 w-6 text-tranzit-green" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We welcome feedback on the accessibility of our website and app. If you encounter any accessibility barriers, please contact us at support@tranzit.ke or +254 700 088 271.
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
