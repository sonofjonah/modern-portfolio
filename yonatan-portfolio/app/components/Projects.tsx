"use client"

import { useInView } from "react-intersection-observer"
import { Github, Smartphone, Globe, MessageSquare, GraduationCap } from "lucide-react"

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "Real-time Chat System",
      description:
        "A web-based real-time chat application built during my internship at Ethio Telecom. Features include instant messaging, user authentication, and responsive design.",
      technologies: ["java script", "HTML5", "MySQL"],
      icon: <MessageSquare className="w-8 h-8" />,
      category: "Web-Based",
    },
    {
      title: "Online Exam Platform",
      description:
        "Interactive web platform for conducting online exams with automated grading system. Includes admin dashboard, student portal, and comprehensive reporting.",
      technologies: ["React.js"],
      icon: <GraduationCap className="w-8 h-8" />,
      category: "Educational Platform",
    },
    {
      title: "Android Chat Application",
      description:
        "Mobile chat application for Android devices with real-time messaging, file sharing, and push notifications. Built with modern Android development practices.",
      technologies: ["Flutter", "Dart", "Firebase", "Android Studio"],
      icon: <Smartphone className="w-8 h-8" />,
      category: "Mobile Application",
    },
    {
      title: "Freelance Web Projects",
      description:
        "Collection of custom websites and web applications developed for various clients including startups and small businesses. Focus on responsive design and user experience.",
      technologies: ["React.js", "Node.js", "PHP", "MySQL"],
      icon: <Globe className="w-8 h-8" />,
      category: "Client Projects",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Here are some of the projects I've worked on that showcase my skills and experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-earth dark:text-earth">{project.icon}</div>
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-earth dark:group-hover:text-earth transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-medium text-earth dark:text-earth bg-earth/10 dark:bg-earth/20 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-earth dark:hover:text-earth transition-colors duration-300">
                      <Github size={16} />
                      <span className="text-sm">View Code</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
