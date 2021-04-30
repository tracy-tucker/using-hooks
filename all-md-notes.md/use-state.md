# useState

The `useState` function is brought in to the project just like any other package:

`import React, { useState } from 'react';`

`useState` can only be used on a function-based component, not class component.

The general formula to create this function is:

`const [value, setValue] = useState(initialState);`
`value` = the value
`setValue` = function used to set the value
`initialState` = the initial state, which is typically an empty string.