"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Download, Mail, MapPin, Phone, Linkedin, Github } from "lucide-react"
import { BorderBeam } from "@/components/ui/border-beam"

export default function ResumePage() {
  const handleDownload = () => {
    // In a real application, this would trigger a PDF download
    alert("Thank you for your interest, but I’m not sharing my resume publicly at the moment.")
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Resume</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Creative Developer & Editor
            </p>
            <Button onClick={handleDownload} size="lg" className="smooth-transition">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-8">
          {/* Contact Information */}
          <Card className="relative overflow-hidden">
            <BorderBeam lightColor="#FF2056" lightWidth={250} duration={10} />
            <CardHeader className="text-center pb-4 relative z-10">
              <CardTitle className="text-3xl">Shrajal Patel</CardTitle>
              <CardDescription className="text-lg">
                Creative Developer & Video Editor
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>shrajalpatel@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>+918959863777</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Bhopal, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4 text-muted-foreground" />
                  <span>github.com/ShrajalPatel</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Versatile Developer and Video Editor with 5+ years of experience creating innovative 
                digital solutions and compelling visual content. Proficient in modern web technologies 
                including React, Next.js, and TypeScript, with extensive expertise in video editing software 
                such as Adobe Premiere Pro and DaVinci Resolve. Passionate about combining technical 
                precision with creative vision to deliver exceptional user experiences and engaging content.
              </p>
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card className="relative overflow-hidden">
            <BorderBeam lightColor="#FF2056" lightWidth={250} duration={12} />
            <CardHeader className="relative z-10">
              <CardTitle>Work Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
              {/* Job 1 */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">Senior Full Stack Developer</h3>
                    <p className="text-muted-foreground">Tech Solutions Inc.</p>
                  </div>
                  <Badge variant="secondary">2025 - Present</Badge>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  <li>Led development of multiple high-traffic web applications using Next.js and React</li>
                  <li>Implemented responsive designs resulting in 40% increase in mobile user engagement</li>
                  <li>Mentored junior developers and conducted code reviews to maintain quality standards</li>
                  <li>Integrated third-party APIs and optimized application performance by 50%</li>
                </ul>
              </div>

              <Separator />

              {/* Job 2 */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">Video Editor & Content Creator</h3>
                    <p className="text-muted-foreground">Creative Media Agency</p>
                  </div>
                  <Badge variant="secondary">2021 - 2023</Badge>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  <li>Produced and edited 100+ promotional videos for various clients and brands</li>
                  <li>Specialized in color grading and motion graphics using Adobe Creative Suite</li>
                  <li>Managed end-to-end video production workflow from concept to final delivery</li>
                  <li>Collaborated with marketing teams to create engaging social media content</li>
                </ul>
              </div>

              <Separator />

              {/* Job 3 */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">Frontend Developer</h3>
                    <p className="text-muted-foreground">Digital Innovations LLC</p>
                  </div>
                  <Badge variant="secondary">2023 - 2024</Badge>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  <li>Developed responsive web interfaces using React and modern CSS frameworks</li>
                  <li>Implemented accessibility features ensuring WCAG compliance</li>
                  <li>Collaborated with UX designers to translate mockups into functional components</li>
                  <li>Optimized web applications for maximum speed and scalability</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">B.tech in CSE with specialization in DS</h3>
                    <p className="text-muted-foreground">LNCTE, Bhopal</p>
                  </div>
                  <Badge variant="secondary">2023 - 2027</Badge>
                </div>
                <p className="text-muted-foreground text-sm">
                  • Focus on Tech Trends and User Experience
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Technical Skills */}
          <Card className="relative overflow-hidden">
            <BorderBeam lightColor="#FF2056" lightWidth={250} duration={11} />
            <CardHeader className="relative z-10">
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <div>
                <h3 className="font-semibold mb-2">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", 
                    "Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Video Editing</h3>
                <div className="flex flex-wrap gap-2">
                  {["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro", 
                    "Photoshop", "Color Grading", "Motion Graphics"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools & Other</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "VS Code", "Figma", "Docker", "Vercel", "Firebase", 
                    "Agile/Scrum"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>Full Stack Web Development - Meta (Coursera)</span>
                  <Badge variant="outline">2024</Badge>
                </li>
                <li className="flex justify-between items-center">
                  <span>Advanced React & Redux - Udemy</span>
                  <Badge variant="outline">2023</Badge>
                </li>
                <li className="flex justify-between items-center">
                  <span>Video Editing Masterclass - Adobe</span>
                  <Badge variant="outline">2023</Badge>
                </li>
                <li className="flex justify-between items-center">
                  <span>TypeScript Fundamentals - Frontend Masters</span>
                  <Badge variant="outline">2023</Badge>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Download Button */}
          <div className="text-center pt-8">
            <Button onClick={handleDownload} size="lg" className="smooth-transition">
              <Download className="mr-2 h-4 w-4" />
              Download Full Resume (PDF)
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}