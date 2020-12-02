import React, { useState } from 'react'
import { Row, Button, Icon, TextInput } from 'react-materialize'
import './MovieSearch.css'

export function MovieSearch (props) {
  return (
    <form id="search" className="search" onSubmit={props.onSubmit}>
      <TextInput
        form="search"
        value={props.imdbId}
        onChange={props.onIdChange}
        label="Search with IMDB ID..."
        required
        validate
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
  )
}
