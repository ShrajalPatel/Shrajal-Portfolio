"use client"

import profileImg from "@/assets/profile.jpg";
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Video, Palette, Coffee, Music, Camera, Plane, Book, CookingPot, CookingPotIcon } from "lucide-react"
import { BorderBeam } from "@/components/ui/border-beam"

const timeline = [
  {
    year: "2025",
    title: "Master Different Sector",
    description: "From mastering Web to App development + exploring AI/ML and building creative digital experiences",
    icon: "💼"
  },
  {
    year: "2024",
    title: "Freelance Developer & Editor",
    description: "Started Freelancing, working with diverse clients on Web and Video projects",
    icon: "🚀"
  },
  {
    year: "2024",
    title: "Video Editor at Creative Agency",
    description: "Produced promotional Content and developed Video Editing expertise",
    icon: "🎬"
  },
  {
    year: "2023",
    title: "First Freelance Job",
    description: "Began professional career as Frontend Developer at a Startup",
    icon: "💻"
  },
  {
    year: "2023",
    title: "Started University",
    description: "Enrolled in Computer Science program, discovered passion in Coding Field",
    icon: "🎓"
  }
]

const interests = [
  { name: "Coding", icon: Code, color: "text-blue-500" },
  { name: "Video Editing", icon: Video, color: "text-purple-500" },
  { name: "Reading", icon: Book, color: "text-red-500" },
  { name: "Cooking", icon: CookingPot, color: "text-amber-500" },
  { name: "Music", icon: Music, color: "text-orange-500" },
  { name: "Design", icon: Palette, color: "text-pink-500" },
  { name: "Travel", icon: Plane, color: "text-cyan-500" },
  { name: "Photography", icon: Camera, color: "text-green-500" }
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                About Me
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi! I'm <span className="font-semibold text-foreground">Shrajal</span>, a Web & App Developer with a flair for creative UI/UX and professional video editing. I merge code and creativity to design digital experiences that feel smooth, modern, and meaningful.
                {/* a passionate Web Developer and Video Editor based in San Francisco. 
                I combine technical expertise with creative vision to build digital 
                experiences that are both beautiful and functional. */}
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="px-3 py-1">Web Developer</Badge>
                <Badge variant="secondary" className="px-3 py-1">App Developer</Badge>
                <Badge variant="secondary" className="px-3 py-1">Video Editor</Badge>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 slide-in">
              <Image
                // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                src={profileImg}
                alt="Shrajal"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Bio */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="relative overflow-hidden">
            <BorderBeam lightColor="#FF2056" lightWidth={250} duration={12} />
            <CardHeader className="relative z-10">
              <CardTitle className="text-3xl">My Story</CardTitle>
              <CardDescription>From student to professional</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed relative z-10">
              <p>
                My journey into the world of technology and creativity began during my College years 
                when I discovered the power of combining code with design. What started as a curiosity 
                about how websites worked evolved into a full-fledged passion for creating digital experiences.
              </p>
              <p>
                During my time at College, I immersed myself in computer science while also exploring 
                my creative side through video production and editing. This unique combination of technical 
                and artistic skills has become my signature approach to solving problems and creating content.
              </p>
              <p>
                Over the past five years, I've had the privilege of working on diverse projects ranging from 
                enterprise web applications to promotional videos for major brands. Each project has taught 
                me something new and reinforced my belief that the best solutions come from combining 
                technical excellence with creative thinking.
              </p>
              <p>
                Today, I continue to push the boundaries of what's possible in development and video 
                editing. I'm constantly learning new technologies, experimenting with different techniques, 
                and looking for ways to improve my craft. My goal is to create work that not only meets 
                technical requirements but also tells a story and connects with people on an emotional level.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">My Journey</h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in my professional career
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={item.year} 
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <Card className="hover-lift relative overflow-hidden">
                      <BorderBeam lightColor="#FF2056" lightWidth={200} duration={10} />
                      <CardHeader className="relative z-10">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{item.year}</Badge>
                          <span className="text-2xl">{item.icon}</span>
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Circle marker */}
                  <div className="absolute left-8 w-4 h-4 rounded-full bg-primary border-4 border-background md:left-1/2 md:transform md:-translate-x-1/2" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interests & Hobbies */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Interests & Hobbies</h2>
            <p className="text-lg text-muted-foreground">
              What I love to do in my free time
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {interests.map((interest, index) => {
              const Icon = interest.icon
              return (
                <Card 
                  key={interest.name} 
                  className="hover-lift text-center cursor-pointer group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="pt-6">
                    <div className={`flex justify-center mb-4 ${interest.color}`}>
                      <Icon className="h-12 w-12 group-hover:scale-110 smooth-transition" />
                    </div>
                    <h3 className="font-semibold">{interest.name}</h3>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-none bg-transparent shadow-none">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl">My Philosophy</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <blockquote className="text-xl md:text-2xl font-medium italic text-muted-foreground">
                "The intersection of technology and creativity is where magic happens. 
                Every line of code is an opportunity to solve a problem, and every frame 
                is a chance to tell a story."
              </blockquote>
              <p className="mt-6 text-lg text-muted-foreground">
                I believe in continuous learning, attention to detail, and the power of 
                collaboration. Whether I'm writing code or editing a video, my goal is 
                always the same: create something that makes a difference.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}