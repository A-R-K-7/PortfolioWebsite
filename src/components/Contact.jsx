import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useInView } from './useInView'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const [inViewRef, inView] = useInView(0.15)
  const sectionRef = useRef(null)

  const setSectionRef = (el) => {
    sectionRef.current = el
    inViewRef.current = el
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-line', {
        y: 80,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-heading',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from('.contact-btns', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-heading',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="contact"
      ref={setSectionRef}
      className="section-dark relative overflow-hidden"
    >
      <div className="topo-bg" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 40% 40% at 70% 60%, rgba(255,45,85,0.04), transparent)',
        }}
      />

      <div className="section-inner relative z-10" style={{ paddingTop: '80px' }}>
        <div className="max-w-[900px]">
          <div className="flex items-center gap-3 mb-6">
            <span className="glow-dot" />
            <span className="label-text" style={{ color: 'var(--color-text-muted-light)' }}>
              Get in Touch
            </span>
          </div>

          <div className="contact-heading mb-10">
            <div className="overflow-hidden">
              <h2 className="contact-line display-heading text-[clamp(2.5rem,6vw,5.5rem)]">
                LET'S BUILD
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2 className="contact-line display-heading text-[clamp(2.5rem,6vw,5.5rem)]">
                SOMETHING{' '}
                <span className="serif-italic accent-text" style={{ fontWeight: 400 }}>
                  Together.
                </span>
              </h2>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg leading-relaxed mb-10 max-w-[500px]"
            style={{ color: 'var(--color-text-muted-light)' }}
          >
            Have an interesting project or opportunity? I'm always open to
            discussing new challenges in ML, AI systems, and high-performance
            computing.
          </motion.p>

          {/* Buttons */}
          <div className="contact-btns flex flex-wrap gap-4" style={{ marginBottom: '2rem' }}>
            <a
              href="mailto:akshayreddykallem@gmail.com"
              className="btn-accent"
              id="contact-email-btn"
            >
              <span>Send Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/akshay-reddy-kallem/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              id="contact-linkedin-btn"
            >
              LinkedIn
            </a>
          </div>

          {/* Email display */}
          <div
            className="border-t"
            style={{ borderColor: 'var(--color-border-dark)', paddingTop: '2.5rem' }}
          >
            <span className="label-text block mb-3" style={{ color: 'var(--color-text-muted-light)' }}>
              Email
            </span>
            <a
              href="mailto:akshayreddykallem@gmail.com"
              className="text-xl md:text-2xl font-medium hover:text-[var(--color-accent)] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              akshayreddykallem@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
