'use client'

import useWatchlist from '../hooks/useWatchlist';
import Link from 'next/link'

export default function WatchList() {
  const {saveToWatchList, watchList} = useWatchlist();
  
  return (
      <>
        <h2>My Watchlist</h2>
        {watchList.length ?
            <ul>{watchList.map(movieName => 
                <li key={movieName}>
                    <Link href={"/movie?movie=" + movieName}>{movieName}</Link>
                </li>
            )}</ul>
        : <p>No watch lists in local storage</p>}
      </>
  )
}