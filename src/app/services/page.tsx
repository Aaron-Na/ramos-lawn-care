import { Metadata } from "next";
import Link from "next/link";
import {
  Leaf,
  TreeDeciduous,
  Fence,
  Shovel,
  Droplets,
  Sun,
  Scissors,
  Flower2,
  Home,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Services | Ramos Lawn Care Services",
  description:
    "Professional lawn care and landscaping services in Atlanta. Mowing, landscaping, patio installation, fence installation, and more.",
};

const mainServices = [
  {
    icon: Leaf,
    title: "Lawn Maintenance",
    description:
      "Keep your lawn looking pristine year-round with our comprehensive maintenance services.",
    features: [
      "Weekly/Bi-weekly mowing",
      "Professional edging",
      "Trimming & pruning",
      "Blowing & cleanup",
      "Weed control",
    ],
  },
  {
    icon: TreeDeciduous,
    title: "Landscaping Design",
    description:
      "Transform your outdoor space with custom landscape design and installation.",
    features: [
      "Custom design consultation",
      "Plant selection & installation",
      "Garden bed creation",
      "Tree & shrub planting",
      "Landscape lighting",
    ],
  },
  {
    icon: Shovel,
    title: "Hardscaping",
    description:
      "Beautiful patios, walkways, and retaining walls that add value to your property.",
    features: [
      "Paver patio installation",
      "Stone walkways",
      "Retaining walls",
      "Fire pit installation",
      "Outdoor living spaces",
    ],
  },
  {
    icon: Fence,
    title: "Fence Installation",
    description:
      "Quality fencing solutions for privacy, security, and curb appeal.",
    features: [
      "Wood fence installation",
      "Vinyl fencing",
      "Decorative fencing",
      "Gate installation",
      "Fence repair",
    ],
  },
  {
    icon: Droplets,
    title: "Mulch & Ground Cover",
    description:
      "Professional mulch and pine straw installation for healthy, beautiful beds.",
    features: [
      "Mulch installation",
      "Pine straw installation",
      "Rock & gravel",
      "Weed barrier",
      "Bed edging",
    ],
  },
  {
    icon: Sun,
    title: "Seasonal Services",
    description:
      "Prepare your lawn for every season with our specialized services.",
    features: [
      "Fall leaf removal",
      "Core aeration",
      "Overseeding",
      "Gutter cleaning",
      "Spring cleanup",
    ],
  },
];

const additionalServices = [
  { icon: Scissors, name: "Shrub Trimming" },
  { icon: Flower2, name: "Flower Planting" },
  { icon: Home, name: "Property Cleanup" },
  { icon: TreeDeciduous, name: "Tree Services" },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="bg-green-500/20 text-green-200 border-green-400/30 mb-4">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Lawn Care & Landscaping Services
            </h1>
            <p className="text-xl text-green-100">
              From routine maintenance to complete outdoor transformations, we
              provide comprehensive services to keep your property looking its
              best.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service) => (
              <Card
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                    <service.icon className="h-7 w-7 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Additional Services
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalServices.map((service) => (
              <div
                key={service.name}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"
              >
                <service.icon className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate. We&apos;ll assess your property
            and provide a detailed quote.
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
