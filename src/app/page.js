// By default components are Server Components, meaning they are rendered on the server
// We need this component to be a Client Component, meaning it is rendered in the browser, so we can access LocalStorage in the browser
// To do this, we use 'use client' at the top of the file

'use client'

import { useState, useEffect } from 'react';
import FaveMovieAdder from './components/FaveMovieAdder';

export default function Home() {

  // Below, we use localStorage in the browser to store key-value pairs of data in the user's browser
  // More info on localStorage: https://www.w3schools.com/jsref/prop_win_localstorage.asp
  // How to view localStorage data in Chrome Web Inspector: https://developer.chrome.com/docs/devtools/storage/localstorage/

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
    setWatchList(oldWatchlist => [
      // This adds the previous contents of watchlist to our new array
      ...oldWatchlist,
      // This adds our new movie
      movie
    ])
  }

  return (
      <>
        {/* Pass saveToWatchList as a prop to FaveMovieAdder */}
        <FaveMovieAdder saveToWatchList={saveToWatchList} />
        {/* We need to specify a key whenever we're rendering multiple components or HTML elements. */}
        {/* This lets React track which `li` element maps to which item in the `watchlist` array, so that it can update only the items that have changed */}
        {watchList.length ? <ul>{watchList.map(film => <li key={film}>{film}</li>)}</ul> : <p>No watch lists in local storage</p>}
      </>
  )
}
