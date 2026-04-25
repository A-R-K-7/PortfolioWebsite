import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useInView } from './useInView'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const [inViewRef, inView] = useInView(0.15)
  const sectionRef = useRef(null)
  const headingRef = useRef(null)

  // Sync both refs to the same DOM node
  const setSectionRef = (el) => {
    sectionRef.current = el
    inViewRef.current = el
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Word-by-word reveal on the heading
      const words = headingRef.current?.querySelectorAll('.word')
      if (words) {
        gsap.from(words, {
          opacity: 0.1,
          y: 20,
          stagger: 0.06,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            end: 'bottom 50%',
            toggleActions: 'play none none reverse',
          },
        })
      }

      // Stagger the column blocks
      gsap.from('.about-col', {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-cols',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const headingText = 'Engineering Systems That Bridge The Gap Between Research And Production.'
  const headingWords = headingText.split(' ')
  const serifWords = new Set(['Engineering', 'Research', 'Production.'])
  const accentWords = new Set(['Production.'])

  return (
    <section id="about" ref={setSectionRef} className="section-light relative overflow-hidden">
      <div className="topo-bg-light" />

      <div className="section-inner relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-center gap-3"
        >
          <div className="divider" />
          <span className="label-text" style={{ color: 'var(--color-text-muted-dark)' }}>
            About
          </span>
        </motion.div>

        {/* Big editorial statement — word by word */}
        <h2
          ref={headingRef}
          className="display-heading text-[clamp(2rem,5vw,4.5rem)] mb-20 max-w-[1000px]"
          style={{ color: 'var(--color-text-dark)', lineHeight: 1.05 }}
        >
          {headingWords.map((word, i) => (
            <span
              key={i}
              className={`word inline-block ${serifWords.has(word) ? 'serif-italic' : ''}`}
              style={{
                marginRight: '0.35em',
                fontWeight: serifWords.has(word) ? 400 : 700,
                color: accentWords.has(word) ? 'var(--color-accent)' : 'inherit',
              }}
            >
              {word}
            </span>
          ))}
        </h2>

        {/* Three column content */}
        <div className="about-cols grid md:grid-cols-3 gap-16">
          {[
            {
              accent: 'var(--color-accent)',
              text: 'I specialize in building time-series systems and real-world decision models that operate at the intersection of machine learning and high-performance computing.',
            },
            {
              accent: 'var(--color-accent-2)',
              title: 'AI Systems',
              text: 'End-to-end ML pipelines from data ingestion to production inference with real-time performance.',
            },
            {
              accent: 'var(--color-accent)',
              title: 'Trading Algorithms',
              text: 'ML-driven strategies with dynamic risk management, LSTM prediction, and live execution.',
            },
          ].map((item, i) => (
            <div key={i} className="about-col">
              <div className="h-[3px] w-[60px] mb-8" style={{ background: item.accent }} />
              {item.title && (
                <h3
                  className="text-lg font-bold uppercase tracking-wide mb-3"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-dark)' }}
                >
                  {item.title}
                </h3>
              )}
              <p
                className="text-[0.9rem] leading-[1.9]"
                style={{ color: 'var(--color-text-muted-dark)' }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
