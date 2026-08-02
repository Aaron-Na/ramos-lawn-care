import Link from "next/link";
import {
  Leaf,
  TreeDeciduous,
  Fence,
  Shovel,
  Droplets,
  Sun,
  Star,
  CheckCircle,
  ArrowRight,
  Calendar,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Leaf,
    title: "Lawn Maintenance",
    description:
      "Regular mowing, trimming, edging, and blowing to keep your lawn pristine.",
  },
  {
    icon: TreeDeciduous,
    title: "Landscaping",
    description:
      "Complete landscape design and installation to transform your outdoor space.",
  },
  {
    icon: Fence,
    title: "Fence Installation",
    description:
      "Wood, vinyl, and decorative fencing to enhance privacy and curb appeal.",
  },
  {
    icon: Shovel,
    title: "Patio & Hardscaping",
    description:
      "Paver patios, retaining walls, and stone work for beautiful outdoor living.",
  },
  {
    icon: Droplets,
    title: "Mulch & Pine Straw",
    description:
      "Professional mulch and pine straw installation for healthy plant beds.",
  },
  {
    icon: Sun,
    title: "Seasonal Services",
    description:
      "Fall cleanup, leaf removal, aeration, seeding, and gutter cleaning.",
  },
];

const projects = [
  {
    title: "Paver Patio Installation",
    category: "Hardscaping",
    image: "/projects/patio.jpg",
  },
  {
    title: "Complete Landscape Design",
    category: "Landscaping",
    image: "/projects/landscape.jpg",
  },
  {
    title: "Wood Fence Installation",
    category: "Fencing",
    image: "/projects/fence.jpg",
  },
  {
    title: "Fire Pit & Patio",
    category: "Hardscaping",
    image: "/projects/firepit.jpg",
  },
];

const testimonials = [
  {
    name: "Javier Garcia",
    location: "Stone Mountain",
    text: "Ramos Lawn Care transformed our backyard! Professional, on-time, and the quality is outstanding. Highly recommend!",
    rating: 5,
  },
  {
    name: "Mike Kehoe",
    location: "East Cobb",
    text: "Best lawn care service in Atlanta. They go above and beyond every single time. Our neighbors are always asking who does our lawn!",
    rating: 5,
  },
  {
    name: "Beverly Perry",
    location: "Atlanta, GA",
    text: "From the initial quote to project completion, the team was fantastic. Our new patio is exactly what we envisioned.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <Badge className="bg-green-500/20 text-green-200 border-green-400/30 mb-4">
              Serving Atlanta & Surrounding Areas
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Beautify Your
              <br />
              <span className="text-green-300">Outdoor Space</span>
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-2xl">
              Professional lawn care and landscaping services. Quality service
              and your satisfaction is our goal. Licensed, insured, and trusted
              by Atlanta homeowners since 2015.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-green-800 hover:bg-green-50"
              >
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white text-green-800 hover:bg-green-50"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-green-600/50">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-sm">Free Estimates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-sm">Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Service & Your Satisfaction
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From routine lawn maintenance to complete landscape
              transformations, we handle it all with expertise and care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                    <service.icon className="h-6 w-6 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Our Work
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the transformations we&apos;ve created for Atlanta homeowners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-gradient-to-br from-green-200 to-green-400 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shovel className="h-16 w-16 text-green-600/30" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Badge className="bg-green-600 mb-2">
                      {project.category}
                    </Badge>
                    <h3 className="text-white font-semibold">{project.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-green-700 text-green-100 mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-green-200 max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from our satisfied
              customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-green-100 mb-4">&quot;{testimonial.text}&quot;</p>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-green-300">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button
              asChild
              size="lg"
              className="border-2 border-white bg-transparent text-white hover:bg-white/10"
            >
              <Link href="/reviews">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get a free estimate today. We&apos;ll assess your property and provide a
            detailed quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-green-700 hover:bg-green-50"
            >
              <Link href="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Estimate
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white text-green-700 hover:bg-green-50"
            >
              <a href="tel:4047545182">
                <Phone className="mr-2 h-5 w-5" />
                (404) 754-5182
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
