# useDebugValue

This is really used for when you are an author of a library and you have built some custom hooks and you want to give users more detail if your custom hooks are inspected.

```
import { useState, useEffect, useDebugValue } from 'react';

function useTitleInput(initialValue) {
    const [value, setValue] = useState('Enter name');
    useEffect(() => {
      document.title = value;
    });
    useDebugValue(value.length > 0 ? 'Full' : 'Empty');

    return [value, setValue];
  }

  export { useTitleInput };
  ```