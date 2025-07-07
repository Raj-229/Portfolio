"use client"

import { motion } from "framer-motion"
import { MapPin, User } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm Shaikh Alfas, a passionate Full Stack Web Developer with a strong foundation in modern web
              technologies. I love creating innovative digital solutions that make a difference.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              With hands-on experience in both frontend and backend development, I specialize in building responsive,
              user-friendly applications using cutting-edge technologies like React, Node.js, and modern JavaScript
              frameworks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm"
              >
                <User className="text-blue-400" size={20} />
                <div>
                  <p className="text-sm text-gray-400">Age</p>
                  <p className="text-white font-semibold">23 Years</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm"
              >
                <MapPin className="text-green-400" size={20} />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white font-semibold">Kakatpur, Puri, Odisha</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/30"
              ></motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-4 rounded-full border-2 border-dashed border-purple-400/30"
              ></motion.div>

              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-4xl font-bold"
                >
                  SA
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
