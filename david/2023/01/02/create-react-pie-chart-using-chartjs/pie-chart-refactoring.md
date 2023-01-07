## Refactoring

To avoid looping multiple times during rendering, we are going to move the data extraction to the `useEffect` of the component (lines 18-32). 
The `useEffect` is called only when `props.genre` is changed (line 32).

The use effect loop *once* to the genres array and extract the *labels*, *counts*, and *colors* to their respective `state` arrays.

By adding the data to the state, it avoids the component to re-render every time, it will render only when the data changes.