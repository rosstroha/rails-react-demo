import React from 'react'
import { Card, Icon } from 'react-materialize'
import { MoviePosterHeader } from './MoviePosterHeader.js'
import { Trivia } from './Trivia.js'

export function MoviePoster(props){
  return (
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<MoviePosterHeader poster={props.poster} />}
      title={props.title}
      reveal={<p>{props.plot}</p>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      <Trivia trivia={props.trivia}/>
    </Card>
  )
}
