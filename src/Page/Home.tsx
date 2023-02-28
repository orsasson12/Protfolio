import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/hero/HeroSection'
import AboutSection from '../components/about/AboutSection'
import Skills from '../components/skills/Skills'
import Projects from '../components/projects/Projects'
import Contact from '../components/contact/Contact'
// animate on scroll
import Aos from 'aos'
import 'aos/dist/aos.css'
// routes 
const Home = () => {
    Aos.init({
        duration: 1800,
        offset: 0
    })
    return (
        <div className='overflow-hidden'>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home