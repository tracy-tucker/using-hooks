import React, {useState, useEffect} from 'react';
import Toggle from './Toggle';

const App = () => {

  // const [value, setValue] = useState(initialState);
  const [name, setName] = useState('');

  // Arrow function used because nothing is going to be automatically returned
  useEffect(() => {
    document.title = name;
  });

  // e.preventDefault prevents the form from refreshing the page.
  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle />
      <form 
        onSubmit={e => {
          e.preventDefault();
        }}
      >

        <input type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;

// NOTES FOR USESTATE
//   // const [value, setValue] = useState(initialState);
//   const [name, setName] = useState('');

//   // e.preventDefault prevents the form from refreshing the page.
//   return (
//     <div className="main-wrapper">
//       <h1>Level Up Dishes</h1>
//       <Toggle />
//       <form onSubmit={e => {
//         e.preventDefault();
//         formSubmit(name, setName);
//       }}>
//       <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
//       <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// const formSubmit = (value, setValue) => {
//   console.log('email sent to ' + value + '!');
//   setValue('')
// }

// export default App;
