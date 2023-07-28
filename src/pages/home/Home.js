import MyParticles from '../../components/MyParticles';
import './Home.css';
import { Container } from 'react-bootstrap';

const Home = () => {
   return (
      <section className='banner' id='home'>
         <MyParticles />

         <Container className='container-tagline'>
            <span className='tagline'>
               Welcome to my Portfolio something cool is coming! My name is
               Mohit I'm building this amazing website. Come back to check my
               progress.
            </span>
         </Container>
      </section>
   );
};

export default Home;
