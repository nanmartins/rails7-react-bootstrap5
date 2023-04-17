import * as React from 'react'
import * as ReactDOM from 'react-dom'

const Form = () => {
  return (
    <form className='form-body'>
      <input type="text" placeholder="Search..." name="search" className='search-body'/>
      <button type="submit" className='search-btn'><i className="search-icon fa fa-search"></i></button>

      {/* <label htmlFor="name">Name</label>
      <input type="text" id="name" /> */}
    </form>
  );
}

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(<Form />, document.getElementById('htmlFor'))
// })

export default Form
