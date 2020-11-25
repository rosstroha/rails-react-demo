import React, { useState, useEffect } from 'react'
import { Card, Icon } from 'react-materialize'
import { MoviePosterHeader } from './MoviePosterHeader.js'

export function MoviePoster(props){
  const [title, setTitle] = useState('')
  const [plot, setPlot] = useState('')
  const [poster, setPoster] = useState('')

  useEffect(async () => {
    let response = await fetch(`/movie/${props.imdbId}`)
    let {title, poster, plot} = await response.json()
    setTitle(title)
    setPlot(plot)
    setPoster(poster)
  })

  if(!title) {
    return null
  }

  return (
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<MoviePosterHeader poster={poster} />}
      title={title}
      reveal={<p>{plot}</p>}
      revealIcon={<Icon>more_vert</Icon>}
    >
    </Card>
  )
}
