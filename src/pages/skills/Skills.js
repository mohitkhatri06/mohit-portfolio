import './Skills.css';

const Skills = () => {
   return (
      <div className='skills' id='skills'>
         <h1>SKILLS</h1>
         <form action='#' method='post'>
            <div>
               <label htmlFor='name'>Text Input:</label>
               <input type='text' name='name' id='name' value='' tabIndex='1' />
            </div>
            <div>
               <label htmlFor='name'>Text Input:</label>
               <input type='text' name='name' id='name' value='' tabIndex='1' />
            </div>
            <div>
               <label htmlFor='name'>Text Input:</label>
               <input type='text' name='name' id='name' value='' tabIndex='1' />
            </div>
            <div>
               <label htmlFor='name'>Text Input:</label>
               <input type='text' name='name' id='name' value='' tabIndex='1' />
            </div>
            <div>
               <label htmlFor='name'>Text Input:</label>
               <input type='text' name='name' id='name' value='' tabIndex='1' />
            </div>
            <div>
               <h4>Radio Button Choice</h4>

               <label htmlFor='radio-choice-1'>Choice 1</label>
               <input
                  type='radio'
                  name='radio-choice-1'
                  id='radio-choice-1'
                  tabIndex='2'
                  value='choice-1'
               />

               <label htmlFor='radio-choice-2'>Choice 2</label>
               <input
                  type='radio'
                  name='radio-choice-2'
                  id='radio-choice-2'
                  tabIndex='3'
                  value='choice-2'
               />
            </div>

            <div>
               <label htmlFor='select-choice'>Select Dropdown Choice:</label>
               <select name='select-choice' id='select-choice'>
                  <option value='Choice 1'>Choice 1</option>
                  <option value='Choice 2'>Choice 2</option>
                  <option value='Choice 3'>Choice 3</option>
               </select>
            </div>

            <div>
               <label htmlFor='checkbox'>Checkbox:</label>
               <input type='checkbox' name='checkbox' id='checkbox' />
            </div>

            <div>
               <input type='submit' value='Submit' />
            </div>
         </form>
      </div>
   );
};

export default Skills;
