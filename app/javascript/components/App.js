import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-materialize'
import { MoviePoster } from './MoviePoster.js'
import { MovieSearch } from './MovieSearch.js'
import { find } from 'lodash'

export function App (props) {
  const [imdbId, setImdbId] = useState('tt4158110')
  const [title, setTitle] = useState('')
  const [plot, setPlot] = useState('')
  const [poster, setPoster] = useState('')
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

  const posterComponent = ({poster, title, plot}) => {
    return (
      <Col>
        <MoviePoster poster={poster} title={title} plot={plot} />
      </Col>
    )
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
        <Col>
          <MovieSearch onIdChange={handleIdChange} onSubmit={handleSubmit} imdbId={imdbId} />
        </Col>
      </Row>
      <Row>
        {allMovies.map(movie => posterComponent(movie))}
      </Row>
    </React.Fragment>
  )
}

