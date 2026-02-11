"use client";

import { useState } from "react";
import {
  Shield,
  Bug,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Star,
  Leaf,
  Zap,
  Award,
  Search,
  ClipboardList,
  ShieldCheck,
  Rat,
  Antenna,
  Droplets,
  BedDouble,
  Squirrel,
  Menu,
  X,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const services = [
  {
    icon: Bug,
    title: "Termite Control",
    description:
      "Comprehensive termite inspections and treatments to protect your property's structural integrity from costly damage.",
  },
  {
    icon: Rat,
    title: "Rodent Removal",
    description:
      "Effective rodent exclusion and removal strategies that eliminate infestations and prevent future entry points.",
  },
  {
    icon: Antenna,
    title: "Ant Treatment",
    description:
      "Targeted ant colony elimination using advanced baiting systems and perimeter treatments for lasting results.",
  },
  {
    icon: Droplets,
    title: "Mosquito Control",
    description:
      "Seasonal mosquito management programs that reduce populations and let you enjoy your outdoor spaces again.",
  },
  {
    icon: BedDouble,
    title: "Bed Bug Elimination",
    description:
      "Thorough heat treatments and targeted applications that completely eradicate bed bug infestations at every life stage.",
  },
  {
    icon: Squirrel,
    title: "Wildlife Exclusion",
    description:
      "Humane wildlife removal and exclusion services that seal entry points and relocate animals safely.",
  },
];

const features = [
  {
    icon: Award,
    title: "Licensed & Insured",
    description:
      "Fully licensed by the state of Washington and carrying comprehensive liability insurance for your peace of mind.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    description:
      "We prioritize environmentally responsible products that are safe for your family, pets, and the planet.",
  },
  {
    icon: Zap,
    title: "Same Day Service",
    description:
      "Emergency pest situations cannot wait. We offer same-day service for urgent infestations in the metro area.",
  },
  {
    icon: ShieldCheck,
    title: "Satisfaction Guaranteed",
    description:
      "If pests return between scheduled treatments, so do we — at no additional cost. That is our promise.",
  },
];

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Inspection",
    description:
      "Our certified technicians perform a thorough inspection of your property to identify pest activity, entry points, and conditions that attract pests.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Treatment Plan",
    description:
      "We develop a customized treatment plan tailored to your specific situation, using the most effective and least invasive methods available.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Ongoing Protection",
    description:
      "Regular follow-up visits and preventive treatments ensure pests stay gone. We monitor, adjust, and protect your property year-round.",
  },
];

const testimonials = [
  {
    name: "Jennifer Martinez",
    rating: 5,
    text: "ShieldPest Pro eliminated our termite problem completely. Their team was professional, thorough, and explained every step of the process. Highly recommend their services to any homeowner.",
  },
  {
    name: "David Chen",
    rating: 5,
    text: "We had a persistent rodent issue in our restaurant. ShieldPest Pro not only removed the problem but set up an ongoing prevention plan. Have not seen a single rodent since. Outstanding work.",
  },
  {
    name: "Sarah Thompson",
    rating: 5,
    text: "Same-day service when we discovered bed bugs was a lifesaver. The heat treatment worked perfectly, and the follow-up inspection confirmed everything was clear. Truly professional operation.",
  },
];

const serviceAreas = [
  "Seattle",
  "Bellevue",
  "Tacoma",
  "Redmond",
  "Kirkland",
  "Renton",
  "Everett",
  "Kent",
  "Federal Way",
  "Bothell",
  "Issaquah",
  "Sammamish",
];

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Areas", href: "#areas" },
];

