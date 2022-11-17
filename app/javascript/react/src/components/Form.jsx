import * as React from 'react'
import * as ReactDOM from 'react-dom'

const Form = () => {
  return (
    <form>
      <input type="text" placeholder="Search..." name="search" />
      <button type="submit"><i className="fa fa-search"></i></button>

      {/* <label htmlFor="name">Name</label>
      <input type="text" id="name" /> */}
    </form>
  );
}

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(<Form />, document.getElementById('htmlFor'))
// })

export default Form
