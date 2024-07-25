import { useState, useEffect } from 'react';

export function useWatchlist() {
  // useState is a React hook that lets us keep the value of variables "in state", meaning
  // any changes are synced across different places the variable is used
  // useState returns 2 things - a variable and a 'setter' function that we use to change the value
  // of the variable later
  // When we first load the component, we will load the state with the contents of localStorage
  // https://react.dev/reference/react/useState
  const [watchList,setWatchList] = useState(localStorage.getItem('watchlist') ?? []);

  // useEffect is a React hook that lets us specify code that is run immediately after rendering a component
  // (as a 'side effect' of the component being rendered)
  // We can restrict how often it is run by passing an array of variables to "watch" in the second parameter
  // Here, we're watching whenever the `watchlist` changes and then updating the localStorage to match
  // https://react.dev/reference/react/useEffect
  useEffect(() => { 
    localStorage.setItem('watchList',JSON.stringify(watchlist))
  },[watchlist])

  // Here, we specify a function which saves a movie to our watchlist variable, and stores the new value in the state
  function saveToWatchList(movie) {
    // We can now use setWatchList, the 'setter' function given to us by useState, since this is in scope in this component
    // setWatchlist accepts either a new value, or a callback which lets us access the current contents of watchlist
    // You might be tempted to do `setWatchlist([...watchlist, movie])`, but state isn't always update immediately 
    // and `watchlist` could contain an old version. So by using the callback, we ensure that we're using a fresh version of `watchlist`
    // *You should always use a callback when your new state needs to reference the value of the old state*
    // https://dev.to/csituma/when-do-you-use-setstate-with-a-callback-1f3g - simple explanation of when to use callbacks with setState
    // https://www.dhiwise.com/post/guide-to-state-management-with-react-setstate-callback - advanced explanation of when to use callbacks
    setWatchList(oldWatchlist => ([
      // This adds the previous contents of watchlist to our new array
      ...oldWatchlist,
      // This adds our new movie
      movie
    ]))
  }

  return {
    saveToWatchList,
    watchlist,
  };
}
