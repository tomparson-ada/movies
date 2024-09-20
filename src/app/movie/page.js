'use client'

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function MovieInfo() {
  const searchParams = useSearchParams()
  return searchParams.get('movie')
}

export default function Movie() {
  return (
      <>
        <h2>
          Viewing Movie:
          <Suspense>
            <MovieInfo />
          </Suspense>
        </h2>
      </>
  )
}