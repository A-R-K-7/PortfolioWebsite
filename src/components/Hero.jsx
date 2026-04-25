import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import gsap from 'gsap'

/* ============================================
   Three.js Neural Network Sphere
   ============================================ */

function NeuralSphere() {
  const meshRef = useRef()
  const pointsRef = useRef()
  const linesRef = useRef()

  // Create sphere points
  const { positions, linePositions } = useMemo(() => {
    const pts = []
    const count = 200
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1)
      const theta = Math.random() * Math.PI * 2
      const r = 2.2 + (Math.random() - 0.5) * 0.3
      pts.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      )
    }

    // Connect nearby points with lines
    const lines = []
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pts[i * 3] - pts[j * 3]
        const dy = pts[i * 3 + 1] - pts[j * 3 + 1]
        const dz = pts[i * 3 + 2] - pts[j * 3 + 2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (dist < 1.2) {
          lines.push(
            pts[i * 3], pts[i * 3 + 1], pts[i * 3 + 2],
            pts[j * 3], pts[j * 3 + 1], pts[j * 3 + 2]
          )
        }
      }
    }

    return {
      positions: new Float32Array(pts),
      linePositions: new Float32Array(lines),
    }
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.08
      meshRef.current.rotation.x = Math.sin(t * 0.05) * 0.1
    }
  })

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* Points */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={positions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#e50000"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      {/* Connection lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={linePositions}
            count={linePositions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00d4aa" transparent opacity={0.12} />
      </lineSegments>

      {/* Outer wireframe sphere */}
      <mesh>
        <icosahedronGeometry args={[2.8, 1]} />
        <meshBasicMaterial color="#e50000" wireframe transparent opacity={0.06} />
      </mesh>

      {/* Inner wireframe sphere */}
      <mesh>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshBasicMaterial color="#00d4aa" wireframe transparent opacity={0.04} />
      </mesh>
    </group>
  )
}

function FloatingParticles() {
  const ref = useRef()

  const positions = useMemo(() => {
    const arr = new Float32Array(150 * 3)
    for (let i = 0; i < 150; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12
    }
    return arr
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.02
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={150}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#ffffff" transparent opacity={0.3} sizeAttenuation />
    </points>
  )
}

/* ============================================
   Hero Section
   ============================================ */

export default function Hero() {
  const headingRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    // GSAP text reveal animation
    const ctx = gsap.context(() => {
      // Stagger animate the stat numbers
      gsap.from('.stat-value', {
        textContent: 0,
        duration: 2,
        delay: 1.8,
        ease: 'power2.out',
        snap: { textContent: 0.1 },
        stagger: 0.2,
      })
    })

    return () => ctx.revert()
  }, [])

  const headingVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const lineVariants = {
    hidden: { y: '110%', rotateX: -20 },
    visible: {
      y: '0%',
      rotateX: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section
      id="hero"
      className="section-dark relative flex items-center overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      <div className="topo-bg" />

      {/* Three.js Canvas */}
      <div className="hero-canvas-container">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          dpr={[1, 1.5]}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.5} />
          <NeuralSphere />
          <FloatingParticles />
        </Canvas>
      </div>

      {/* Gradient overlay to blend canvas */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, var(--color-bg-dark) 40%, transparent 80%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full" style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 60px 40px' }}>
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="glow-dot" />
          <span className="label-text accent-text">Machine Learning Engineer</span>
        </motion.div>

        {/* Massive name with staggered line reveal */}
        <motion.h1
          ref={headingRef}
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          className="display-heading text-[clamp(3.5rem,10vw,9rem)] mb-8"
        >
          <div className="overflow-hidden">
            <motion.div variants={lineVariants}>AKSHAY</motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div variants={lineVariants}>
              <span className="serif-italic accent-text" style={{ fontWeight: 400 }}>
                Reddy
              </span>{' '}
              KALLEM
            </motion.div>
          </div>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-lg md:text-xl max-w-[550px] leading-relaxed"
          style={{ color: 'var(--color-text-muted-light)' }}
        >
          Building intelligent systems for real-world decisions.
          Time-series models, trading algorithms, and scalable ML
          pipelines that perform at the edge of possibility.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex flex-wrap gap-4 items-center"
          style={{ marginTop: '0.7rem', marginBottom: '0.7rem' }}
        >
          <a href="#projects" className="btn-accent" id="hero-view-projects">
            <span>View Projects</span>
          </a>
          <a href="#contact" className="btn-outline" id="hero-contact-me">
            Contact Me
          </a>
        </motion.div>

        {/* Bottom stat strip */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-10 flex flex-wrap gap-16"
        >
          {[
            { value: '4+', label: 'Production Systems' },
            { value: '9.19', label: 'CGPA' },
            { value: '5+', label: 'ML Frameworks' },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="stat-value text-3xl md:text-4xl font-bold mb-1 accent-2-text"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {stat.value}
              </div>
              <div className="label-text" style={{ color: 'var(--color-text-muted-light)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="label-text" style={{ color: 'var(--color-text-muted-light)', fontSize: '0.6rem' }}>
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-white/20" />
        </motion.div>
      </motion.div>
    </section>
  )
}
