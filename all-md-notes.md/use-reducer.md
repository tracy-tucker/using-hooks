# useReducer

A function that takes in the current state and an Action.
It's an alternative to `useState`

It accepts a reducer of type `(state, action) => newState`, and returns the current state paired with a `dispatch` method.

`dispatch` triggers a state change. It tells the app the state has been updated.
`reducer` is a function that returns some state data, triggered by an action `type`
`action` is an object that tells the reducer how to change the state. It must contain a `type` property, and it can contain an optional `payload` property.

`useReducer` is usually preferable to useState when you have complex state logic and involves multiple sub-values or when the next state depends on the previous one.

Here is an example:

```
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return {
                count: state.count + action.value
            }
        case 'minus':
        return {
            count: state.count - 1
        }
        case 'reset':
        return {
            count: initialState.count
        }
        default:
            throw new Error();
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h3>{state.count}</h3>
            <button onClick ={() => dispatch({type: 'add', value: 10})}>+</button>
            <button onClick ={() => dispatch({type: 'minus'})}>-</button>
            <button onClick ={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default Counter;
```

`useReducer` accepts a `reducer` function as its first parameter and the initial state as the second.

`useReducer` returns an array that holds the current state value and a `dispatch` function, to which you can pass an `action` and later invoke. This is similar to the pattern Redux uses but with a few differences.

`useReducer` is limited to be within the component, unlike Redux, where the `dispatch` function sends the action object to the entire store.

[GO HERE](https://stackblitz.com/edit/react-knbyfd) for a live working example.