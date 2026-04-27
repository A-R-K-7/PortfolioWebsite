import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useInView } from './useInView'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    num: '01',
    title: 'ML-Powered Algorithmic Trading Framework',
    subtitle: 'StockML — NIFTY Index',
    description:
      'End-to-end algorithmic trading framework utilizing LSTM neural networks for short-term market momentum prediction. Memory-efficient out-of-core data pipeline processing 5 years of high-frequency Parquet data with real-time WebSocket streaming and automated order execution.',
    tech: ['Python', 'PyTorch', 'Pandas', 'WebSockets', 'XGBoost'],
    highlights: [
      'LSTM momentum prediction',
      'Dynamic stop-loss',
      'Walk-forward validation',
      'Live API execution',
    ],
    accent: 'var(--color-accent)',
    github: 'https://github.com/A-R-K-7/StockML',
  },
  {
    num: '02',
    title: 'Automated Trading Platform',
    subtitle: 'FlatTradeWeb — Sell Automation',
    description:
      'Web-based trading platform built with Python and Flask to streamline and automate trade execution. Real-time data processing using Pandas and WebSockets drives automated selling decisions for profit maximization.',
    tech: ['Python', 'Flask', 'Pandas', 'WebSockets'],
    highlights: [
      'Real-time automation',
      'Sell optimization',
      'Modular strategies',
      'Market API integration',
    ],
    accent: 'var(--color-accent-2)',
    github: 'https://github.com/A-R-K-7/FlatTradeWeb-With-Sell-Automation',
  },
  {
    num: '03',
    title: 'Cross-Platform Expense Tracker',
    subtitle: 'MyExpenseTracker — React Native',
    description:
      'Cross-platform mobile application using React Native and TypeScript for personal finance management. Features expense tracking, category management, customizable themes, and CI/CD with automated testing.',
    tech: ['React Native', 'TypeScript', 'Expo', 'Jest'],
    highlights: [
      'Android + iOS',
      'Category management',
      'CI/CD pipeline',
      'TestFlight deploy',
    ],
    accent: 'var(--color-accent)',
    github: 'https://github.com/A-R-K-7/MyExpenseTracker',
  },
  {
    num: '04',
    title: 'YouTube Video Downloader and Converter',
    subtitle: 'YouTVD — Web App',
    description:
      'Web application built using Flask and SocketIO to download and convert YouTube videos to MP4 format. Supports direct downloads for both single videos and playlists with automatic moving to the system Downloads folder.',
    tech: ['Python', 'Flask', 'SocketIO', 'yt-dlp', 'ffmpeg'],
    highlights: [
      'Playlist support',
      'MP4 conversion',
      'Direct downloads',
      'Real-time sockets',
    ],
    accent: 'var(--color-accent-2)',
    github: 'https://github.com/A-R-K-7/YouTVD',
  },
  {
    num: '05',
    title: 'AI-Driven Behavioural Companion (In Progress)',
    subtitle: 'Multi-Platform Health AI',
    description:
      'Multi-platform AI system for emotional state classification and stress level regression from physiological data. Personalized baseline modeling with anomaly detection for low-latency real-time inference.',
    tech: ['PyTorch', 'Scikit-learn', 'React'],
    highlights: [
      'Stress classification',
      'Mood regression',
      'Anomaly detection',
      'Personalized baselines',
    ],
    accent: 'var(--color-accent)',
    github: 'https://github.com/A-R-K-7/BehaviouralCompanion',
  },
]

function ProjectRow({ project, index }) {
  const rowRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slide in from the side — odd from right, even from left
      const xStart = index % 2 === 0 ? -80 : 80
      gsap.from(rowRef.current, {
        x: xStart,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rowRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })

      // Animate the project number
      gsap.from(rowRef.current.querySelector('.project-num'), {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: rowRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })

      // Stagger tech tags
      gsap.from(rowRef.current.querySelectorAll('.tech-tag'), {
        y: 15,
        opacity: 0,
        stagger: 0.06,
        duration: 0.5,
        delay: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: rowRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })
    })

    return () => ctx.revert()
  }, [index])

  return (
    <div ref={rowRef} className="project-card">
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Number */}
        <div className="md:col-span-1">
          <span
            className="project-num text-5xl md:text-6xl font-bold"
            style={{
              fontFamily: 'var(--font-heading)',
              color: project.accent,
              opacity: 0.25,
            }}
          >
            {project.num}
          </span>
        </div>

        {/* Title + subtitle */}
        <div className="md:col-span-4">
          <span className="label-text block mb-3" style={{ color: project.accent }}>
            {project.subtitle}
          </span>
          <h3
            className="text-2xl md:text-3xl font-bold uppercase leading-tight mb-4"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.01em' }}
          >
            {project.title}
          </h3>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300"
              style={{ color: project.accent }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          )}
        </div>

        {/* Description */}
        <div className="md:col-span-4">
          <p
            className="text-[0.9rem] leading-[1.9] mb-6"
            style={{ color: 'var(--color-text-muted-light)' }}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="md:col-span-3">
          <span
            className="label-text block mb-4"
            style={{ color: 'var(--color-text-muted-light)' }}
          >
            Key Features
          </span>
          <div className="flex flex-col gap-3">
            {project.highlights.map((h) => (
              <div
                key={h}
                className="flex items-center gap-3 text-sm"
                style={{ color: 'var(--color-text-muted-light)' }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: project.accent }}
                />
                {h}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView(0.05)
  const titleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title slide-up with scale
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={ref} className="section-dark relative overflow-hidden">
      <div className="topo-bg" />

      <div className="section-inner relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="glow-dot" />
          <span className="label-text" style={{ color: 'var(--color-text-muted-light)' }}>
            Featured Work
          </span>
        </div>

        <h2
          ref={titleRef}
          className="display-heading text-[clamp(2rem,5vw,4.5rem)] mb-6"
        >
          THINGS I'VE{' '}
          <span className="serif-italic accent-text" style={{ fontWeight: 400 }}>Built</span>
        </h2>

        {/* Gradient accent line */}
        <div className="gradient-line w-full max-w-[300px] mb-16" />

        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.num} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
