import './card.css';
import { About } from '../../data/data';

function Card({ onClick }) {
   return (
      <div className='card' onClick={onClick}>
         <div className='card-back'>Back</div>
         <div className='card-front'>
            <div className='container-about-details'>
               <img
                  src={About.profilePicture}
                  className='avatar-logo'
                  alt='avatar'
               />
               <span className='about-details'>
                  <p>{About.firstName}</p>
                  <p>{About.email}</p>
                  <p>{About.phone}</p>
                  <p>{About.country}</p>
               </span>
            </div>
         </div>
      </div>
   );
}

export default Card;
