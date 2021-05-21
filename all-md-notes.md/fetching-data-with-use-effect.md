# Fetching Data with useEffect

## How to fetch data using a hook

`useState` - allows us to set the state of the data
`useEffect` - is essentially your lifecycle method

So you would set up a typcial variable to store the incoming JSON data:

```
const [dishes, setDishes] = useState([]);
const fetchDishes = async () => {
    console.log('ran');
    const res = await fetch(
      'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes'
    );
    const data = await res.json();
    setDishes(data);
  }
  ```

  Then create the `useEffect` method:

  ```
  useEffect(() => {
    fetchDishes();
  }, [name]);
  ```
  Passing in a blank array means 'run this only on mount' It turns this into a `componentDidMount`.
  if you pass in an object within the array, it will only trigger a render when that object is updated.

  [GO HERE](https://stackblitz.com/edit/react-df5lb1) for a live working example.
  