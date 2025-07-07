"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Globe, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with React.js and Node.js, featuring user authentication, payment integration, and admin dashboard.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe API"],
    liveLink: "https://your-ecommerce-project.vercel.app",
    githubLink: "https://github.com/yourusername/ecommerce-project",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React.js", "Firebase", "Material-UI", "Socket.io"],
    liveLink: "https://your-taskmanager.netlify.app",
    githubLink: "https://github.com/yourusername/task-manager",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application that provides real-time weather data, forecasts, and interactive maps using weather APIs.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["JavaScript", "HTML5", "CSS3", "Weather API", "Chart.js"],
    liveLink: "https://your-weather-app.github.io",
    githubLink: "https://github.com/yourusername/weather-dashboard",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React.js, Three.js, and Framer Motion featuring 3D animations and smooth transitions.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    liveLink: "https://shaikh-alfas-portfolio.vercel.app",
    githubLink: "https://github.com/yourusername/portfolio",
    featured: false,
  },
  {
    title: "Blog Platform",
    description:
      "A full-featured blog platform with content management system, user authentication, and SEO optimization.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "NextAuth.js"],
    liveLink: "https://your-blog-platform.vercel.app",
    githubLink: "https://github.com/yourusername/blog-platform",
    featured: false,
  },
  {
    title: "Restaurant Website",
    description: "A modern restaurant website with online reservation system, menu display, and contact integration.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React.js", "Node.js", "MySQL", "Bootstrap"],
    liveLink: "https://your-restaurant-site.netlify.app",
    githubLink: "https://github.com/yourusername/restaurant-website",
    featured: false,
  },
]

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="text-white" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors duration-200"
                  >
                    <Github size={16} className="text-white" />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Button
                    asChild
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <Globe size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Code size={16} className="mr-2" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Other Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 group"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                <div className="flex space-x-2">
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github size={18} />
                  </motion.a>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-gray-700/50 text-gray-400 rounded text-xs">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 px-8 py-3"
          >
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-2" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
