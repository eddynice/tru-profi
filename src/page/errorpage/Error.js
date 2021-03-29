import React from 'react'
import {Link} from "react-router-dom"

export default function Error() {
    return (
        <div className="pt-4 ">
            <section className="content">
  <div className="error-page pt-4">
    <h2 className="headline text-warning "> 404</h2>
    <div className="error-content">
      <h3><i className="fas fa-exclamation-triangle text-warning" /> Oops! Page not found.</h3>
      <p>
        We could not find the page you were looking for.
        Meanwhile, you may <Link to="/timeline">return to timeline</Link> or try using the search form.
      </p>
     
    </div>
    {/* /.error-content */}
  </div>
  {/* /.error-page */}
</section>

        </div>
    )
}
