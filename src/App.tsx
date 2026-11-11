import { About } from './components/About'
import { AppShowcase } from './components/AppShowcase'
import { Architecture } from './components/Architecture'
import { DemoVideo } from './components/DemoVideo'
import { Footer } from './components/Footer'
import { FutureWork } from './components/FutureWork'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Problem } from './components/Problem'
import { Prototype } from './components/Prototype'
import { Team } from './components/Team'

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-bg text-text">
      <Header />
      <main>
        <Hero />
        <Problem />
        <About />
        <HowItWorks />
        <Architecture />
        <Prototype />
        <AppShowcase />
        <DemoVideo />
        <FutureWork />
        <Team />
      </main>
      <Footer />
    </div>
  )
}
