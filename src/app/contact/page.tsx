"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { BorderBeam } from "@/components/ui/border-beam"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shrajalpatel@gmail.com",
    href: "mailto:shrajalpatel@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8959863777",
    href: "tel:+918959863777"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bhopal, India",
    href: "#"
  }
]

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/ShrajalPatel",
    color: "hover:text-gray-900 dark:hover:text-gray-100"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/shrajal-patel-b1566b375?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    color: "hover:text-blue-600"
  },
  {
  name: "Instagram",
  icon: Instagram,
  href: "https://www.instagram.com/shrajal.ae?igsh=MW9kOG52eXE1bDR6bA==",
  color: "hover:text-pink-500"
}
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setErrors({})
      setIsSubmitting(false)
    }, 1500)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? I'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="relative overflow-hidden">
                <BorderBeam lightColor="#FF2056" lightWidth={300} duration={12} />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        className={errors.subject ? "border-destructive" : ""}
                      />
                      {errors.subject && (
                        <p className="text-sm text-destructive">{errors.subject}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me more about your project or inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? "border-destructive" : ""}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">{errors.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full smooth-transition"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Info Cards */}
              <Card className="relative overflow-hidden">
                <BorderBeam lightColor="#FF2056" lightWidth={200} duration={10} />
                <CardHeader className="relative z-10">
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative z-10">
                  {contactInfo.map((info) => {
                    const Icon = info.icon
                    return (
                      <a
                        key={info.label}
                        href={info.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted smooth-transition group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 smooth-transition">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-medium">{info.value}</p>
                        </div>
                      </a>
                    )
                  })}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="relative overflow-hidden">
                <BorderBeam lightColor="#FF2056" lightWidth={200} duration={9} />
                <CardHeader className="relative z-10">
                  <CardTitle>Connect With Me</CardTitle>
                  <CardDescription>Follow me on social media</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex gap-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80 smooth-transition ${social.color}`}
                          aria-label={social.name}
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-none relative overflow-hidden">
                <BorderBeam lightColor="#FF2056" lightWidth={200} duration={11} />
                <CardHeader className="relative z-10">
                  <CardTitle>Availability</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-sm text-muted-foreground">
                    I'm currently available for freelance projects and collaborations. 
                    I typically respond to inquiries within 24-48 hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional placeholder) */}
      {/* <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <Card className="overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 mx-auto text-muted-foreground" />
                <p className="text-muted-foreground">
                  Map Integration Placeholder
                </p>
                <p className="text-sm text-muted-foreground">
                  San Francisco Bay Area, California
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section> */}
    </div>
  )
}