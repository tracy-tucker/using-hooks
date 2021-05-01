import React, {useState} from 'react';
import Toggle from './Toggle';

const App = () => {

  // const [value, setValue] = useState(initialState);
  const [name, setName] = useState('');

  // e.preventDefault prevents the form from refreshing the page.
  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle />
      <form onSubmit={e => {
        e.preventDefault();
        formSubmit(name, setName);
      }}>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
      <button>Submit</button>
      </form>
    </div>
  );
};

const formSubmit = (value, setValue) => {
  console.log('email sent to ' + value + '!');
  setValue('')
}

export default App;
