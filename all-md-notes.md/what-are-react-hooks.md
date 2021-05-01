# What are React Hooks

React Hooks (version 16.8 release) allow you to use state and other lifecycle methods within a function-based component(functional stateless components).

It let's you use state and other React features without writing a class.

A Hook is a special function that let's you "hook into" React features. For example, `useState` is a Hook that lets you add React state to function components.

For example, if you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component.

**Count Example**
In a class, you can initialize the count by setting the state to zero: 

```
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
```

In a function component, you have no `this`, so you can't assign or read `this.state`. Instead you would use `useState`:

```
import React, { useState } from 'react';
function Example() {
    //Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
}
```

Above, we are declaring a state variable called `count`, and set it to `0`. React remembers its current value between re-renders, and provides the most recent one to our function. If we want to update the current `count`, we can call `setCount`.

`useState` declares a state variable and preserves some value between function calls. This is the exact same capabilities as `this.state`. State variables are preserved by React.
`0` The only argument you are passing in to `useState` is the initial state you want to start with. Unlike with `class`es, the state doesn't have to be an object.

If you wanted to store 2 different values, you would have to call `useState()` twice.

`useState` returns a pair of values: the **current** state and a **function** that updates it.

`const [count, setState] = useState()`

This is similar to writing `this.state.count` and `this.setState` in a class, except you are writing these as a pair.

# Updating State

Now that you have the `const` for `useState`, you can apply `setState` to a button event attribute:

```
<button onClick={() => setCount(count + 1)}>
Click me
</button>
```

# Reading State

To read the state, there is no need to use `this.state`

`<p>You clicked {count} times</p>