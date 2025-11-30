"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { BorderBeam } from "@/components/ui/border-beam"

const categories = ["All", "Web Development", "Editing Projects", "Full Stack", "Frontend"]

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A fully functional e-commerce website with shopping cart, payment integration, and admin dashboard",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    category: "Full Stack",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Video Portfolio Website",
    description: "A stunning portfolio showcasing video editing projects with smooth animations and transitions",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80",
    category: "Editing Projects",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media metrics with real-time data visualization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "Web Development",
    tech: ["React", "TypeScript", "Chart.js", "Firebase"],
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Brand Identity Video",
    description: "Promotional video showcasing brand identity with motion graphics and color grading",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
    category: "Editing Projects",
    tech: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    link: "#",
    github: "#"
  },
  {
    id: 5,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team features",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    category: "Full Stack",
    tech: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
    link: "#",
    github: "#"
  },
  {
    id: 6,
    title: "Landing Page Design",
    description: "Modern landing page with stunning visuals and optimized conversion elements",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    category: "Frontend",
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
    link: "#",
    github: "#"
  }
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              My Projects
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of my web development and editing projects showcasing my skills and creativity
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 border-b bg-background/95 backdrop-blur sticky top-16 z-40">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="smooth-transition"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="hover-lift overflow-hidden group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BorderBeam lightColor="#FF2056" lightWidth={250} duration={10} />
                <div className="relative z-10 h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />
                </div>
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between">
                    <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2 relative z-10">
                  <Button asChild variant="default" size="sm" className="flex-1">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}