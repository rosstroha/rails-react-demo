import React, { useState } from 'react'
import { Row, Icon, Collection, CollectionItem, Textarea, Button } from 'react-materialize'
import './Trivia.css'

export function Trivia (props) {
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
    <React.Fragment>
      <Collection>
        { triviaComponent() }
      </Collection>
      <Row className="add-trivia">
        <Textarea placeholder="Add more trivia..." onChange={setNewTrivia} />
        <Button node="button" type="submit" waves="light" floating icon={<Icon right>add</Icon>}></Button>
      </Row>
    </React.Fragment>
  )
}

