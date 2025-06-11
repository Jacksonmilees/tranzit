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
            Your trusted partner for fast, reliable, and affordable deliveries across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mission Card */}
          <Card className="bg-white shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex flex-col space-y-1">
                <CardTitle className="text-sm font-medium">Our Mission</CardTitle>
              </div>
              <Shield className="h-6 w-6 text-tranzit-green" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                At Tranzit, we're dedicated to revolutionizing the delivery industry in Kenya. 
                Our mission is to provide fast, reliable, and affordable delivery services 
                that make your life easier.
              </p>
            </CardContent>
          </Card>

          {/* Values Card */}
          <Card className="bg-white shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex flex-col space-y-1">
                <CardTitle className="text-sm font-medium">Our Values</CardTitle>
              </div>
              <Award className="h-6 w-6 text-tranzit-blue" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Customer First</li>
                  <li>Reliability</li>
                  <li>Innovation</li>
                  <li>Transparency</li>
                </ul>
              </p>
            </CardContent>
          </Card>

          {/* History Card */}
          <Card className="bg-white shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex flex-col space-y-1">
                <CardTitle className="text-sm font-medium">Our Journey</CardTitle>
              </div>
              <BookOpen className="h-6 w-6 text-tranzit-orange" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Founded in 2024, Tranzit has quickly become one of Kenya's leading delivery 
                platforms. With a focus on technology and customer service, we've grown 
                to serve thousands of customers across 50+ cities.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <TeamMember
              name="Jackson Alex"
              role="Frontend Developer"
              imageUrl="/images/jackson.jpg"
              link="https://jacksonalex.co.ke"
              linkText="View Portfolio"
              linkColor="text-tranzit-green"
            />

            {/* Team Member 2 */}
            <TeamMember
              name="Elijah Kibuchi"
              role="Backend Developer"
              imageUrl="/images/elijah.jpg"
              link="https://linkedin.com/in/elijah-kibuchi-999296242"
              linkText="LinkedIn Profile"
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
