import './App.css';
import MyParticles from './components/MyParticles';
import MyNavBar from './components/navbar/MyNavBar';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';
import { Col, Row } from 'react-bootstrap';

function App() {
   return (
      <div className='App'>
         <MyNavBar />
         <div className='body-below'>
            <Home />
            <About />
            <Skills />
            <Projects />
         </div>
      </div>
   );
}

export default App;
