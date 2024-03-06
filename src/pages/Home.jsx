import React from 'react'
import { Counter } from '../features/counter/Counter'
import User from '../features/users/User'

function Home() {
  return (
    <div className="home-container">
      <h1 style={{textAlign:'center'}}>This is the home page which contains 2 slices</h1>
      <div className="row mt-4">
        <div className="col-6">
          <User />
        </div>
        <div className="col-6">
          <Counter />
        </div>
      </div>
    </div>
  );
}

export default Home;
