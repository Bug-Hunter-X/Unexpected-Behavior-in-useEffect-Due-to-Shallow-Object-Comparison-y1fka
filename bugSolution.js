```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [someObject, setSomeObject] = useState({});

  useEffect(() => {
    // Correct: Compare object content using JSON.stringify
    if (JSON.stringify(someObject) !== JSON.stringify(previousSomeObject)) {
      console.log('Object content changed!');
    }
  }, [someObject]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```