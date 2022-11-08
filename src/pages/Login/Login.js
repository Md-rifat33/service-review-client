import React from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'

const Login = () => {
  return (
    <form className="hero w-3/4 mx-auto rounded-lg my-6 p-32 bg-base-200">
      <div className="hero-content w-full flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0   shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <h3>You can also sign in with :</h3>
            <div className="flex w-full mt-3">
              <button className="btn btn-dark w-full">
                <FaGoogle className="mr-3" />
                Sign in with Google
              </button>
            </div>
            <h3>
              Don't have an account. Please
              <Link to="/signup" className="btn btn-link mr-6">
                Sign up
              </Link>
            </h3>
            <div className="form-control mt-2">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Login
