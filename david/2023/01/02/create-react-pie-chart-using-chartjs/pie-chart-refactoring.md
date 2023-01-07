## Refactoring

To avoid looping multiple times during rendering, we will move the data extraction to the `useEffect` of the component (lines 18-32). 
The `useEffect` is called only when `props.genre` is changed (line 32).

The use effect loop *once* to the genres array and extract the *labels*, *counts*, and *colors* to their respective `state` arrays.

Adding the data to the state, it avoids the component re-render every time. It will render only when the data changes.

## Debugging

Just to make it clear for you, this how the data looks like for each one of those states:

```javascript
labels = ['Comedy', 'Action', 'Romance', 'Drama', 'Horror', 'Science Fiction']
counts =  [29, 20, 16, 14, 11, 10]
colors = ['red', 'blue', 'green', 'yellow', 'orange', 'gray']
```

They all must have the same number of elements, and the order of the array should be the same for all of them.