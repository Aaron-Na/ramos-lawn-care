import Link from "next/link";
import { Leaf, Phone, Mail, MapPin } from "lucide-react";

const services = [
  "Lawn Mowing",
  "Landscaping",
  "Patio Installation",
  "Fence Installation",
  "Seasonal Cleanup",
  "Mulch & Pine Straw",
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-400" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Ramos</span>
                <span className="text-xs text-green-400 -mt-1">
                  Lawn Care Services
                </span>
              </div>
            </div>
            <p className="text-green-200 text-sm">
              Professional lawn care and landscaping services in Atlanta.
              Quality service and your satisfaction is our goal.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-green-400 hover:text-white transition-colors text-sm"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-green-400 hover:text-white transition-colors text-sm"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-green-200 hover:text-white text-sm transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-green-200 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-green-400 mt-0.5" />
                <div>
                  <a
                    href="tel:4047545182"
                    className="text-green-200 hover:text-white text-sm transition-colors"
                  >
                    (404) 754-5182
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-green-400 mt-0.5" />
                <div>
                  <a
                    href="mailto:ramoslawncare@yahoo.com"
                    className="text-green-200 hover:text-white text-sm transition-colors"
                  >
                    ramoslawncare@yahoo.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5" />
                <span className="text-green-200 text-sm">
                  Serving Atlanta & Surrounding Areas
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-300 text-sm">
          <p>
            © {new Date().getFullYear()} Ramos Lawn Care Services. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
