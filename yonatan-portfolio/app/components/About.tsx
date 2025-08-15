"use client"

import { useInView } from "react-intersection-observer"
import { Code, Smartphone, Database, Globe } from "lucide-react"

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <Globe className="w-8 h-8 text-earth dark:text-earth" />,
      title: "Full-Stack Development",
      description: "Building complete web applications from frontend to backend with modern technologies.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-earth dark:text-earth" />,
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications using Flutter and React Native.",
    },
    {
      icon: <Database className="w-8 h-8 text-earth dark:text-earth" />,
      title: "Database Design",
      description: "Designing efficient database schemas and implementing secure data management systems.",
    },
    {
      icon: <Code className="w-8 h-8 text-earth dark:text-earth" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices and design patterns.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-earth mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer with a strong foundation in computer science and hands-on experience
              building dynamic web and mobile applications. I love turning complex problems into simple, beautiful, and
              intuitive solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
