"use client"

import { useInView } from "@/hooks/use-in-view"

export function Projects() {
  const { ref, isInView } = useInView()

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management and payment processing.",
      image: "/ecommerce-dashboard.jpg",
      tech: ["Next.js", "TypeScript", "Supabase", "Stripe"],
      link: "#",
    },
    {
      title: "Design System",
      description: "Comprehensive design system with 50+ components, documentation, and accessibility features.",
      image: "/design-system-components.jpg",
      tech: ["React", "Storybook", "Tailwind", "TypeScript"],
      link: "#",
    },
    {
      title: "Analytics Dashboard",
      description: "Interactive analytics platform for real-time data visualization and reporting.",
      image: "/analytics-charts.jpg",
      tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
      link: "#",
    },
    {
      title: "SaaS Application",
      description: "Multi-tenant SaaS platform with authentication, user management, and subscription handling.",
      image: "/saas-interface.jpg",
      tech: ["Next.js", "Prisma", "React Query", "Stripe"],
      link: "#",
    },
  ]

  return (
    <section id="work" ref={ref} className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 mb-12 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            animation: isInView ? "slideUpFade 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)" : "none",
          }}
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Selected <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of recent projects showcasing my expertise and approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <a
              key={project.title}
              href={project.link}
              className={`group glass rounded-xl overflow-hidden transition-all duration-1000 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                animation: isInView
                  ? `slideUpFade 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.1 + idx * 0.1}s both`
                  : "none",
              }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
