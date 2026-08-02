import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GalleryContent } from "@/components/GalleryContent";

export const metadata: Metadata = {
  title: "Gallery | Ramos Lawn Care Services",
  description:
    "View our portfolio of landscaping projects in Atlanta. Patios, fences, retaining walls, and complete landscape transformations.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="bg-green-500/20 text-green-200 border-green-400/30 mb-4">
              Our Work
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Project Gallery
            </h1>
            <p className="text-xl text-green-100">
              Browse our portfolio of completed projects. From simple lawn
              maintenance to complete outdoor transformations.
            </p>
          </div>
        </div>
      </section>

      <GalleryContent />

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us bring your outdoor vision to life. Contact us for a free
            consultation and estimate.
          </p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
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
