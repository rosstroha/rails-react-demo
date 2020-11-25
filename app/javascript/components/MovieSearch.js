import React, { useState } from 'react'
import { Row, Button, Icon, TextInput } from 'react-materialize'
import './MovieSearch.css'

export function MovieSearch (props) {
  return (
    <Row>
      <form className="search" onSubmit={props.onSubmit}>
        <TextInput
          value={props.imdbId}
          onChange={props.onIdChange}
        />
        <Button
          node="button"
          type="submit"
          waves="light"
        >
          Search
          <Icon right>
            search
          </Icon>
        </Button>
      </form>
    </Row>
  )
}
