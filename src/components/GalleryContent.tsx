"use client";

import { useState } from "react";
import { Shovel } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

const categories = ["All", "Hardscaping", "Landscaping", "Fencing", "Ground Cover"];

export function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      {/* Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
              >
                <Badge
                  variant={activeCategory === category ? "default" : "outline"}
                  className={
                    activeCategory === category
                      ? "bg-green-600 hover:bg-green-700 cursor-pointer"
                      : "cursor-pointer hover:bg-green-50"
                  }
                >
                  {category}
                </Badge>
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
            {activeCategory !== "All" && ` in ${activeCategory}`}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <Card
                key={`${project.title}-${index}`}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-green-200 to-green-400 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shovel className="h-20 w-20 text-green-600/20" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform">
                    <Badge className="bg-green-600 mb-2">{project.category}</Badge>
                    <h3 className="text-white font-semibold text-lg">
                      {project.title}
                    </h3>
                    <p className="text-green-200 text-sm">{project.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <Shovel className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
