"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Full-Stack Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-ash-gray/30 dark:bg-ash-gray/20 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-earth/30 dark:bg-earth/20 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-dark-blue/30 dark:bg-dark-blue/20 rounded-full opacity-20 animate-ping"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-dark-blue to-earth bg-clip-text text-transparent">
              Yonatan Dawit
            </span>
          </h1>

          <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 mb-8 h-12">
            <span className="border-r-2 border-blue-600 animate-pulse">{text}</span>
          </div>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Motivated Computer Science graduate with hands-on experience in full-stack development. Passionate about
            creating intuitive, responsive user interfaces and solving challenging problems.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:yonatandawit50@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-dark-blue text-white rounded-full hover:bg-dark-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href="https://linkedin.com/in/yonatan-dawit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border-2 border-ash-gray dark:border-ash-gray text-gray-700 dark:text-gray-300 rounded-full hover:border-earth hover:text-earth dark:hover:text-earth transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/sonofjonah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="tel:+251925651319"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400 dark:text-gray-600" />
      </div>
    </section>
  )
}
