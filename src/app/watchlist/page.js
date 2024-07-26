'use client'

import useWatchlist from '../hooks/useWatchlist';

export default function WatchList() {
  const {saveToWatchList, watchList} = useWatchlist();
  
  return (
      <>
        <h2>My Watchlist</h2>
        {watchList.length ? <ul>{watchList.map(film => <li key={film}>{film}</li>)}</ul> : <p>No watch lists in local storage</p>}
      </>
  )
}
