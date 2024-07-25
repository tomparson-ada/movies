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
    localStorage.setItem('watchList',JSON.stringify(['Toy Story','Jurassic Park','Forrest Gump']))
  }


  return (
      <>
      {watchList.length ? <ul>{watchList.map(film => <li key={film}>{film}</li>)}</ul> : <p>No watch lists in local storage</p>}
      <button onClick={saveWatchList}>Save watch list!</button>
      </>
  )
}