/* ------------------------------------------------------------------ */
/*  MOBILE NAV                                                         */
/* ------------------------------------------------------------------ */

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        className="flex cursor-pointer items-center justify-center w-10 h-10 rounded-lg hover:bg-emerald-800 transition-colors"
        aria-label="Open navigation menu"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {open && (
        <div className="fixed inset-0 bg-emerald-950/95 z-50 flex flex-col items-center justify-center gap-8">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 cursor-pointer w-10 h-10 flex items-center justify-center rounded-lg hover:bg-emerald-800 transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-xl font-medium text-white hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+12065550147"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-base font-semibold text-emerald-950 hover:bg-amber-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              (206) 555-0147
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      {/* ===== HEADER / NAV ===== */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-emerald-950/90 backdrop-blur-md border-b border-emerald-800/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-amber-400" />
            <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
              ShieldPest<span className="text-amber-400"> Pro</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-emerald-100 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+12065550147"
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-amber-400 transition-colors"
            >
              <Phone className="h-4 w-4" />
              (206) 555-0147
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-emerald-950 hover:bg-amber-400 transition-colors"
            >
              Free Inspection
            </a>
          </div>

          <MobileNav />
        </div>
      </header>

      <main>
        {/* ===== HERO ===== */}
        <section className="relative flex min-h-[85vh] sm:min-h-[90vh] items-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 pt-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_70%)]" />
          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-700 bg-emerald-900/60 px-3 py-1.5 sm:px-4 text-xs sm:text-sm text-emerald-300">
                <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                Trusted by 2,500+ homes &amp; businesses
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Professional Pest
                <br />
                Control Services
              </h1>
              <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-emerald-100/80">
                Protecting Seattle-area homes and businesses from unwanted pests
                with safe, effective, and environmentally responsible solutions.
                Licensed technicians. Guaranteed results.
              </p>
              <div className="mt-8 sm:mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3.5 sm:px-8 sm:py-4 text-base font-semibold text-emerald-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400 hover:shadow-amber-400/30 transition-all"
                >
                  Get Free Inspection
                  <ChevronRight className="h-5 w-5" />
                </a>
                <a
                  href="tel:+12065550147"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-600 bg-emerald-900/40 px-6 py-3.5 sm:px-8 sm:py-4 text-base font-semibold text-white hover:bg-emerald-800 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section id="services" className="scroll-mt-16 bg-white py-16 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                What We Do
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                Our Pest Control Services
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
                From common household pests to complex wildlife situations, we
                have the expertise and equipment to handle it all.
              </p>
            </div>

            <div className="mt-10 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all"
                >
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                    <service.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHY CHOOSE US ===== */}
        <section
          id="why-us"
          className="scroll-mt-16 bg-emerald-950 py-16 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
                The ShieldPest Difference
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                Why Choose Us
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-emerald-200/70">
                We combine decades of experience with modern techniques to
                deliver superior pest control results.
              </p>
            </div>

            <div className="mt-10 sm:mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-emerald-800 bg-emerald-900/50 p-6 sm:p-8 hover:bg-emerald-900 hover:border-emerald-700 transition-all"
                >
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-emerald-800 text-amber-400 group-hover:bg-amber-500 group-hover:text-emerald-950 transition-colors">
                    <feature.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-base sm:text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-emerald-200/70">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROCESS ===== */}
        <section
          id="process"
          className="scroll-mt-16 bg-gray-50 py-16 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                How It Works
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                Our 3-Step Process
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
                A straightforward approach that delivers reliable, long-term
                pest protection for your property.
              </p>
            </div>

            <div className="mt-10 sm:mt-16 grid gap-10 sm:gap-12 lg:grid-cols-3 lg:gap-8">
              {steps.map((step, idx) => (
                <div key={step.title} className="relative text-center">
                  {idx < steps.length - 1 && (
                    <div className="absolute top-14 left-[calc(50%+3.5rem)] hidden h-0.5 w-[calc(100%-7rem)] bg-emerald-200 lg:block" />
                  )}
                  <div className="mx-auto flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                    <step.icon className="h-10 w-10 sm:h-12 sm:w-12" />
                  </div>
                  <span className="mt-5 sm:mt-6 block text-sm font-bold uppercase tracking-widest text-emerald-600">
                    Step {step.number}
                  </span>
                  <h3 className="mt-2 text-lg sm:text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-2 sm:mt-3 max-w-sm text-sm sm:text-base leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section
          id="testimonials"
          className="scroll-mt-16 bg-white py-16 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                Testimonials
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                What Our Customers Say
              </h2>
            </div>

            <div className="mt-10 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-gray-600">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="mt-4 sm:mt-6 text-sm font-semibold text-gray-900">
                    {t.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SERVICE AREAS ===== */}
        <section
          id="areas"
          className="scroll-mt-16 bg-gray-50 py-16 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                Coverage
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                Service Areas
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
                Proudly serving the greater Seattle metropolitan area and
                surrounding communities.
              </p>
            </div>

            <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-2.5 sm:gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-emerald-200 bg-white px-3.5 py-2 sm:px-5 sm:py-2.5 text-sm font-medium text-emerald-800 shadow-sm hover:bg-emerald-50 hover:border-emerald-300 transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600 shrink-0" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section
          id="contact"
          className="scroll-mt-16 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 py-16 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
            <Shield className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-amber-400" />
            <h2 className="mt-5 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to Reclaim Your Space?
            </h2>
            <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg text-emerald-100/80">
              Do not let pests compromise your comfort and safety. Contact us
              today for a free, no-obligation inspection and take the first step
              toward a pest-free property.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <a
                href="tel:+12065550147"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3.5 sm:px-8 sm:py-4 text-base font-semibold text-emerald-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400 hover:shadow-amber-400/30 transition-all"
              >
                <Phone className="h-5 w-5" />
                (206) 555-0147
              </a>
              <a
                href="mailto:info@shieldpestpro.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-600 bg-emerald-900/40 px-6 py-3.5 sm:px-8 sm:py-4 text-base font-semibold text-white hover:bg-emerald-800 transition-colors"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-emerald-950 border-t border-emerald-900">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2">
                <Shield className="h-7 w-7 text-amber-400 shrink-0" />
                <span className="text-lg font-bold text-white">
                  ShieldPest<span className="text-amber-400"> Pro</span>
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-emerald-300/70">
                Professional pest control services protecting homes and
                businesses across the Seattle metropolitan area since 2009.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-emerald-300/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
                Contact
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="tel:+12065550147"
                    className="flex items-center gap-2 text-sm text-emerald-300/70 hover:text-white transition-colors"
                  >
                    <Phone className="h-4 w-4 shrink-0" />
                    (206) 555-0147
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@shieldpestpro.com"
                    className="flex items-center gap-2 text-sm text-emerald-300/70 hover:text-white transition-colors"
                  >
                    <Mail className="h-4 w-4 shrink-0" />
                    <span className="break-all">info@shieldpestpro.com</span>
                  </a>
                </li>
                <li>
                  <span className="flex items-start gap-2 text-sm text-emerald-300/70">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                    4521 Aurora Ave N, Seattle, WA 98103
                  </span>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
                Hours of Operation
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center gap-2 text-sm text-emerald-300/70">
                  <Clock className="h-4 w-4 shrink-0" />
                  Mon–Fri: 7:00 AM – 7:00 PM
                </li>
                <li className="flex items-center gap-2 text-sm text-emerald-300/70">
                  <Clock className="h-4 w-4 shrink-0" />
                  Saturday: 8:00 AM – 5:00 PM
                </li>
                <li className="flex items-center gap-2 text-sm text-emerald-300/70">
                  <Clock className="h-4 w-4 shrink-0" />
                  Sunday: Closed
                </li>
                <li className="mt-2 text-sm font-medium text-amber-400">
                  24/7 Emergency Line Available
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 border-t border-emerald-900 pt-6 sm:pt-8 text-center text-sm text-emerald-300/50">
            <p>
              &copy; {new Date().getFullYear()} ShieldPest Pro. All rights
              reserved. Licensed Pest Control Operator — Washington State.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
