import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import './Index.scss'
import { useAuthSelectors } from '../..//features/auth'

export default function Index() {

    // Select the auth readux context.
    const { isAuthenticated } = useAuthSelectors()

    // Check if user is Authenticated then redirect to another Route.
    if (isAuthenticated) {
        return <Navigate to='/home' />
    }

    return (
        <div className="inner-grid-2-2 index-component">
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
                    to="/login"
                    className='link'
                >
                    <span className='icon'>
                        <span className="material-symbols-outlined">
                            login
                        </span>
                    </span>
                    <span className='label'>
                        Login
                    </span>
                </Link>
                <Link
                    to="/signup"
                    className='link'
                >
                    <span className="icon">
                        <span className="material-symbols-outlined">
                            app_registration
                        </span>
                    </span>
                    <span className='label'>
                        signup
                    </span>
                </Link>
            </div>
        </div>
    )
}