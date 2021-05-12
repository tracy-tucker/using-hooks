import React, { useState, useRef, useEffect } from 'react';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';
import useAbortableFetch from 'use-abortable-fetch';

const App = () => {
  const [name, setName] = useTitleInput('')
  const ref = useRef();
  
  //useAbortableFetch
  const { data, loading } = useAbortableFetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes'
  );
  if (!data) return null;


  // const [value, setValue] = useState(initialState);
  // const [name, setName] = useState('');

  // Arrow function used because nothing is going to be automatically returned
  // useEffect(() => {
  //   document.title = name;
  // });

  // e.preventDefault prevents the form from refreshing the page.
  return (
    <div className="main-wrapper" ref={ref}>
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
        <button onClick={() => ref.current.classList.add('new-fake-class')}>Submit</button>
      </form>
      {data.map(dish => (
        <article className="dish-card dish-card--withImage">
          <h3>{dish.name}</h3>
          <p>{dish.desc}</p>
          <div className="ingredients">
            {dish.ingredients.map(ingredient => (
              <span>{ingredient}</span>
            ))}
          </div>
        </article>
      ))}
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
