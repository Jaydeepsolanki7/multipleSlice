import React from 'react'
import { Counter } from '../features/counter/counter'
import User from '../features/users/user'

function Home() {
  return (
    <div>
      <h1>This is the home page which contains 2 slices</h1>
      <Counter/>
      <User/>
    </div>
  )
}

export default Home
