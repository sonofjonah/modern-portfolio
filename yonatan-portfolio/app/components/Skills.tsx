"use client"

import { useInView } from "react-intersection-observer"

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: "Frontend",
      skills: [{ name: "React.js" }, { name: "JavaScript" }, { name: "HTML5" }, { name: "CSS3" }, { name: "Dart" }],
    },
    {
      title: "Backend",
      skills: [{ name: "Node.js" }, { name: "PHP" }, { name: "MySQL" }, { name: "Firebase" }],
    },
    {
      title: "Tools & Others",
      skills: [{ name: "Git" }, { name: "GitHub" }, { name: "VS Code" }, { name: "Android Studio" }],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">{category.title}</h3>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg transition-all duration-300 hover:bg-ash-gray/20 dark:hover:bg-dark-blue/20 ${
                        inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                      }`}
                      style={{ transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-earth rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
