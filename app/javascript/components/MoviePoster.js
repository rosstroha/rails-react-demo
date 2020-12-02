import React from 'react'
import { Card, Icon, Collection, CollectiomItem } from 'react-materialize'
import { MoviePosterHeader } from './MoviePosterHeader.js'

export function MoviePoster(props){
  const triviaComponent = () => {
    if(!props.trivia) {
      return null
    }
    return props.trivia.map(({id, body}) => <CollectionItem key={id}>{body}</CollectionItem>)
  }
  return (
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<MoviePosterHeader poster={props.poster} />}
      title={props.title}
      reveal={<p>{props.plot}</p>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      <Collection header='Trivia'>
        { triviaComponent() }
      </Collection>
    </Card>
  )
}
