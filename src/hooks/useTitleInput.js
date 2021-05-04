import { useState, useEffect } from 'react';

function useTitleInput(initialValue) {
    const [value, setValue] = useState('Enter name');
    useEffect(() => {
      document.title = value;
    });
    return [value, setValue];
  }

  export { useTitleInput };