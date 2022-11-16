import * as React from 'react'
import * as ReactDOM from 'react-dom'

const Form = () => {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
    </form>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Form />, document.getElementById('htmlFor'))
})

export default Form
