import React from 'react'
import './Index.css'
import { Link } from 'react-router-dom'
import { LazyIconImport } from 'lazyUtils/lazyIconImport'

const Index: React.FC = (props) => {
  return (
    <div className='inner-grid-1-1 grid-12 index'>
      <div className="inner-grid-2-2 index-page">
        {/* Metadata settings */}
        <figure className="logo-container">
          <img src="logo512.png" alt="logo512.png" />
        </figure>
        <h1>Welcome to building robust UI's</h1>
        <p>
          This boilerplate includes all the necessary setup for building robust UI's
          using React With Django and Django Rest Framework.
        </p>
        <div className="buttons-conatiner">
          <Link
            to="/signin"
            className='link'
          >
            <span className='icon'>
              <LazyIconImport icon='signin' />
            </span>
            <span className='label'>
              sign in
            </span>
          </Link>
          <Link
            to="/signup"
            className='link'
          >
            <span className="icon">
              <LazyIconImport icon='signup' />
            </span>
            <span className='label'>
              sign up
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Index
