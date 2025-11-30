"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award } from "lucide-react"
import { BorderBeam } from "@/components/ui/border-beam"

const certificates = [
  {
    id: 1,
    title: "Full Stack Web Development",
    platform: "Coursera",
    issuer: "Meta",
    date: "January 2024",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    category: "Web Development",
    link: "#",
    skills: ["React", "Node.js", "Database Design"]
  },
  {
    id: 2,
    title: "Advanced React & Redux",
    platform: "Udemy",
    issuer: "Stephen Grider",
    date: "December 2023",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    category: "Frontend",
    link: "#",
    skills: ["React", "Redux", "TypeScript"]
  },
  {
    id: 3,
    title: "Video Editing Masterclass",
    platform: "LinkedIn Learning",
    issuer: "Adobe",
    date: "November 2023",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80",
    category: "Video Editing",
    link: "#",
    skills: ["Premiere Pro", "After Effects"]
  },
  {
    id: 4,
    title: "TypeScript Fundamentals",
    platform: "Frontend Masters",
    issuer: "Mike North",
    date: "October 2023",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    category: "Programming",
    link: "#",
    skills: ["TypeScript", "JavaScript", "Type Safety"]
  },
  {
    id: 5,
    title: "UI/UX Design Specialization",
    platform: "Coursera",
    issuer: "CalArts",
    date: "September 2023",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    category: "Design",
    link: "#",
    skills: ["Figma", "User Research", "Prototyping"]
  },
  {
    id: 6,
    title: "Color Grading & Correction",
    platform: "Skillshare",
    issuer: "Professional Colorist",
    date: "August 2023",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
    category: "Video Editing",
    link: "#",
    skills: ["DaVinci Resolve", "Color Theory"]
  },
  {
    id: 7,
    title: "Next.js & Serverless",
    platform: "Udemy",
    issuer: "Maximilian Schwarzmüller",
    date: "July 2023",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    category: "Web Development",
    link: "#",
    skills: ["Next.js", "React", "Serverless"]
  },
  {
    id: 8,
    title: "MongoDB Developer",
    platform: "MongoDB University",
    issuer: "MongoDB",
    date: "June 2023",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
    category: "Backend",
    link: "#",
    skills: ["MongoDB", "Database Design", "Queries"]
  },
  {
    id: 9,
    title: "Motion Graphics & Animation",
    platform: "LinkedIn Learning",
    issuer: "Adobe",
    date: "May 2023",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    category: "Video Editing",
    link: "#",
    skills: ["After Effects", "Animation", "Motion Design"]
  }
]

const stats = [
  { label: "Total Certificates", value: certificates.length },
  { label: "Platforms", value: 6 },
  { label: "Categories", value: 5 },
  { label: "Hours of Learning", value: "500+" }
]

export default function CertificatesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 fade-in">
            <div className="flex justify-center mb-4">
              <Award className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Certificates & Achievements
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and continuous learning journey
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 border-b bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label} 
                className="text-center fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <Card 
                key={cert.id} 
                className="hover-lift overflow-hidden group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BorderBeam lightColor="#FF2056" lightWidth={250} duration={10} />
                <div className="relative z-10 h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 smooth-transition"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="h-16 w-16 text-primary/60" />
                  </div>
                </div>
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg line-clamp-2">{cert.title}</CardTitle>
                    <Badge variant="secondary" className="shrink-0 text-xs">
                      {cert.category}
                    </Badge>
                  </div>
                  <CardDescription>
                    <div className="space-y-1">
                      <div className="font-medium text-foreground">{cert.platform}</div>
                      <div className="text-xs">Issued by {cert.issuer}</div>
                      <div className="text-xs">{cert.date}</div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Button asChild variant="default" size="sm" className="w-full">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Certificate
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Committed to Continuous Learning</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I believe in lifelong learning and regularly update my skills through online courses, 
            workshops, and hands-on projects to stay current with industry trends.
          </p>
        </div>
      </section>
    </div>
  )
}