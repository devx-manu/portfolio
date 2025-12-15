"use client"

import { useInView } from "@/hooks/use-in-view"

export function Timeline() {
  const { ref, isInView } = useInView()

  const experiences = [
    {
      period: "2023 - Present",
      role: "Senior Frontend Engineer",
      company: "Tech Company",
      description: "Leading frontend development and mentoring junior developers on best practices.",
    },
    {
      period: "2021 - 2023",
      role: "Frontend Engineer",
      company: "Digital Agency",
      description:
        "Built responsive web applications and collaborated with design teams to implement pixel-perfect UIs.",
    },
    {
      period: "2020 - 2021",
      role: "Junior Developer",
      company: "Startup",
      description: "Started my career building full-stack features and contributing to product development.",
    },
  ]

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 mb-12 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            animation: isInView ? "slideUpFade 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)" : "none",
          }}
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Experience & <span className="gradient-text">Timeline</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-secondary md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={exp.period}
                className={`transition-all duration-1000 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  animation: isInView
                    ? `slideUpFade 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.1 + idx * 0.15}s both`
                    : "none",
                }}
              >
                <div className={`md:flex gap-8 ${idx % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:flex md:w-1/2 items-start" />

                  <div className="md:w-1/2">
                    {/* Mobile dot */}
                    <div className="md:hidden absolute left-0 w-3 h-3 bg-primary rounded-full -translate-x-1.5 translate-y-2" />

                    <div className="ml-6 md:ml-0 glass rounded-xl p-6">
                      <p className="text-accent font-semibold mb-2">{exp.period}</p>
                      <h3 className="text-xl font-bold mb-1 text-foreground">{exp.role}</h3>
                      <p className="text-secondary text-sm font-medium mb-3">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
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
