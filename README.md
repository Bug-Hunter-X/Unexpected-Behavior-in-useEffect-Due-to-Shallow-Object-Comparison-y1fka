# React useEffect Shallow Object Comparison Bug

This repository demonstrates a common bug in React's `useEffect` hook related to shallow object comparisons.  When comparing objects within the `useEffect` dependency array, a shallow comparison is performed. This means that React only checks if the object reference has changed, not the content of the object.  If the object's content changes but the reference remains the same, the `useEffect` hook will not trigger, leading to unexpected behavior.

The `bug.js` file showcases this issue. The `bugSolution.js` file provides a corrected version using JSON.stringify or a custom comparison function to ensure that the content of the object is compared.