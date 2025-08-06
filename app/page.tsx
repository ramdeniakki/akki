"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Moon, Sun, Github, Mail, Linkedin, Twitter, MapPin, Building } from "lucide-react"
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiVercel,
  SiFigma,
  SiGit,
  SiVuedotjs,
  SiExpress,
  SiPrisma,
  SiGoogle,
  SiRedux,
} from "react-icons/si"
import { useTheme } from "next-themes"
import Link from "next/link"

const projects = [
  {
    title: "OMSSC",
    description: "A full-stack e-commerce platform with real-time cart, secure checkout, and admin dashboard. Optimized with SSR/SSG for faster performance.",
    github: "https://github.com/ramdeniakki/omssc.git",
    demo: "https://omssc.vercel.app/",
    tags: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Shadcn UI", icon: SiReact },
      { name: "Postgres", icon: SiPrisma },
      { name: "Postgres", icon: SiPostgresql },
      { name: "Vercel", icon: SiVercel },
    ],
  },
  {
    title: "TuneCraft",
    description: "A SaaS platform for collaborative music queues. Users can create, manage, and curate shared playlists with secure Google OAuth authentication.",
    github: "https://github.com/ramdeniakki/TuneCraft.git",
    demo: "https://tune-craft-delta.vercel.app/",
    tags: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Shadcn UI", icon: SiReact },
     { name: "Postgres", icon: SiPrisma },
     { name: "Google OAuth", icon: SiGoogle },
       { name: "Vercel", icon: SiVercel },

    ],
  },
  {
    title: "NoteCrafte",
    description:
      "A note management tool with full CRUD support, markdown formatting, and offline access via localStorage. Built for speed and productivity with Redux Toolkit and Prisma.",
    github: "https://github.com/ramdeniakki/NoteCrafte.git",
    demo: "https://note-craft-alpha.vercel.app/",
    tags: [
      { name: "Next.js", icon: SiReact },
      { name: "TypeScript", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Stripe", icon: SiVercel },
    ],
  },
  {
    title: "Inventory",
    description: "A full-featured store inventory system with real-time stock tracking, automated restock alerts, and detailed sales analytics. Designed for seamless management and optimized reporting.",
    github: "https://github.com/Sanjay-Balam/Inventory-Frontend.git",
    tags: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Nodejs", icon: SiNodedotjs },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Shadcn UI", icon: SiReact },
        { name: "Vercel", icon: SiVercel },
    ],
  },

]

const experience = [
  {
    company: "Freelance",
    position: "Full Stack Developer",
    duration: "2024 - Present",
    location: "Remote",
    description:
      "Delivering custom web solutions for clients across various industries. Specializing in modern frontend and backend development, ensuring responsive and scalable applications",
  },
  {
    company: "Venkys Io",
    position: "Programming Intern",
    duration: "Jun 2024 – Oct 2024",
    location: "Hyderabad, IN",
    description:
      "Developed and debugged React and Node.js applications, contributing to project milestones. Collaborated with senior engineers on code reviews and testing. Fixed 15+ bugs to improve functionality and user experience. Worked within Agile teams to deliver features on time.",
  }

]

