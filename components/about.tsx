"use client"

import { useInView } from "@/hooks/use-in-view"

export function About() {
  const { ref, isInView } = useInView()

  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
  ]

  return (
    <section id="about" ref={ref} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div
            className={`transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            style={{
              animation: isInView ? "slideLeftFade 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both" : "none",
            }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <img
                src="/professional-portrait.jpg"
                alt="Your portrait"
                className="relative w-full rounded-2xl object-cover border border-border/30"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{
              animation: isInView ? "slideRightFade 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both" : "none",
            }}
          >
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              About <span className="gradient-text">Me</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a passionate developer focused on creating beautiful, accessible digital experiences. With over 5
              years of experience, I've worked with startups and established companies to build products that users
              love.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              My approach combines thoughtful design with performant code, ensuring that every project not only looks
              great but works seamlessly across all devices and browsers.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  style={{
                    animation: isInView
                      ? `scaleInFade 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.2 + idx * 0.1}s both`
                      : "none",
                  }}
                >
                  <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
