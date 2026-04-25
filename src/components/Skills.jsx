import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useInView } from './useInView'

gsap.registerPlugin(ScrollTrigger)

const skillCategories = [
  {
    label: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'SQL'],
    accent: 'var(--color-accent)',
  },
  {
    label: 'Machine Learning',
    skills: ['PyTorch', 'Scikit-learn', 'XGBoost', 'TensorFlow', 'LSTM / RNN'],
    accent: 'var(--color-accent-2)',
  },
  {
    label: 'Concepts',
    skills: ['Time-Series Modeling', 'Optimization', 'Model Evaluation', 'Feature Engineering', 'Anomaly Detection'],
    accent: 'var(--color-accent)',
  },
  {
    label: 'Systems & Infra',
    skills: ['API Integration', 'Real-time Pipelines', 'WebSockets'],
    accent: 'var(--color-accent-2)',
  },
  {
    label: 'Tools & Frameworks',
    skills: ['Git', 'Flask', 'React', 'MongoDB', 'MySQL', 'Pandas', 'NumPy'],
    accent: 'var(--color-accent)',
  },
]

/* Animated badge using Framer Motion instead of GSAP */
const badgeVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const rowVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const rowVariantsAlt = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Skills() {
  const [inViewRef, inView] = useInView(0.05)

  return (
    <section
      id="skills"
      ref={inViewRef}
      className="section-navy relative overflow-hidden"
    >
      <div className="topo-bg" />

      <div className="section-inner relative z-10" style={{ paddingTop: '160px', paddingBottom: '160px' }}>
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: 'var(--color-accent-2)',
              boxShadow: '0 0 10px var(--color-accent-2)',
            }}
          />
          <span className="label-text" style={{ color: 'var(--color-text-muted-light)' }}>
            Tech Stack
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="display-heading text-[clamp(2rem,5vw,4.5rem)] mb-6"
        >
          SKILLS &{' '}
          <span className="serif-italic accent-2-text" style={{ fontWeight: 400 }}>
            Technologies
          </span>
        </motion.h2>

        <div
          className="gradient-line w-full max-w-[300px] mb-20"
          style={{
            background:
              'linear-gradient(90deg, var(--color-accent-2), var(--color-accent), transparent)',
          }}
        />

        <div className="grid gap-14">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.label}
              variants={catIndex % 2 === 0 ? rowVariants : rowVariantsAlt}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: catIndex * 0.1 }}
              className="border-t pt-10 pb-4"
              style={{ borderColor: 'rgba(255,255,255,0.08)' }}
            >
              <span
                className="label-text block mb-8"
                style={{ color: cat.accent, fontSize: '0.75rem' }}
              >
                {cat.label}
              </span>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    custom={skillIndex}
                    variants={badgeVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
