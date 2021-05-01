# useEffect

Similar to the lifecycle functions of React.
If functions very much like `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`.

It runs after React has updated the DOM. `useEffect` is a function that runs after every complete render.

`useEffect` lets you perform side effects in function components.

EX:
```
import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    // Similar to componentDid Mount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
```

There are 2 common kinds of side effect in React components:
those that don't require cleanup, and those that do.

