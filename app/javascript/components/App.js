import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-materialize'
import { MoviePoster } from './MoviePoster.js'
import { MovieSearch } from './MovieSearch.js'

export function App (props) {
  const [imdbId, setImdbId] = useState('tt4158110')
  const [title, setTitle] = useState('')
  const [plot, setPlot] = useState('')
  const [poster, setPoster] = useState('')

  const handleIdChange = (event) => {
    setImdbId(event.target.value)
  }

  const fetchMovie = async () => {
    let response = await fetch(`/movie/${imdbId}`)
    let {title, poster, plot} = await response.json()
    setTitle(title)
    setPlot(plot)
    setPoster(poster)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetchMovie()
  }

  const posterComponent = () => {
    if (!title) { return null }
    return <MoviePoster poster={poster} title={title} plot={plot} />
  }

  return (
    <React.Fragment>
      <Row>
        <Col>
          <MovieSearch onIdChange={handleIdChange} onSubmit={handleSubmit} imdbId={imdbId} />
        </Col>
      </Row>
      <Row>
        <Col>
          {posterComponent()}
        </Col>
      </Row>
    </React.Fragment>
  )
}

