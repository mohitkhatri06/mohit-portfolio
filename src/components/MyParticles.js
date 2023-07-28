import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import './MyParticles.css';

const MyParticles = () => {
   const options = {
      fullScreen: { enable: false, zIndex: -1 },
      style: {
         height: '110vh',
         width: '100%',
      },
      particles: {
         number: {
            value: 80,
            density: {
               enable: true,
               area: 800,
            },
         },
         color: {
            value: ['#2EB67D', '#ECB22E', '#E01E5B', '#36C5F0'],
         },
         shape: {
            type: 'circle',
         },
         opacity: {
            value: 1,
         },
         size: {
            value: { min: 1, max: 8 },
         },
         links: {
            enable: true,
            distance: 150,
            color: '#808080',
            opacity: 0.7,
            width: 1,
         },
         move: {
            enable: true,
            speed: 5,
            direction: 'none',
            random: true,
            straight: false,
            outModes: 'none',
         },
      },

      interactivity: {
         events: {
            onHover: {
               enable: true,
               mode: 'grab',
            },
            onClick: {
               enable: true,
               mode: 'push',
            },
         },
         modes: {
            grab: {
               distance: 140,
               links: {
                  opacity: 1,
               },
            },
            push: {
               quantity: 4,
            },
         },
      },
   };

   const particlesInit = useCallback(async (engine) => {
      await loadFull(engine);
   }, []);

   return (
      <div id='father_container'>
         <Particles
            id='particles-js'
            options={options}
            init={particlesInit}
            style={{
               width: '10px',
               height: '10px',
            }}
         ></Particles>
      </div>
   );
};
export default MyParticles;
