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
  // https://react.dev/reference/react/useState
  const [watchList,setWatchList] = useState([]);

  // useEffect is a React hook that lets us specify code that is run immediately after rendering a component
  // (as a 'side effect' of the component being rendered)
  // this lets us utilise data from the browser using localStorage only after the component has fully loaded
  // https://react.dev/reference/react/useEffect
  useEffect(() => { 
    const data = localStorage.getItem('watchList');
   
    if (data) {
      setWatchList(JSON.parse(data));
    }
  },[])

  // Here, we specify a function which saves a movie to our watchlist variable, and stores the new value in localStorage
  function saveToWatchList(movie) {
    // Get the current watchlist from localStorage
    const data = localStorage.getItem('watchList')
    // Turn this JSON string into an object (it will be an array) or use an empty array otherwise
    const parsed = JSON.parse(data) || []
    // Add our new movie onto the array
    parsed.push(movie)
    // Update localStorage with a JSON encoded string of the new, parsed, object
    localStorage.setItem('watchList',JSON.stringify(parsed))
    // We can now use setWatchList, the 'setter' function given to us by useState, since this is in scope in this component
    setWatchList(parsed)
  }

  return (
      <>
        {/* Pass saveToWatchList as a prop to FaveMovieAdder */}
        <FaveMovieAdder saveToWatchList={saveToWatchList} />
        {watchList.length ? <ul>{watchList.map(film => <li key={film}>{film}</li>)}</ul> : <p>No watch lists in local storage</p>}
      </>
  )
}