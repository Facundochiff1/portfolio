import './App.css'
import { About } from './components/layout/About'
import { Contact } from './components/layout/Contact'
import { Home } from './components/layout/Home'
import { Navbar } from './components/layout/Navbar'
import { Projects } from './components/layout/Projects'
import { Skills } from './components/layout/Skills'

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Skills title='Technologies'/>
      <Projects />
      <Contact />
    </div>
  )
}

export default App
