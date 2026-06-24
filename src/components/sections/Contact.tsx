"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { SectionShell } from "@/components/layout/SectionShell";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { profile } from "@/lib/data/profile";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as { error?: string; success?: boolean };

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to send message");
      }

      toast.success("Message sent!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Could not send message", {
        description:
          error instanceof Error
            ? error.message
            : "Please try again or email directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const links = [
    {
      icon: Mail,
      label: "Email",
      href: profile.social.email,
      text: profile.email,
    },
    {
      icon: Phone,
      label: "Phone",
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      text: profile.phone,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: profile.social.linkedin,
      text: "linkedin.com/in/g-t-fahad",
    },
    {
      icon: Github,
      label: "GitHub",
      href: profile.social.github,
      text: "github.com/Golam-Tawhid",
    },
    {
      icon: MapPin,
      label: "Location",
      href: `https://maps.google.com/?q=${encodeURIComponent(profile.location)}`,
      text: profile.location,
    },
  ];

  return (
    <SectionShell
      id="contact"
      title="Contact"
      className="bg-secondary/20"
    >
      <ScrollReveal>
        <div className="mb-12 text-center">
          <p className="font-heading text-2xl font-semibold md:text-3xl">
            Let&apos;s build something{" "}
            <span className="gradient-text">meaningful</span> together.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href={profile.social.email}>
                <Mail data-icon="inline-start" />
                Email Me
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin data-icon="inline-start" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer">
                <Github data-icon="inline-start" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="border-white/5 bg-card/80">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Have a project in mind or want to collaborate? Drop a message.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-xl border border-white/5 bg-card/50 p-4 transition-colors hover:border-primary/20 focus-ring"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <link.icon />
                </div>
                <div>
                  <p className="font-medium">{link.label}</p>
                  <p className="text-sm text-muted-foreground">{link.text}</p>
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </SectionShell>
  );
}
