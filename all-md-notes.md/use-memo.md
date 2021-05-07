# useMemo

Returns a memoized value.
memoization - an optimization technique used primarily to speed up computer programs by storing results of expensive function calls and returning the cached result when the same inputs occur again.

Think of this as a `shouldComponentUpdate` lifecycle.

React example:
```
const memoizedValue = useMemo(() =>
computedExpensiveValue(a, b), [a, b]);
```

`useMemo` allows you to memoize (caching) a string, function value, so that every single time the component/function is re-run, it's not going to have to re-run the string or function.

```
import React, { useRef, useMemo } from 'react';
//more import code...


const App = () => {
  //more code here...

  const reverseWord = word => {
    console.log('function called');
    return word.split('').reverse().join('')
  };

  const title = 'Level Up Dishes'

  const TitleReversed = useMemo(() => reverseWord(title), [title]);

  return (
    <div>
      <h1>{TitleReversed}</h1>
      //more code...

export default App;
```

With the above, we created a function to reverse a word/words, `reverseWord`. We then call that function within the variable,`titleReversed`.
`titleReversed` is being referenced down in the `return` in order to show `TitleReversed` on the page.
-How to use `useMemo`:
Create `useMemo` within `TitleReversed`. `useMemo` is going to be an arrow function that we pass in the function we want to memoize the return value of, in this case is `reverseWord`. In order for `useMemo` to work, you need to tell `useMemo` what values to use it on (hence, the passing in of `title`), and also pass in an array of what values to CHECK, which is still `title`.
What `useMemo` does, is it says "as long as this thing inside of the array is not changing, then we don't need to run the passed-in function."
The array is required for `useMemo` to run, and you must be passing in the correct argument to the passed-in function.