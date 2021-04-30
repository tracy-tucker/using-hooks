# What are React Hooks

React Hooks (version 16.8 release) allow you to use state and other lifecycle methods within a function-based component(functional stateless components).

It let's you use state and other React features without writing a class.

A Hook is a special function that let's you "hook into" React features. For example, `useState` is Hook that lets you add React state to function components.

For example, if you write a function component and realize you need to add some state to it, previously you had to contvert it to a class. Now you can use a Hook inside the existing function component.

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

`useState` declares a state variable and preserves some value between function calls. This is the exact same capabilities as `this.state`. State variables are preserved by React.
