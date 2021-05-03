# useEffect

Similar to the lifecycle functions of React.
It functions very much like `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`.

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
React will remember the function you passed and call it later after performing the DOM updates.

`useEffect` is called inside the component in order to access any props. It places `useEffect` right within the function scope.

There are 2 common kinds of side effect in React components:
those that don't require cleanup, and those that do.

# Effects Without Cleanup

Examples of effects that don't require a cleanup:
Network requests
manual DOM mutations (see above example)
Logging

These will run and be immediately forgotten

## Class Components
In a class component, you would have to use both `componentDidMount` and `componentDidUpdate` in order to update the document title for every possible way the DOM can be updated (render).

```
componentDidMount() {
    document.title = `You click ${this.state.count} times`;
}
componentDidUpdate() {
    document.title = `You click ${this.state.count} times`;
}
```

# Effects With Cleanup

For example, you have a subscription setup with some external data source and you don't want to cause a memory leak.

## Class Example

```
class FriendStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  componentDidMount() {
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }
  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );
  }
  handleStatusChange(status) {
    this.setState({
      isOnline: status.isOnline
    });
  }

  render() {
    if (this.state.isOnline === null) {
      return 'Loading...';
    }
    return this.state.isOnline ? 'Online' : 'Offline';
  }
}
```
The above needs a `componentDidUpdate` to be fully correct.

## Function Example

```
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Specify how to clean up after this effect:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

React performs the cleanup when the component unmounts. It also cleans up effects from the previous render before running effects next time.