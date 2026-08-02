import { Metadata } from "next";
import Link from "next/link";
import { Shovel, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Gallery | Ramos Lawn Care Services",
  description:
    "View our portfolio of landscaping projects in Atlanta. Patios, fences, retaining walls, and complete landscape transformations.",
};

const projects = [
  {
    title: "Paver Patio Installation",
    category: "Hardscaping",
    location: "East Cobb, GA",
  },
  {
    title: "Complete Landscape Design",
    category: "Landscaping",
    location: "Stone Mountain, GA",
  },
  {
    title: "Wood Fence Installation",
    category: "Fencing",
    location: "Atlanta, GA",
  },
  {
    title: "Fire Pit & Patio",
    category: "Hardscaping",
    location: "Marietta, GA",
  },
  {
    title: "Surge Stone & Slate Chip",
    category: "Ground Cover",
    location: "Decatur, GA",
  },
  {
    title: "Timber Retaining Wall",
    category: "Hardscaping",
    location: "Roswell, GA",
  },
  {
    title: "Masonry Wall Installation",
    category: "Hardscaping",
    location: "Alpharetta, GA",
  },
  {
    title: "Cobblestone Installation",
    category: "Hardscaping",
    location: "Sandy Springs, GA",
  },
  {
    title: "Stone Veneer Installation",
    category: "Hardscaping",
    location: "Dunwoody, GA",
  },
  {
    title: "Pool Paver Patio",
    category: "Hardscaping",
    location: "Buckhead, GA",
  },
  {
    title: "Gravel Pathway",
    category: "Landscaping",
    location: "Brookhaven, GA",
  },
  {
    title: "Natural Boulder Wall",
    category: "Hardscaping",
    location: "Johns Creek, GA",
  },
];

const categories = [
  "All",
  "Hardscaping",
  "Landscaping",
  "Fencing",
  "Ground Cover",
];

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

      {/* Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={
                  category === "All"
                    ? "bg-green-600 hover:bg-green-700 cursor-pointer"
                    : "cursor-pointer hover:bg-green-50"
                }
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-green-200 to-green-400 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shovel className="h-20 w-20 text-green-600/20" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform">
                    <Badge className="bg-green-600 mb-2">
                      {project.category}
                    </Badge>
                    <h3 className="text-white font-semibold text-lg">
                      {project.title}
                    </h3>
                    <p className="text-green-200 text-sm">{project.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
