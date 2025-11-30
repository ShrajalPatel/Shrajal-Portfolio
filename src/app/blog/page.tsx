"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { BorderBeam } from "@/components/ui/border-beam"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Web Applications with Next.js 15",
    excerpt: "Explore the latest features in Next.js 15 and learn how to build performant, scalable web applications with server components and app router.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    date: "March 15, 2024",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Web Development"],
    author: "Shrajal"
  },
  {
    id: 2,
    title: "Mastering Color Grading in DaVinci Resolve",
    excerpt: "A comprehensive guide to professional color grading techniques using DaVinci Resolve, from basic corrections to advanced stylization.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
    date: "March 10, 2024",
    readTime: "12 min read",
    tags: ["Video Editing", "Color Grading", "DaVinci Resolve"],
    author: "Shrajal"
  },
  {
    id: 3,
    title: "TypeScript Best Practices for React Developers",
    excerpt: "Learn essential TypeScript patterns and practices that will help you write more maintainable and type-safe React applications.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    date: "March 5, 2024",
    readTime: "10 min read",
    tags: ["TypeScript", "React", "Best Practices"],
    author: "Shrajal"
  },
  {
    id: 4,
    title: "Creating Engaging Motion Graphics with After Effects",
    excerpt: "Step-by-step tutorial on creating professional motion graphics and animations for your video projects using Adobe After Effects.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    date: "February 28, 2024",
    readTime: "15 min read",
    tags: ["After Effects", "Motion Graphics", "Animation"],
    author: "Shrajal"
  },
  {
    id: 5,
    title: "Responsive Design Principles for Modern Websites",
    excerpt: "Master the fundamentals of responsive web design and learn how to create websites that look great on any device.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    date: "February 20, 2024",
    readTime: "7 min read",
    tags: ["CSS", "Responsive Design", "UI/UX"],
    author: "Shrajal"
  },
  {
    id: 6,
    title: "Optimizing Web Performance: Tips and Tricks",
    excerpt: "Practical strategies for improving your website's loading speed and overall performance, from image optimization to code splitting.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    date: "February 15, 2024",
    readTime: "9 min read",
    tags: ["Performance", "Optimization", "Web Development"],
    author: "Shrajal"
  }
]

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Blog & Insights
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and insights on web development and video editing
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4 border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-6">
            <Badge variant="secondary" className="px-3 py-1">Featured Post</Badge>
          </div>
          <Card className="overflow-hidden hover-lift group relative">
            <BorderBeam lightColor="#FF2056" lightWidth={300} duration={12} />
            <div className="grid md:grid-cols-2 gap-0 relative z-10">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover group-hover:scale-105 smooth-transition"
                />
              </div>
              <div className="flex flex-col justify-center p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {blogPosts[0].tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <Button asChild>
                  <Link href={`/blog/${blogPosts[0].id}`}>
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Recent Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, index) => (
              <Card 
                key={post.id} 
                className="hover-lift overflow-hidden group flex flex-col relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BorderBeam lightColor="#FF2056" lightWidth={250} duration={10} />
                <div className="relative z-10 h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 smooth-transition"
                  />
                </div>
                <CardHeader className="flex-1 relative z-10">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Button asChild variant="ghost" className="w-full">
                    <Link href={`/blog/${post.id}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Stay Updated</h2>
          <p className="text-lg text-muted-foreground">
            Subscribe to get notified when I publish new articles and tutorials
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border bg-background"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}