import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer
      className="relative border-t"
      style={{ borderColor: 'var(--color-border-dark)', background: 'var(--color-bg-dark)' }}
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="label-text"
            style={{ color: 'var(--color-text-muted-light)' }}
          >
            &copy; {new Date().getFullYear()} Akshay Reddy Kallem
          </span>
        </motion.div>


      </div>
    </footer>
  )
}
