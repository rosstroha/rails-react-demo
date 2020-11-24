import React, { Component } from 'react'
import { Col, Row, Card, CardTitle, Icon } from 'react-materialize'

export class App extends Component {
  state = { title: null, poster: null, plot: null }

  async componentDidMount () {
    let response = await fetch('/movie')
    let movie = await response.json()
    this.setState({title: movie.Title, poster: movie.Poster, plot: movie.Plot})
  }

  header = () => {
    return (
      <CardTitle
        image={this.state.poster}
        reveal
        waves="light"
      />
    )
  }

  render () {
    if(!this.state.title) { return null }

    return (
      <Row>
        <Col>
          <Card
            closeIcon={<Icon>close</Icon>}
            header={this.header()}
            title={this.state.title}
            reveal={<p>{this.state.plot}</p>}
            revealIcon={<Icon>more_vert</Icon>}
          >
          </Card>
        </Col>
      </Row>
    )
  }
}

