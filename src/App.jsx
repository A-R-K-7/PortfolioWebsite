import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Marquee from './components/Marquee'

const techMarquee = [
  'PyTorch', 'LSTM', 'Time-Series', 'XGBoost', 'Deep Learning',
  'Trading Systems', 'Real-Time ML', 'Production AI', 'Kubernetes',
  'Neural Networks', 'Feature Engineering', 'WebSockets',
]

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee items={techMarquee} speed={30} />
        <About />
        <Projects />
        <Marquee items={techMarquee} reverse speed={35} />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
