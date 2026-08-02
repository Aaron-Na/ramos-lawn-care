import { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Reviews | Ramos Lawn Care Services",
  description:
    "Read what our customers say about Ramos Lawn Care Services. 5-star reviews from Atlanta homeowners.",
};

const reviews = [
  {
    name: "Javier Garcia",
    location: "Stone Mountain, GA",
    date: "March 2024",
    rating: 5,
    text: "Ramos Lawn Care transformed our backyard! Professional, on-time, and the quality is outstanding. They installed a beautiful paver patio and the attention to detail was incredible. Highly recommend!",
    service: "Patio Installation",
  },
  {
    name: "Mike Kehoe",
    location: "East Cobb, GA",
    date: "February 2024",
    rating: 5,
    text: "Best lawn care service in Atlanta. They go above and beyond every single time. Our neighbors are always asking who does our lawn! The weekly maintenance keeps our property looking pristine.",
    service: "Lawn Maintenance",
  },
  {
    name: "Beverly Perry",
    location: "Atlanta, GA",
    date: "January 2024",
    rating: 5,
    text: "From the initial quote to project completion, the team was fantastic. Our new patio is exactly what we envisioned. They were professional, clean, and finished on time.",
    service: "Hardscaping",
  },
  {
    name: "Robert Chen",
    location: "Marietta, GA",
    date: "December 2023",
    rating: 5,
    text: "We hired Ramos for a complete landscape redesign. They listened to our ideas and created something even better than we imagined. The plants are thriving and the design is beautiful.",
    service: "Landscaping",
  },
  {
    name: "Sarah Thompson",
    location: "Roswell, GA",
    date: "November 2023",
    rating: 5,
    text: "Excellent fence installation! The wood fence looks amazing and was installed quickly. The crew was respectful of our property and cleaned up everything when they finished.",
    service: "Fence Installation",
  },
  {
    name: "David Martinez",
    location: "Alpharetta, GA",
    date: "October 2023",
    rating: 5,
    text: "We've been using Ramos for monthly lawn maintenance for over a year now. Consistent quality, fair pricing, and great communication. They always let us know when they're coming.",
    service: "Lawn Maintenance",
  },
  {
    name: "Jennifer Williams",
    location: "Sandy Springs, GA",
    date: "September 2023",
    rating: 5,
    text: "The retaining wall they built solved our drainage issues and looks fantastic. Professional team, quality materials, and excellent craftsmanship. Worth every penny!",
    service: "Retaining Wall",
  },
  {
    name: "Michael Brown",
    location: "Decatur, GA",
    date: "August 2023",
    rating: 5,
    text: "Fall cleanup was thorough and efficient. They removed all the leaves, cleaned the gutters, and even did some light pruning. My yard looks ready for winter.",
    service: "Seasonal Cleanup",
  },
];

export default function ReviewsPage() {
  const averageRating = 5.0;
  const totalReviews = reviews.length;

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="bg-green-500/20 text-green-200 border-green-400/30 mb-4">
              Customer Reviews
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Don&apos;t just take our word for it. Read reviews from our satisfied
              customers across the Atlanta area.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-2xl font-bold">{averageRating}</span>
              <span className="text-green-200">
                Based on {totalReviews} reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {review.name}
                      </h3>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                    <Badge variant="outline" className="text-green-600">
                      {review.service}
                    </Badge>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-green-100" />
                    <p className="text-gray-600 pl-6">{review.text}</p>
                  </div>
                  <p className="text-sm text-gray-400 mt-4">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied customers. Get a free estimate
            today!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-green-700 hover:bg-green-50"
          >
            <Link href="/contact">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
