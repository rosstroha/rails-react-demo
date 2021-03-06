import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-materialize'
import { MoviePoster } from './MoviePoster.js'
import { MovieSearch } from './MovieSearch.js'
import { find } from 'lodash'

export function App (props) {
  const [imdbId, setImdbId] = useState('tt4158110')
  const [allMovies, setAllMovies] = useState([])

  const handleIdChange = (event) => {
    setImdbId(event.target.value)
  }

  const fetchMovie = async () => {
    if (!find(allMovies, { imdb_id: imdbId })) {
      let response = await fetch(`/movie/${imdbId}`)
      let movie = await response.json()

      setAllMovies(allMovies => [...allMovies, movie])
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetchMovie()
  }

  const posters = () => {
    return allMovies.map((movie, index) => {
      return (
        <Col s={4} key={index}>
          <MoviePoster movie={movie} />
        </Col>
      )
    })
  }

  const fetchAllMovies = async () => {
    let response = await fetch('/movies.json')
    let movies = await response.json()
    setAllMovies(movies)
  }

  useEffect(() => {
    fetchAllMovies()
  }, [imdbId])

  return (
    <React.Fragment>
      <Row>
        <Col s={12}>
          <MovieSearch onIdChange={handleIdChange} onSubmit={handleSubmit} imdbId={imdbId} />
        </Col>
      </Row>
      <Row>
        {posters()}
      </Row>
    </React.Fragment>
  )
}

