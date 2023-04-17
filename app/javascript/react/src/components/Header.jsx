import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Form from './Form'

// function oriented component(ES6)
const Header = () => {
  return (
    <div className='header container-fluid'>
      <div>
        <a href="/">
          <img src={window.logo} className="header-logo"/>
        </a>
      </div>

      <Form />

      <div className="header-icons">
        <a href="/">
          {/* <img src={window.cart} className="header-cart-icon"/> */}
          <i className="header-icon bi-person"></i>
        </a>

        <a href="/">
          <i className="header-icon bi-cart"></i>
        </a>
      </div>

    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Header />, document.getElementById('header'))
})

export default Header