const tools = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React.js", icon: SiReact },
      { name: "HTML/CSS", icon: SiReact },
      { name: "Redux", icon: SiRedux },
      { name: "Atoms", icon: SiReact },
      { name: "Sass", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: SiNodedotjs },
      { name: "JWT", icon: SiNodedotjs },
      { name: "Next Auth", icon: SiNextdotjs },
      { name: "Kinde", icon: SiGoogle },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [

      { name: "Linux", icon: SiNodedotjs },
      { name: "CI/CD", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiDocker },
      { name: "DevOps", icon: SiGit },
      { name: "AWS S3", icon: SiVercel },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma ORM", icon: SiPrisma },
    ],
  },
]

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState("projects")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">

      <div className="max-w-2xl mx-auto px-6 py-16">

                {/* Header */}
        <header className="flex items-center justify-between mb-6">

                      <div className="flex items-center gap-3">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0">
              <img
                src="/akki.jpeg"
                alt="akki"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) {
                    fallback.style.display = 'flex';
                  }
                }}
              />
              <div className="w-full h-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-400 font-medium text-lg">
                A
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1 font-poppins">Hey, I'm Akshith</h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1 mb-3">
                <MapPin className="h-3.5 w-3.5" />
                Hyderabad, IN
              </p>
              <div className="flex items-center gap-4 text-base font-medium">
                <Link
                  href="https://github.com/ramdeniakki"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-200 flex items-center gap-1 hover:scale-110 hover:translate-y-[-2px]"
                >
                  <Github className="h-4 w-4 hover:rotate-12 transition-transform duration-200" />
                  GitHub
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-200 flex items-center gap-1 hover:scale-110 hover:translate-y-[-2px]"
                >
                  <Twitter className="h-4 w-4 hover:rotate-12 transition-transform duration-200" />X
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ramdeni-akshith-b96b01203"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-200 flex items-center gap-1 hover:scale-110 hover:translate-y-[-2px]"
                >
                  <Linkedin className="h-4 w-4 hover:rotate-12 transition-transform duration-200" />
                  LinkedIn
                </Link>
                <Link
                  href="mailto:ramdeniakshith@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-200 flex items-center gap-1 hover:scale-110 hover:translate-y-[-2px]"
                >
                  <Mail className="h-4 w-4 hover:rotate-12 transition-transform duration-200" />
                  Email
                </Link>
                <Link
                  href="https://drive.google.com/file/d/1twh3e81dcIMA-TJoMQO5U-vvSO8jX6gl/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-200 flex items-center gap-1 hover:scale-110 hover:translate-y-[-2px]"
                >
                  <svg className="h-4 w-4 hover:rotate-12 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </Link>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full h-8 w-8 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-200 hover:shadow-md"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </header>

        {/* Bio */}
        <section className="mb-2">

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2 text-base">
            Passionate about building scalable web applications. Currently working on an{" "}
            <Link href="https://github.com/Sanjay-Balam/Inventory-Frontend.git" className="text-gray-900 dark:text-gray-100 hover:underline font-medium">
              Inventory
            </Link>{" "}
            and diving into Web3 development
            {" "}
            {/* <Link href="#" className="text-gray-900 dark:text-gray-100 hover:underline">
              oss.now
            </Link> */}
            .
          </p>
        </section>

                {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-1">
            <TabsTrigger value="projects" className="text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 rounded-lg data-[state=active]:bg-blue-50 dark:data-[state=active]:bg-blue-900/20 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400">
              Projects
            </TabsTrigger>
            <TabsTrigger value="experience" className="text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 rounded-lg data-[state=active]:bg-blue-50 dark:data-[state=active]:bg-blue-900/20 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400">
              Experience
            </TabsTrigger>
            <TabsTrigger value="tools" className="text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 rounded-lg data-[state=active]:bg-blue-50 dark:data-[state=active]:bg-blue-900/20 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400">
              Tools
            </TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="group transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-900/50 hover:shadow-lg hover:shadow-gray-200 dark:hover:shadow-gray-800 rounded-lg p-2 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-gray-900 dark:text-gray-100 font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-poppins">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <Link
                        href={project.github}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm hover:scale-110 transform duration-200 hover:translate-y-[-1px]"
                      >
                        GitHub ↗
                      </Link>
                    )}
                    {project.demo && (
                      <Link
                        href={project.demo}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm hover:scale-110 transform duration-200 hover:translate-y-[-1px]"
                      >
                        View ↗
                      </Link>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-base mb-3 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <div key={tagIndex} className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-200 hover:scale-110 transform hover:translate-y-[-1px]">
                      <tag.icon className="h-3.5 w-3.5 hover:rotate-12 transition-transform duration-200" />
                      {tag.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="group transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-900/50 hover:shadow-lg hover:shadow-gray-200 dark:hover:shadow-gray-800 rounded-lg p-2 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-gray-900 dark:text-gray-100 font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 font-poppins">{exp.position}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200">
                      <Building className="h-3.5 w-3.5 group-hover:rotate-12 transition-transform duration-200" />
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200">
                    <div>{exp.duration}</div>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3 group-hover:rotate-12 transition-transform duration-200" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </TabsContent>

          {/* Tools Tab */}
          <TabsContent value="tools" className="space-y-8">
            {tools.map((toolCategory, index) => (
              <div key={index}>
                <h3 className="text-gray-900 dark:text-gray-100 font-semibold text-lg mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-poppins">{toolCategory.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {toolCategory.items.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-200 cursor-default hover:scale-110 transform hover:translate-y-[-1px] p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-sm"
                    >
                      <tool.icon className="h-3.5 w-3.5 hover:rotate-12 transition-transform duration-200" />
                      {tool.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
