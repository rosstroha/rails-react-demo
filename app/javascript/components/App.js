import React, { Component } from 'react'
import { Col, Row } from 'react-materialize'
import { MoviePoster } from './MoviePoster.js'

export class App extends Component {
  state = { imdbId: 'tt4158110' }

  render () {
    return (
      <Row>
        <Col>
          <MoviePoster imdbId={this.state.imdbId} />
        </Col>
      </Row>
    )
  }
}

