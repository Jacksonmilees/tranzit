import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Grace Wanjiku",
      role: "Marketing Manager",
      company: "TechCorp",
      avatar: "GW",
      rating: 5,
      text: "Tranzit made my house relocation so smooth! They handled my furniture and electronics with care. The team was professional and the tracking feature gave me peace of mind.",
      deliveryType: "House Relocation",
    },
    {
      name: "James Kamau",
      role: "Restaurant Owner",
      company: "Kamau's Kitchen",
      avatar: "JK",
      rating: 5,
      text: "As a restaurant owner, reliable delivery is crucial. Tranzit's couriers are professional, fast, and our customers love the real-time tracking feature.",
      deliveryType: "Food Delivery",
    },
    {
      name: "Faith Njeri",
      role: "Busy Mom",
      company: "Freelancer",
      avatar: "FN",
      rating: 5,
      text: "Moving with two kids was stressful until I found Tranzit. They helped relocate our entire household efficiently. Groceries, medicine, household items - they deliver everything I need!",
      deliveryType: "Family Relocation",
    },
    {
      name: "Peter Ochieng",
      role: "Small Business Owner",
      company: "Ochieng Enterprises",
      avatar: "PO",
      rating: 5,
      text: "When I relocated my office, Tranzit handled everything perfectly. From computers to office furniture, they moved everything safely. Exceptional service!",
      deliveryType: "Office Relocation",
    },
    {
      name: "Mary Akinyi",
      role: "Student",
      company: "University of Nairobi",
      avatar: "MA",
      rating: 5,
      text: "Perfect for campus life! Moving from hostel to hostel, getting food delivered, and even relocating back home during holidays. Affordable and reliable!",
      deliveryType: "Student Moving",
    },
    {
      name: "Samuel Kiprop",
      role: "Senior Citizen",
      company: "Retired",
      avatar: "SK",
      rating: 5,
      text: "The app is so easy to use, even for someone like me. When I downsized to a smaller house, Tranzit helped move my belongings safely. Very helpful team!",
      deliveryType: "Senior Relocation",
    },
  ];

  const companyLogos = [
    { name: "TechCorp", logo: "T" },
    { name: "StartupXYZ", logo: "S" },
    { name: "Global Inc", logo: "G" },
    { name: "Innovation Co", logo: "I" },
    { name: "Future Tech", logo: "F" },
    { name: "Digital Solutions", logo: "D" },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-tranzit-green">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Don't just take our word for it. Here's what thousands of satisfied
            customers have to say about their Tranzit experience.
          </p>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white rounded-2xl px-8 py-4 shadow-lg">
            <div className="flex items-center space-x-1">{renderStars(5)}</div>
            <span className="text-3xl font-bold text-gray-900">4.9</span>
            <span className="text-gray-600">out of 5 stars</span>
            <span className="text-sm text-gray-500">(12,847 reviews)</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white relative"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-12 w-12 text-tranzit-green" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Delivery Type Badge */}
                <div className="mb-6">
                  <span className="inline-block bg-tranzit-green/10 text-tranzit-green px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.deliveryType}
                  </span>
                </div>

                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.name}`}
                    />
                    <AvatarFallback className="bg-tranzit-blue text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Logos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Trusted by Companies Worldwide
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white rounded-xl px-6 py-3 shadow-sm"
              >
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-gray-600">
                    {company.logo}
                  </span>
                </div>
                <span className="font-semibold text-gray-700">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Video Testimonial Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                See Why Customers{" "}
                <span className="text-tranzit-orange">Love</span> Tranzit
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Watch real customers share their experiences and discover why
                Tranzit is the most trusted delivery platform in the region.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-tranzit-green rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Average 4.9/5 star rating
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-tranzit-orange rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    98% customer satisfaction rate
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-tranzit-blue rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    12,000+ positive reviews
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Video Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-tranzit-green to-tranzit-blue rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/30 transition-colors">
                    <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Customer Stories</h4>
                  <p className="text-white/80">
                    Watch how Tranzit makes a difference
                  </p>
                </div>

                {/* Background Pattern */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
