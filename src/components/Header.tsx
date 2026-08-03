"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-green-600" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-green-800">Ramos</span>
            <span className="text-xs text-green-600 -mt-1">Lawn Care Services</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:4047545182"
            className="flex items-center text-sm font-medium text-green-700 hover:text-green-800"
          >
            <Phone className="h-4 w-4 mr-2" />
            (404) 754-5182
          </a>
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="md:hidden">
            <Button variant="ghost" size="icon" asChild>
              <span>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <a
                  href="tel:4047545182"
                  className="flex items-center text-lg font-medium text-green-700"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  (404) 754-5182
                </a>
              </div>
              <Button asChild className="bg-green-600 hover:bg-green-700 mt-4">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
