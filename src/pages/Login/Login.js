import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'
import { GoogleAuthProvider } from 'firebase/auth'
import useTitle from '../../Hooks/useTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
  useTitle('Log in')
  const { providerLogin, signIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const googleProvider = new GoogleAuthProvider()

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user
        console.log(user)
        navigate('/')
      })
      .catch((err) => console.error(err))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    signIn(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
        form.reset()
        navigate('/')
      })
      .catch((err) => console.error(err))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="hero w-3/4 mx-auto rounded-lg my-6 p-32 bg-base-200"
    >
      <div className="hero-content w-full flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0   shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute top-24 ml-2"
              />
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered p-8"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <FontAwesomeIcon icon={faLock} className="absolute top-52 ml-2" />
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered p-8 mt-1"
                required
              />
            </div>
            <h3>You can also sign in with :</h3>
            <div className="flex w-full mt-3">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-dark w-full"
              >
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
