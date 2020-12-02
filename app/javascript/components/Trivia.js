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

  const onSubmit = async (event) => {
    event.preventDefault()
    const body = JSON.stringify({
      movie_id: props.movieId,
      body: newTrivia
    })

    const csrfToken = document.querySelector("[name='csrf-token']").content

    let response = await fetch(
      '/trivia.json',
      {
        method: 'POST',
        body,
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken
        }
      }
    )
    let addedTrivia = await response.json()

  }

  const newTriviaOnChange = (event) => {
    setNewTrivia(event.target.value)
  }

  return (
    <React.Fragment>
      <Collection>
        { triviaComponent() }
      </Collection>
      <Row>
        <form id="add" className="add-trivia" onSubmit={onSubmit}>
          <Textarea form="add" required validate label="Add more trivia..." onChange={newTriviaOnChange} />
          <Button flat node="button" type="submit" waves="light" icon={<Icon className="secondary-content">add</Icon>}></Button>
        </form>
      </Row>
    </React.Fragment>
  )
}

