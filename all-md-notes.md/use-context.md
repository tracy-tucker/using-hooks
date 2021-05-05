# useContext

In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. `Context` provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

`Context` is designed to share data that can be considered "global" for a tree of Reat components, such as the current authenticated user, theme, or preferred language.

To use, you need to wrap your application with `Context`. You can do this at the application level within `index.js` or within `appl.js`, for example.

Example:

```
import React, { createContext } from 'react';

// more code

export const UserContext = createContext();

// more code
return (
    <UserContext.Provider
        value={{
        user: false
      }}
    >
    // more code. Wrapping return div within UserContext
    </UserContext.Provider>
)

// ending code
```

Now, within `Toggle`:

```
import { UserContext } from './App';

const Toggle = () => {
    const [isToggled, setToggle] = useState(false)
    const userInfo = useContext(UserContext);
    console.log('userInfo:', userInfo);

    if(userInfo.user) return null;
    return (
        <div>
            <button onClick={() => setToggle(!isToggled)}>Toggle</button>
            { isToggled && <h2>Hello</h2>}
        </div>
    )
}

export default Toggle;
```

In the above code, `App` elements are wrapped with UserContext.Provider. In `Toggle`, and the added `if` conditional will toggle the `Toggle` based on whether the user is `true` or `false`.