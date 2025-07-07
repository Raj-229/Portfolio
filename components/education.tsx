"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, Code } from "lucide-react"

const educationData = [
  {
    title: "Bachelor of Science",
    subtitle: "BSc Degree",
    institution: "Kalinga Degree College",
    duration: "2019 - 2022",
    icon: <GraduationCap size={40} className="text-white" />,
    color: "from-purple-500 to-pink-500",
    description: "Completed Bachelor's degree with focus on science and technology fundamentals.",
  },
  {
    title: "Frontend Developer",
    subtitle: "Professional Course",
    institution: "LIT, Bhubaneswar",
    duration: "2023",
    icon: <Code size={40} className="text-white" />,
    color: "from-blue-500 to-cyan-500",
    description: "Specialized course in modern frontend development technologies and frameworks.",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="w-full"
            >
              <div
                className={`bg-gradient-to-br ${edu.color}/10 backdrop-blur-sm rounded-xl p-8 border ${edu.color.replace("to", "border")}/20 shadow-2xl`}
              >
                <div className="text-center mb-6">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className={`inline-block p-4 bg-gradient-to-br ${edu.color} rounded-full mb-4`}
                  >
                    {edu.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-2">{edu.title}</h3>
                  <h4
                    className={`text-lg font-semibold mb-4 bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}
                  >
                    {edu.subtitle}
                  </h4>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <MapPin size={18} className="mr-3 text-pink-400" />
                    <span>{edu.institution}</span>
                  </div>

                  <div className="flex items-center text-gray-300">
                    <Calendar size={18} className="mr-3 text-purple-400" />
                    <span>{edu.duration}</span>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                </div>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                  viewport={{ once: true }}
                  className={`mt-6 h-1 bg-gradient-to-r ${edu.color} rounded-full`}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
