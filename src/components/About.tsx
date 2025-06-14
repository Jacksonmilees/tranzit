"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Truck, MapPin, Users, Clock, Shield, Award, BookOpen } from "lucide-react";
import Image from "next/image";
import TeamMember from "./TeamMember";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-tranzit-green">Tranzit</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Transforming delivery in Kenya with technology and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mission Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex flex-col space-y-1">
                <CardTitle className="text-xl">Our Mission</CardTitle>
              </div>
              <Shield className="h-6 w-6 text-tranzit-green" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  At Tranzit, we're dedicated to revolutionizing the delivery industry in Kenya through technology and innovation. 
                  Our mission is to provide fast, reliable, and affordable delivery services that make your life easier.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Fast delivery within minutes</li>
                  <li>Real-time tracking</li>
                  <li>24/7 customer support</li>
                  <li>Secure payment options</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Values Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex flex-col space-y-1">
                <CardTitle className="text-xl">Our Values</CardTitle>
              </div>
              <Award className="h-6 w-6 text-tranzit-blue" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  We believe in putting our customers first and delivering exceptional service every time.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Customer First - We prioritize your needs and satisfaction</li>
                  <li>Reliability - Consistent service you can depend on</li>
                  <li>Innovation - Always improving through technology</li>
                  <li>Transparency - Clear communication and honest service</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* History Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex flex-col space-y-1">
                <CardTitle className="text-xl">Our Journey</CardTitle>
              </div>
              <BookOpen className="h-6 w-6 text-tranzit-orange" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Founded in 2024, Tranzit has quickly become one of Kenya's leading delivery platforms. 
                  Our journey has been marked by continuous growth and innovation:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>2024 - Launched in Nairobi</li>
                  <li>2025 - Expanded to 50+ cities</li>
                  <li>2026 - Introduced driver app</li>
                  <li>2027 - Launched enterprise solutions</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-white p-6 rounded-xl shadow-lg">
            {/* Team Member 1 */}
            <TeamMember
              name="Jackson Alex"
              role="Frontend Developer"
              imageUrl="/images/jackson.jpg"
              link="/about"
              linkText="View Profile"
              linkColor="text-tranzit-green"
            />

            {/* Team Member 2 */}
            <TeamMember
              name="Elijah Kibuchi"
              role="Backend Developer"
              imageUrl="/images/elijah.jpg"
              link="/about"
              linkText="View Profile"
              linkColor="text-tranzit-blue"
            />

            {/* Team Member 3 */}
            <TeamMember
              name="Dan"
              role="Backend Developer"
              imageUrl="/images/dan.jpg"
              link="https://www.linkedin.com/in/daniel-ngumo-20960127b/"
              linkText="LinkedIn Profile"
              linkColor="text-tranzit-orange"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
