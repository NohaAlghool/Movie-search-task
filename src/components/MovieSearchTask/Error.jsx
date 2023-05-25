import React from 'react'
import { MyContext } from './MoviContext'

function Error() {
  const isError = MyContext()
  return (
    <div>{isError}</div>
  )
}

export default Error