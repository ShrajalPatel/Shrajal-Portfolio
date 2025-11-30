"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Briefcase, Award, FileText } from "lucide-react"
import { HeroSection04 } from "@/components/ui/hero-04"
import { BorderBeam } from "@/components/ui/border-beam"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection04 />

      {/* Highlights Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Highlights</h2>
            <p className="text-lg text-muted-foreground">
              Explore my work, skills, and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Projects Highlight */}
            <Card className="hover-lift cursor-pointer group relative overflow-hidden">
              <BorderBeam lightColor="#FF2056" lightWidth={250} duration={8} />
              <Link href="/projects" className="relative z-10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 smooth-transition">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Projects</CardTitle>
                  <CardDescription>
                    Innovative web applications and editing projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    View my portfolio of completed projects across web development and video editing
                  </p>
                </CardContent>
              </Link>
            </Card>

            {/* Skills Highlight */}
            <Card className="hover-lift cursor-pointer group relative overflow-hidden">
              <BorderBeam lightColor="#FF2056" lightWidth={250} duration={8} />
              <Link href="/skills" className="relative z-10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 smooth-transition">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Skills</CardTitle>
                  <CardDescription>
                    Technical expertise and proficiencies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Discover my skill set spanning frontend, backend, and editing tools
                  </p>
                </CardContent>
              </Link>
            </Card>

            {/* Certificates Highlight */}
            <Card className="hover-lift cursor-pointer group relative overflow-hidden">
              <BorderBeam lightColor="#FF2056" lightWidth={250} duration={8} />
              <Link href="/certificates" className="relative z-10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 smooth-transition">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Certificates</CardTitle>
                  <CardDescription>
                    Professional certifications and achievements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    View my earned certifications from recognized platforms
                  </p>
                </CardContent>
              </Link>
            </Card>

            {/* Blog Highlight */}
            <Card className="hover-lift cursor-pointer group relative overflow-hidden">
              <BorderBeam lightColor="#FF2056" lightWidth={250} duration={8} />
              <Link href="/blog" className="relative z-10">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 smooth-transition">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Blog</CardTitle>
                  <CardDescription>
                    Thoughts, tutorials, and insights
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Read my latest articles on web development and creative workflows
                  </p>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}