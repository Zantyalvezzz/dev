import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Hosting from './pages/Hosting'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <main>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/proyectos" element={<Portfolio />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
