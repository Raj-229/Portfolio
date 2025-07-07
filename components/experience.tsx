"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Web Developer",
    company: "Nexpro Solution",
    location: "Bhubaneswar",
    duration: "February 2024 - July 2025",
    description:
      "Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality solutions.",
    skills: ["React.js", "Node.js", "JavaScript", "HTML/CSS", "Database Management"],
  },
  {
    title: "Web Development Intern",
    company: "Web Bocket",
    location: "Remote",
    duration: "3 Months",
    description:
      "Gained hands-on experience in web development, working on real-world projects and learning industry best practices.",
    skills: ["Frontend Development", "Backend Development", "Version Control", "Team Collaboration"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-400 to-blue-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-4 border-black z-10"></div>

              <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50"
                >
                  <div className="flex items-center mb-3">
                    <Briefcase className="text-green-400 mr-2" size={20} />
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  </div>

                  <h4 className="text-lg font-semibold text-blue-400 mb-2">{exp.company}</h4>

                  <div className="flex items-center text-gray-400 mb-2">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm mr-4">{exp.location}</span>
                    <Calendar size={16} className="mr-1" />
                    <span className="text-sm">{exp.duration}</span>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 rounded-full text-sm border border-green-500/30"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
