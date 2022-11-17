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
      <div className="cart-icon">
      <a href="/">
          <img src={window.cart} className="header-cart-icon"/>
        </a>
      </div>

    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Header />, document.getElementById('header'))
})

export default Header
