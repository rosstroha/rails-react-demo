import React from 'react'
import { CardTitle } from 'react-materialize'

export function MoviePosterHeader (props) {
  return (
    <CardTitle
      image={props.poster}
      reveal
      waves="light"
    />
  )
}
