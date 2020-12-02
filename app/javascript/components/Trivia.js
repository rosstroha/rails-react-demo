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

  const triviaCollection = () => {
    if (!allTrivia.length) {
      return null
    }

    return (
      <Collection>
        {
          allTrivia.map(({id, body}) => {
            return (
              <CollectionItem key={id}>
                <blockquote>{body}</blockquote>
              </CollectionItem>
            )
          })
        }
      </Collection>
    )
  }

  return (
    <React.Fragment>
      { triviaCollection() || <h6>No trivia to display.</h6> }
      <Row>
        <AddTrivia movieId={props.movieId} addTriviaSubmit={onSubmit} />
      </Row>
    </React.Fragment>
  )
}

