import * as React from 'react'
import * as ReactDOM from 'react-dom'

// function oriented component(ES6)
const Welcome = () => {
  return (
    <div className='container'>
      <h1 className="title bg-dark text-white rounded p-3 text-center">Rails 7 with React!</h1>
      <p className='subtitle'>from ./react/src/components/Welcome.jsx</p>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Welcome />, document.getElementById('welcome'))
})

export default Welcome
