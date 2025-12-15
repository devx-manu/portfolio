"use client"

import { useInView } from "@/hooks/use-in-view"

export function Hero() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2d3139_1px,transparent_1px),linear-gradient(to_bottom,#2d3139_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <div
          className={`transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            animation: isInView ? "slideUpFade 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)" : "none",
          }}
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">Welcome to my portfolio</p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance text-foreground">
            Your Name
            <br />
            <span className="gradient-text">Frontend Developer & Designer</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-balance">
            I craft beautiful, pixel-perfect digital experiences that combine clean design with robust engineering.
            Specialized in building accessible, performant web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#work"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-border text-foreground rounded-full font-medium hover:bg-card/50 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
