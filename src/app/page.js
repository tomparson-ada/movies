'use client'

import { useState, useEffect } from 'react';

export default function Home() {

  let [watchlist,setWatchlist] = useState(() => {
    return localStorage.getItem('watchlist') ?? [
        'The Dark Knight',
        'Barbie',
        'Toy Story 3'
    ]
  })

  useEffect((watchlist) => {
      localStorage.setItem('watchlist', watchlist)
  },[watchlist])

  return (
      <>
      {watchlist}
      </>
  )
}