# useRef

## What is this used for?

It is a way to access DOM elements and persist values in successive renders.

It takes in a maximum of one argument and returns an Object. The returned Object has a property called `current` whose value is the argument you passed to `useRef`. If you invoke it without an argument, your object property will be `undefined`.

EX:

```
import { useRef } from 'react';

const App = () => {
    const ref = useRef();

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
    </div>
  );
};

export default App;
```

In the above example, `useRef` is imported in at the top, then a `const` is created to initiate `useRef`. In the `return`, the `button` element is chosen for the action. When the `button` is clicked, a new class is added to the `div` because that is where the `ref` is being called/referenced within the `return`.