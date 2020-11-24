import React, { Component } from 'react'
import { Col, Row, Card, CardTitle, Icon } from 'react-materialize'

export class App extends Component {
  state = { title: null, poster: null, plot: null }

  async componentDidMount () {
    let response = await fetch('/movie')
    let {title, poster, plot} = await response.json()
    this.setState({title, poster, plot})
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

