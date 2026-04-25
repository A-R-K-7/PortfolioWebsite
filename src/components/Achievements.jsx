import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useInView } from './useInView'

gsap.registerPlugin(ScrollTrigger)

const achievements = [
  {
    title: 'Runner-up — HackSavy 2025',
    description: 'National-level hackathon showcasing AI-driven solutions',
  },
  {
    title: 'NPTEL SPM Certification',
    description: 'Software Project Management — IIT certification',
  },
  {
    title: 'Technovanza Quiz Winner',
    description: 'Technical quiz competition champion',
  },
  {
    title: 'Technical Presentation Runner-up',
    description: 'Inter-college technical paper presentation',
  },
]

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Malla Reddy University',
    score: 'CGPA: 9.19 / 10',
    period: '2022 — 2026',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Narayana Junior College',
    score: '',
    period: '2020 — 2022',
  },
]

export default function Achievements() {
  const [inViewRef, inView] = useInView(0.1)
  const sectionRef = useRef(null)

  const setSectionRef = (el) => {
    sectionRef.current = el
    inViewRef.current = el
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.achievement-card', {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.achievements-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from('.edu-card', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.edu-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={setSectionRef}
      className="section-light relative overflow-hidden"
    >
      <div className="topo-bg-light" />

      <div className="section-inner relative z-10">
        {/* Achievements */}
        <div className="mb-28" id="achievements">
          <div className="flex items-center gap-3 mb-6">
            <div className="divider" />
            <span className="label-text" style={{ color: 'var(--color-text-muted-dark)' }}>
              Recognition
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display-heading text-[clamp(2rem,5vw,4.5rem)] mb-16"
            style={{ color: 'var(--color-text-dark)' }}
          >
            <span className="serif-italic" style={{ fontWeight: 400, color: 'var(--color-accent)' }}>Achievements</span> &
            AWARDS
          </motion.h2>

          <div className="achievements-grid grid md:grid-cols-2 gap-x-16 gap-y-10">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="achievement-card border-t pt-6 group cursor-default"
                style={{ borderColor: 'var(--color-border-light)' }}
              >
                <h3
                  className="text-lg font-bold mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-dark)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted-dark)' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div id="education">
          <div className="flex items-center gap-3 mb-6">
            <div className="divider-turq" />
            <span className="label-text" style={{ color: 'var(--color-text-muted-dark)' }}>
              Education
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="display-heading text-[clamp(2rem,5vw,4.5rem)] mb-16"
            style={{ color: 'var(--color-text-dark)' }}
          >
            ACADEMIC{' '}
            <span className="serif-italic" style={{ fontWeight: 400, color: 'var(--color-accent-2)' }}>Background</span>
          </motion.h2>

          <div className="edu-grid grid md:grid-cols-2 gap-x-16 gap-y-10">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="edu-card border-t pt-6"
                style={{ borderColor: 'var(--color-border-light)' }}
              >
                <span
                  className="label-text block mb-3"
                  style={{ color: 'var(--color-text-muted-dark)' }}
                >
                  {edu.period}
                </span>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-dark)' }}
                >
                  {edu.degree}
                </h3>
                <p className="text-sm mb-2" style={{ color: 'var(--color-text-muted-dark)' }}>
                  {edu.institution}
                </p>
                {edu.score && (
                  <span
                    className="text-sm font-semibold accent-2-text"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {edu.score}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
