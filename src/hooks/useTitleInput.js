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