"use client"

import { useInView } from "@/hooks/use-in-view"

export function Skills() {
  const { ref, isInView } = useInView()

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Zod"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "Supabase", "API Design", "Authentication"],
    },
    {
      category: "Tools & Practices",
      skills: ["Git", "Testing", "Performance", "SEO", "Accessibility", "CI/CD"],
    },
    {
      category: "Soft Skills",
      skills: ["Communication", "Problem Solving", "Leadership", "Collaboration", "Mentoring", "Project Management"],
    },
  ]

  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
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
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A comprehensive overview of my technical skills and areas of expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.category}
              className={`glass rounded-xl p-6 transition-all duration-1000 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                animation: isInView
                  ? `slideUpFade 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.1 + idx * 0.1}s both`
                  : "none",
              }}
            >
              <h3 className="text-xl font-bold mb-4 text-accent">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
