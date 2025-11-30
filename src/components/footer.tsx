"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/ShrajalPatel" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/shrajal-patel-b1566b375/" },
  { name: "Email", icon: Mail, href: "mailto:shrajalpatel@gmail.com" },
]

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Shrajal. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors smooth-transition"
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>

          {/* Quick Links */}
          <div className="flex items-center space-x-4 text-sm">
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
