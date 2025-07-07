"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Server } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: <Globe size={24} />,
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion","Three.Js" ],
    color: "from-blue-400 to-cyan-400",
  },
  {
    title: "Backend",
    icon: <Server size={24} />,
    skills: ["Node.js"],
    color: "from-green-400 to-emerald-400",
  },
  // {
  //   title: "Database",
  //   icon: <Database size={24} />,
  //   skills: ["MongoDB", "MySQL", "PostgreSQL", "Database Design", "Query Optimization"],
  //   color: "from-purple-400 to-violet-400",
  // },
  {
    title: "Tools & Others",
    icon: <Code size={24} />,
    skills: ["GitHub", "VS Code", "Postman", "Responsive Design"],
    color: "from-orange-400 to-red-400",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto"></div>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center text-center">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <div className="text-center mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-block p-4 bg-gradient-to-br ${category.color} rounded-full mb-4`}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/30 transition-all duration-200"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated skill bars */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { skill: "React.js", level: 90 },
              { skill: "JavaScript", level: 85 },
              { skill: "Node.js", level: 80 },
              { skill: "HTML/CSS", level: 95 },
              { skill: "Database Management", level: 75 },
              { skill: "Version Control (Git)", level: 85 },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">{item.skill}</span>
                  <span className="text-gray-400">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
