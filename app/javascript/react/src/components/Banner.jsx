import * as React from 'react'
import * as ReactDOM from 'react-dom'


const Banner = () => {
  return (
    <div className="img-container">
      <img src="https://images.unsplash.com/photo-1668613965090-167f9263906f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80" className="banner-img" />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Banner />, document.getElementById('banner'))
})

export default Banner
