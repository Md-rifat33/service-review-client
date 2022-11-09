import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="text-center hero-content text-3xl font-bold">
        <div>
          <h1>The page is not found.</h1>
          <div className="mt-4">
            <Link to="/" className="btn btn-link text-2xl">
              Top Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page404
