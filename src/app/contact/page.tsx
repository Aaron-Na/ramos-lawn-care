"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const services = [
  "Lawn Maintenance",
  "Landscaping",
  "Patio Installation",
  "Fence Installation",
  "Mulch/Pine Straw",
  "Seasonal Cleanup",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    return { daysInMonth, startingDay };
  };

  const { daysInMonth, startingDay } = getDaysInMonth(currentMonth);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend/email service
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="bg-green-500/20 text-green-200 border-green-400/30 mb-4">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Free Estimate
            </h1>
            <p className="text-xl text-green-100">
              Ready to transform your outdoor space? Contact us today for a free
              consultation and estimate. We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-green-600" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="tel:4047545182"
                    className="text-xl font-semibold text-green-600 hover:text-green-700"
                  >
                    (404) 754-5182
                  </a>
                  <p className="text-gray-500 text-sm mt-1">
                    Mon-Fri: 7am - 6pm
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-green-600" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:ramoslawncare@yahoo.com"
                    className="text-green-600 hover:text-green-700"
                  >
                    ramoslawncare@yahoo.com
                  </a>
                  <p className="text-gray-500 text-sm mt-1">
                    We respond within 24 hours
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-green-600" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-medium">5503 Ryan Ct SW</p>
                  <p className="text-gray-700">Stone Mountain, GA 30087</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Serving Atlanta & Surrounding Areas
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-green-600" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="text-gray-900">Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="text-gray-900">7:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="text-gray-900">9:00 AM - 3:30 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Schedule Button - Calendly Integration Ready */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="h-6 w-6 text-green-600" />
                    <h3 className="font-semibold text-green-800">
                      Schedule Online
                    </h3>
                  </div>
                  <p className="text-sm text-green-700 mb-4">
                    Book a consultation directly on our calendar.
                  </p>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => setShowCalendar(!showCalendar)}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {showCalendar ? "Hide Calendar" : "Book Appointment"}
                  </Button>

                  {/* Placeholder Calendar */}
                  {showCalendar && (
                    <div className="mt-4 bg-white rounded-lg p-4 border border-green-200">
                      {/* Calendar Header */}
                      <div className="flex items-center justify-between mb-4">
                        <button
                          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                          className="p-1 hover:bg-green-100 rounded"
                        >
                          <ChevronLeft className="h-5 w-5 text-green-600" />
                        </button>
                        <h4 className="font-semibold text-gray-800">
                          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                        </h4>
                        <button
                          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                          className="p-1 hover:bg-green-100 rounded"
                        >
                          <ChevronRight className="h-5 w-5 text-green-600" />
                        </button>
                      </div>

                      {/* Day Headers */}
                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                          <div key={day} className="text-center text-xs font-medium text-gray-500 py-1">
                            {day}
                          </div>
                        ))}
                      </div>

                      {/* Calendar Days */}
                      <div className="grid grid-cols-7 gap-1">
                        {Array.from({ length: startingDay }).map((_, i) => (
                          <div key={`empty-${i}`} />
                        ))}
                        {Array.from({ length: daysInMonth }).map((_, i) => {
                          const day = i + 1;
                          const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                          const isToday = new Date().toDateString() === date.toDateString();
                          const isSelected = selectedDate?.toDateString() === date.toDateString();
                          const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
                          const isWeekend = date.getDay() === 0;

                          return (
                            <button
                              key={day}
                              disabled={isPast || isWeekend}
                              onClick={() => setSelectedDate(date)}
                              className={`
                                p-2 text-sm rounded-md transition-colors
                                ${isPast || isWeekend ? "text-gray-300 cursor-not-allowed" : "hover:bg-green-100 cursor-pointer"}
                                ${isToday ? "border border-green-500" : ""}
                                ${isSelected ? "bg-green-600 text-white hover:bg-green-700" : ""}
                              `}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>

                      {/* Time Slots */}
                      {selectedDate && (
                        <div className="mt-4 pt-4 border-t">
                          <p className="text-sm font-medium text-gray-700 mb-2">
                            Available times for {selectedDate.toLocaleDateString()}:
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                className="text-sm py-2 px-3 border border-green-200 rounded-md hover:bg-green-50 hover:border-green-400 transition-colors"
                                onClick={() => {
                                  alert(`Demo: You selected ${selectedDate.toLocaleDateString()} at ${time}. In production, this would book your appointment.`);
                                }}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      <p className="text-xs text-gray-500 mt-4 text-center">
                        Select a date and time for your free consultation
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Request a Free Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Thank You!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        We&apos;ve received your request and will contact you within
                        24 hours.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            address: "",
                            service: "",
                            message: "",
                          });
                        }}
                      >
                        Submit Another Request
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Phone Number *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Property Address *
                        </label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          placeholder="123 Main St, Atlanta, GA 30301"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Service Interested In *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                          <option value="">Select a service...</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Project Details
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Tell us about your project, timeline, and any specific requirements..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-green-600 hover:bg-green-700"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Submit Request
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        By submitting this form, you agree to be contacted
                        regarding your request. We respect your privacy and will
                        never share your information.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="h-96 bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.5765085429!2d-84.5518!3d33.7490!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ramos Lawn Care Service Area - Atlanta, GA"
          className="absolute inset-0"
        />
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 max-w-xs">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-900">Ramos Lawn Care</p>
              <p className="text-sm text-gray-600">Stone Mountain, GA 30087</p>
              <p className="text-xs text-green-600 mt-1">Serving Atlanta & Surrounding Areas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
