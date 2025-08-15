"use client"

import { useInView } from "react-intersection-observer"
import { Calendar, MapPin, Briefcase } from "lucide-react"

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Freelance Developer",
      company: "Various Clients",
      location: "Remote",
      period: "2023 - Present",
      description: [
        "Developed full-stack websites for startups and individuals",
        "Delivered custom solutions with modern web technologies",
        "Managed projects end-to-end, from design to deployment",
        "Worked on network configuration, API integration, and deployment",
      ],
    },
    {
      title: "Software Development Intern",
      company: "Ethio Telecom",
      location: "Ethiopia",
      period: "06/2024 - 08/2024",
      description: [
        "Designed and developed a real-time, web-based chat system",
        "Collaborated in Agile teams with daily stand-ups and code reviews",
        "Fixed critical UI bugs, enhancing overall user experience",
        "Implemented responsive design principles for mobile compatibility",
      ],
    },
    {
      title: "Personal Projects",
      company: "Self-Directed",
      location: "Remote",
      period: "2022 - Present",
      description: [
        "Developed interactive web platform for online exams and grading",
        "Created various front-end freelance projects",
        "Built back-end systems with PHP and MySQL for secure data management",
        "Developed Android-based chat application and mobile solutions",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My professional journey and key projects that have shaped my development skills.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-ash-gray dark:bg-ash-gray/50 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-start space-x-8 ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-earth rounded-full text-white shadow-lg">
                    <Briefcase size={24} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                        <p className="text-earth dark:text-earth font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex flex-col sm:items-end text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar size={16} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                          <div className="w-2 h-2 bg-earth rounded-full mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
