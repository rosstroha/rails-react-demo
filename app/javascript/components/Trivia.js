import React, { useState } from 'react'
import { Row, Collection, CollectionItem } from 'react-materialize'
import { AddTrivia } from './AddTrivia.js'

export function Trivia (props) {
  const [allTrivia, setAllTrivia] = useState(props.trivia || [])

  const onSubmit = async (event, newTrivia) => {
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
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        }
      }
    )
    let addedTrivia = await response.json()
    if (response.ok) {
      setAllTrivia(allTrivia => [...allTrivia, addedTrivia])
    }
    return response
  }

  const triviaComponent = () => {
    if (!allTrivia.length) {
      return null
    }

    return allTrivia.map(({id, body}) => <CollectionItem key={id}>{body}</CollectionItem>)
  }

  return (
    <React.Fragment>
      <Collection>
        { triviaComponent() }
      </Collection>
      <Row>
        <AddTrivia movieId={props.movieId} addTriviaSubmit={onSubmit} />
      </Row>
    </React.Fragment>
  )
}

