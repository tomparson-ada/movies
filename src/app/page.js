// By default components are Server Components, meaning they are rendered on the server
// We need this component to be a Client Component, meaning it is rendered in the browser, so we can access LocalStorage in the browser
// To do this, we use 'use client' at the top of the file

'use client'

import FaveMovieAdder from './components/FaveMovieAdder';
import useWatchlist from './hooks/useWatchlist';

export default function Home() {
  const {saveToWatchList, watchList} = useWatchlist();
  
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