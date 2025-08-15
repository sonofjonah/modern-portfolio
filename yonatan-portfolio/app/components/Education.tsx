"use client"

import { useInView } from "react-intersection-observer"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export default function Education() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const coursework = [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Software Design & Methodology",
    "Programming Languages",
    "Computer Networks",
    "Software Engineering",
  ]

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
            <div className="w-20 h-1 bg-earth mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My academic background and the foundation that supports my technical skills.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-earth rounded-full flex items-center justify-center text-white shadow-lg">
                      <GraduationCap size={32} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          Bachelor of Science in Computer Science
                        </h3>
                        <p className="text-xl text-earth dark:text-earth font-semibold">Salale University</p>
                      </div>

                      <div className="flex flex-col lg:items-end text-gray-500 dark:text-gray-400 mt-4 lg:mt-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar size={18} />
                          <span>Expected: June 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={18} />
                          <span>Fitche, Ethiopia</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <Award size={20} className="text-earth dark:text-earth" />
                        Relevant Coursework
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {coursework.map((course, index) => (
                          <div
                            key={index}
                            className={`flex items-center gap-2 text-gray-600 dark:text-gray-400 transition-all duration-300 ${
                              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                          >
                            <div className="w-2 h-2 bg-earth rounded-full flex-shrink-0"></div>
                            <span>{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-ash-gray/20 dark:bg-dark-blue/20 rounded-lg p-4">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        <strong>Academic Focus:</strong> Specialized in software development, algorithms, and database
                        systems. Gained comprehensive knowledge in computer science fundamentals while developing
                        practical skills through hands-on projects and internships.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
