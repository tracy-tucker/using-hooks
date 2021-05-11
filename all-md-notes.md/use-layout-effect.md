# useLayoutEffect

GREAT SITE: usehooks.com

`useLayoutEffect` is different from `useEffect` because it fires AFTER all DOM mutations. If you need to rely on the layout, but then block the visual updates, then use `useLayoutEffect`.

Typically used when you need to do stuff to the DOM. For example, you want to lock the body and display a modal.

Modal Example:

Creaete a new file and build out your effect:

```
import { useLayoutEffect } from 'react';

function useBodyScrollLock() {
    useLayoutEffect(() => {
        const originalOverflow = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';
        
        // cleanup() is the same as componentDidUnmount()
        // You can write this either way
        // return function cleanup() {
        return () => {
            document.body.style.overflow = originalOverflow;
        }
    }, []);
}

export { useBodyScrollLock };
```
The above code is simply freezing the scroll on the page.

Then, create the modal

```
//DishForm.js

mport React from 'react';
import { useBodyScrollLock } from './hooks/bodyScrollLock';

const DishForm = () => {
    useBodyScrollLock();
    return (
        <div className="dish-card">
            <form>
                <div className="form-row">
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name"/>
                </div>
            </form>
        </div>
    );
};

export default DishForm;
```

This is a simple input field for a dish name. Then we are just calling the `useBodyScrollLock` function within `DishForm`.

We already have a `Toggle.js` file, so let's attach `DishForm` to that toggle:

```
const Toggle = () => {
    const [isToggled, setToggle] = useState(false)

    return (
        <div>
            <button onClick={() => setToggle(!isToggled)}>Toggle</button>
            { isToggled && <DishForm />}
        </div>
    )
}
```
Now, when you click on your button to 'toggle', your screen will freeze for the use to fill out the form.
