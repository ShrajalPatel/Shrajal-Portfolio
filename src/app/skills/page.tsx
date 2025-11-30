"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { IconCloud } from "@/components/ui/interactive-icon-cloud"
import { BorderBeam } from "@/components/ui/border-beam"

const skillCategories = [
  {
    category: "Website Development",
    icon: "💻",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS / Tailwind", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "React.js", level: 70 },
      { name: "Next.js", level: 60 },
      { name: "UI/UX Design", level: 75 }
    ]
  },
  {
    category: "App Development",
    icon: "📱",
    skills: [
      { name: "Flutter / React Native", level: 70 },
      { name: "Firebase", level: 75 },
      { name: "Node.js", level: 60 },
      { name: "MongoDB", level: 55 },
      { name: "Java/Kotlin", level: 50 },
      { name: "Supabase", level: 65 }
    ]
  },
  {
    category: "Tools & Technologies",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Powerpoint", level: 95 },
      { name: "Vercel / Netlify", level: 85 },
      { name: "Excel", level: 75 }
    ]
  },
  {
    category: "Video Editing Software",
    icon: "🎬",
    skills: [
      { name: "Adobe Premiere Pro", level: 85 },
      { name: "After Effects", level: 80 },
      { name: "Photoshop", level: 75 },
      { name: "Blender", level: 45 },
      { name: "IbisPaint X", level: 95 },
      { name: "CapCut", level: 98 }
    ]
  }
]

const additionalSkills = [
  "Dropshipping",
  "Drop Servicing",
  "Social Media Management",
  "SEO Optimization",
  "Skit Making",
  "Cinematographer",
  "Motion Graphics",
  "Sound Design",
  "Content Creation",
  "Team Collaboration"
]

// Icon slugs for the IconCloud
const techIconSlugs = [
  "typescript",
  "javascript",
  "react",
  "nextdotjs",
  "html5",
  "css3",
  "tailwindcss",
  "nodedotjs",
  "express",
  "mongodb",
  "postgresql",
  "git",
  "github",
  "vscode",
  "figma",
  "docker",
  "vercel",
  "firebase",
  "adobepremierepro",
  "adobeaftereffects",
  "adobephotoshop",
  "davinciresolve",
  "jest",
]

export default function SkillsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Skills & Expertise
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              My technical proficiencies and creative capabilities across various domains
            </p>
            
            {/* Interactive Icon Cloud */}
            <div className="mt-12 flex justify-center">
              <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8">
                <IconCloud iconSlugs={techIconSlugs} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.category} 
              className="overflow-hidden fade-in relative"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <BorderBeam lightColor="#FF2056" lightWidth={250} duration={12} />
              <CardHeader className="bg-muted/30 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{category.icon}</span>
                  <div>
                    <CardTitle className="text-2xl">{category.category}</CardTitle>
                    <CardDescription>
                      {category.skills.length} skills
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Skills */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Additional Competencies</h2>
            <p className="text-lg text-muted-foreground">
              Other skills and knowledge areas I work with
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover-lift"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="text-center bg-gradient-to-r from-primary/10 to-accent/10 border-none">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">
                Always Learning & Improving
              </CardTitle>
              <CardDescription className="text-base">
                I'm constantly expanding my skill set and staying updated with the latest technologies and trends in tech development and video editing.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  )
}