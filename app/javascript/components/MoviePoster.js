import React from 'react'
import { Card, Icon } from 'react-materialize'
import { MoviePosterHeader } from './MoviePosterHeader.js'
import { Trivia } from './Trivia.js'

export function MoviePoster(props){
  let { title, poster, plot, trivia, id } = props.movie

  return (
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<MoviePosterHeader poster={poster} />}
      title={title}
      reveal={<Trivia trivia={trivia} movieId={id} />}
      revealIcon={<Icon>more_vert</Icon>}
    >
      <p>{plot}</p>
    </Card>
  )
}
