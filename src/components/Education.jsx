import { motion } from 'framer-motion'
import { useInView } from './useInView'

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Malla Reddy University',
    score: 'CGPA: 9.19 / 10',
    period: '2022 — 2026',
    color: 'var(--color-neon-purple)',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Narayana Junior College',
    score: '',
    period: '2020 — 2022',
    color: 'var(--color-neon-blue)',
  },
]

export default function Education() {
  const [ref, inView] = useInView(0.2)

  return (
    <section id="education" ref={ref}>
      <div className="section-container">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          // Education
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title mb-14"
        >
          Academic <span className="gradient-text">Background</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="glass-card-glow relative overflow-hidden p-8"
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${edu.color}, transparent)`,
                  opacity: 0.6,
                }}
              />

              <div
                className="text-xs font-medium tracking-widest uppercase mb-4"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: edu.color,
                }}
              >
                {edu.period}
              </div>

              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {edu.degree}
              </h3>

              <p
                className="text-base mb-3"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {edu.institution}
              </p>

              {edu.score && (
                <div className="inline-flex items-center gap-2 mt-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: edu.color }}
                  />
                  <span
                    className="text-sm font-semibold"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {edu.score}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
