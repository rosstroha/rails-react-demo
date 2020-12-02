import React, { useState } from 'react'
import { Icon, Textarea, Button } from 'react-materialize'
import './Trivia.css'

export function AddTrivia (props) {
  const [newTrivia, setNewTrivia] = useState('')

  const newTriviaOnChange = (event) => {
    setNewTrivia(event.target.value)
  }

  const onSubmit = (event) => {
    let response = props.addTriviaSubmit(event, newTrivia)

    if (response.ok) {
      setNewTrivia('')
    }
  }

  return (
    <form id={`add-${props.movieId}`} className='add-trivia' onSubmit={onSubmit}>
      <Textarea
        id={`textarea-add-${props.movieId}`}
        value={newTrivia}
        form={`add-${props.movieId}`}
        label='Add more trivia...'
        onChange={newTriviaOnChange}
        required
        validate
      />
        <Button
          flat
          node='button'
          type='submit'
          waves='light'
          icon={<Icon className='secondary-content'>add</Icon>}>
        </Button>
    </form>
  )
}
