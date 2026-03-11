import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  Hammer,
  Home,
  Layers,
  Mail,
  MapPin,
  Menu,
  Package,
  Phone,
  ShieldCheck,
  Star,
  TreePine,
  Truck,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { useSubmitInquiry } from "./hooks/useQueries";

// ── Types ──────────────────────────────────────────────────────────────────
interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// ── Navbar ─────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-xs">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group"
          data-ocid="nav.link"
        >
          <div className="w-9 h-9 bg-primary rounded-sm flex items-center justify-center shadow-wood">
            <Hammer className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-semibold text-foreground tracking-tight">
            VFH <span className="text-primary">Carpentry</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-ocid="nav.link"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact">
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-wood"
              data-ocid="nav.primary_button"
            >
              Get a Free Quote
            </Button>
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="container px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  data-ocid="nav.link"
                  className="text-base font-medium text-foreground py-1"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <Button
                className="w-full bg-primary text-primary-foreground"
                data-ocid="nav.primary_button"
                onClick={() => {
                  setOpen(false);
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get a Free Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "url('/assets/generated/hero-carpentry.dim_1200x600.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-24 pb-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm"
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            Serving the Community for 20 Years
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-6 text-balance"
          >
            Expert Carpentry
            <br />
            <span className="text-amber-200">&amp; Contracting</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80 mb-10 leading-relaxed"
          >
            20 Years of Craftsmanship You Can Trust. From custom millwork to
            full home renovations — built to last, built with pride.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact">
              <Button
                size="lg"
                data-ocid="hero.primary_button"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-wood-lg text-base px-8 h-13"
              >
                Get a Free Quote
              </Button>
            </a>
            <a href="#services">
              <Button
                size="lg"
                variant="outline"
                data-ocid="hero.secondary_button"
                className="border-white/40 text-white hover:bg-white/10 hover:text-white bg-transparent text-base px-8 h-13"
              >
                Our Services
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.div>
    </section>
  );
}

