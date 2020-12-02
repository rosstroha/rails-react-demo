import React, { useState } from 'react'
import { Row, Card, Icon, Collection, CollectionItem, Textarea, Button } from 'react-materialize'
import { MoviePosterHeader } from './MoviePosterHeader.js'
import './Trivia.css'

export function MoviePoster(props){
  const [newTrivia, setNewTrivia] = useState('')

  const triviaComponent = () => {
    if(!props.trivia) {
      return null
    }

    return props.trivia.map(({id, body}) => <CollectionItem key={id}>{body}</CollectionItem>)
  }

  const newTriviaOnChange = (event) => {
    setNewTrivia(event.target.value)
  }

  return (
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<MoviePosterHeader poster={props.poster} />}
      title={props.title}
      reveal={<p>{props.plot}</p>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      <Collection>
        { triviaComponent() }
      </Collection>
      <Row className="add-trivia">
        <Textarea placeholder="Add more trivia..." onChange={setNewTrivia} />
        <Button node="button" type="submit" waves="light" floating icon={<Icon right>add</Icon>}></Button>
      </Row>
    </Card>
  )
}
