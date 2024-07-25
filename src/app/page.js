'use client'

import { useState, useEffect } from 'react';

export default function Home() {

  const [watchList,setWatchList] = useState([]);

  useEffect(() => { 
    const data = localStorage.getItem('watchList');
   
    if (data) {
      setWatchList(JSON.parse(data));
    }
  },[])

  function saveWatchList() {
    const faveMovies = ['Toy Story','Jurassic Park','Forrest Gump'];
    localStorage.setItem('watchList',JSON.stringify(faveMovies));
    setWatchList(faveMovies);
  }


  return (
      <>
      {watchList.length ? <ul>{watchList.map(film => <li key={film}>{film}</li>)}</ul> : <p>No watch lists in local storage</p>}
      <button onClick={saveWatchList}>Save watch list!</button>
      </>
  )
}