// ── About ──────────────────────────────────────────────────────────────────
function About() {
  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "100%", label: "Licensed & Insured" },
    { value: "5★", label: "Avg. Client Rating" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 block">
              About VFH
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground leading-tight mb-6">
              Built on Two Decades
              <br />
              <em className="not-italic text-primary">of Solid Work</em>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              VFH Contracting & Carpentry has been a trusted name in the local
              community for over 20 years. We bring old-school craftsmanship
              together with modern techniques to deliver results that stand the
              test of time.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Whether it's a kitchen remodel, a custom deck, precision
              cabinet-making, or a full commercial build-out — we treat every
              project as if it were our own home. No shortcuts. No excuses. Just
              quality work delivered on time.
            </p>
            <a href="#contact">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-wood"
                data-ocid="about.primary_button"
              >
                Start Your Project
              </Button>
            </a>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-8 wood-grain shadow-wood text-center"
              >
                <div className="font-display text-4xl font-semibold text-primary mb-1">
                  {s.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Services ───────────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: Hammer,
    title: "Custom Carpentry",
    desc: "Bespoke woodwork crafted to your exact specifications — from architectural details to statement furniture pieces.",
  },
  {
    icon: Home,
    title: "Home Renovations",
    desc: "Complete interior and exterior remodels. We manage the entire project so you don't have to juggle contractors.",
  },
  {
    icon: Layers,
    title: "Framing & Structural",
    desc: "Precise framing and load-bearing work built to code, ensuring a solid foundation for any project.",
  },
  {
    icon: Package,
    title: "Cabinet & Millwork",
    desc: "Custom cabinetry, built-ins, crown moulding, and fine millwork that elevates every room.",
  },
  {
    icon: TreePine,
    title: "Deck & Outdoor",
    desc: "Durable, beautiful outdoor living spaces — decks, pergolas, fences, and more, built to weather any season.",
  },
  {
    icon: Building2,
    title: "Commercial Contracting",
    desc: "Office fit-outs, retail interiors, and commercial builds delivered on schedule and on budget.",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 block">
            What We Do
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground leading-tight mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From a single custom piece to a full-scale commercial build, VFH
            handles it all with the same level of dedication.
          </p>
        </motion.div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="services.list"
        >
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              data-ocid={`services.item.${i + 1}`}
              className="bg-card border border-border rounded-lg p-7 shadow-wood hover:shadow-wood-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-11 h-11 bg-primary/10 rounded-md flex items-center justify-center mb-5">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Why Us ─────────────────────────────────────────────────────────────────
const TRUST_SIGNALS = [
  {
    icon: Star,
    title: "20 Years Experience",
    desc: "Two decades of hands-on carpentry and contracting across residential and commercial projects of every scale.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: "Fully licensed, bonded, and insured. You're protected from start to finish — that's our guarantee.",
  },
  {
    icon: Package,
    title: "Quality Materials",
    desc: "We source premium-grade lumber, hardware, and finishes because great craftsmanship deserves great materials.",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    desc: "We respect your time and your home. Our projects stay on schedule and our job sites stay clean.",
  },
];

function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 block">
            Why Choose VFH
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground leading-tight mb-4">
            The VFH Difference
          </h2>
          <p className="text-muted-foreground text-lg">
            We've built our reputation one project at a time. Here's what sets
            us apart from the rest.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_SIGNALS.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mx-auto mb-5 shadow-wood">
                <t.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {t.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 bg-accent rounded-xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 wood-grain shadow-wood-lg"
        >
          <div>
            <h3 className="font-display text-2xl font-semibold text-accent-foreground mb-1">
              Ready to Start Your Project?
            </h3>
            <p className="text-accent-foreground/75 text-base">
              Let's talk about your vision. Free consultations, zero pressure.
            </p>
          </div>
          <a href="#contact">
            <Button
              size="lg"
              data-ocid="why-us.primary_button"
              className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 shadow-wood whitespace-nowrap font-semibold"
            >
              Get a Free Quote
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ── Contact Form ───────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { mutateAsync, isPending } = useSubmitInquiry();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync(form);
      setSubmitted(true);
      toast.success("Message sent! We'll be in touch shortly.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 block">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground leading-tight mb-6">
              Request a
              <br />
              <em className="not-italic text-primary">Free Quote</em>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Fill out the form and we'll get back to you within 24 hours. No
              obligation, no pressure — just an honest conversation about your
              project.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">(555) 247-8310</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">contact@vfhcarpentry.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">Serving the Greater Metro Area</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">Mon–Fri: 7am–6pm · Sat: 8am–2pm</span>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  data-ocid="contact.success_state"
                  className="bg-card border border-border rounded-xl p-12 text-center shadow-wood"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-9 h-9 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                    Message Received!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll review your request and be
                    in touch within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-card border border-border rounded-xl p-8 shadow-wood space-y-5"
                  data-ocid="contact.dialog"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={handleChange}
                        required
                        data-ocid="contact.input"
                        className="bg-background border-border"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        data-ocid="contact.input"
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={form.phone}
                      onChange={handleChange}
                      data-ocid="contact.input"
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Project Details <span className="text-primary">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Describe your project — what you need, timeline, any specifics..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      data-ocid="contact.textarea"
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-wood h-12 text-base font-semibold"
                    disabled={isPending}
                    data-ocid="contact.submit_button"
                  >
                    {isPending ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Send My Request"
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We typically respond within 24 hours on business days.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  return (
    <footer className="bg-accent text-accent-foreground wood-grain">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-primary rounded-sm flex items-center justify-center shadow-wood">
                <Hammer className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-semibold">
                VFH <span className="opacity-80">Carpentry</span>
              </span>
            </div>
            <p className="text-accent-foreground/70 text-sm leading-relaxed">
              Crafting exceptional spaces with quality materials and 20 years of
              proven expertise.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-sm">
            <div>
              <div className="font-semibold mb-3 opacity-90">Navigate</div>
              {["About", "Services", "Why Us", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(" ", "-")}`}
                  data-ocid="nav.link"
                  className="block text-accent-foreground/65 hover:text-accent-foreground transition-colors py-0.5"
                >
                  {l}
                </a>
              ))}
            </div>
            <div>
              <div className="font-semibold mb-3 opacity-90">Contact</div>
              <p className="text-accent-foreground/65 py-0.5">(555) 247-8310</p>
              <p className="text-accent-foreground/65 py-0.5">
                contact@vfhcarpentry.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/15 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-accent-foreground/55">
          <p>© {year} VFH Contracting & Carpentry. All rights reserved.</p>
          <p>
            Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-accent-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── App ────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Toaster richColors position="top-right" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
