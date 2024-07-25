'use client'

import { useState, useEffect } from 'react';
import FaveMovieAdder from './components/FaveMovieAdder';

export default function Home() {

  const [watchList,setWatchList] = useState([]);

  useEffect(() => { 
    const data = localStorage.getItem('watchList');
   
    if (data) {
      setWatchList(JSON.parse(data));
    }
  },[])

  function saveToWatchList(movie) {
    const data = localStorage.getItem('watchList');
    const parsed = JSON.parse(data) || [];
    parsed.push(movie);
    localStorage.setItem('watchList',JSON.stringify(parsed));
    // setWatchList is in scope! setWatchList can update state of Home component
    setWatchList(parsed);
  }

  return (
      <>
      {/* pass saveToWatchList as a prop to FaveMovieAdder */}
      <FaveMovieAdder saveToWatchList={saveToWatchList} />
      {watchList.length ? <ul>{watchList.map(film => <li key={film}>{film}</li>)}</ul> : <p>No watch lists in local storage</p>}
      </>
  )
}