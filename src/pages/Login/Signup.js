import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faLock,
  faPhotoFilm,
} from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'

const Signup = () => {
  const { createUser, user } = useContext(AuthContext)
  const navigate = useNavigate()
  const [name, setName] = useState(user?.displayName)
  console.log(name)
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    createUser(email, password, name)
      .then((result) => {
        const user = result.user
        console.log(user)
        form.reset()
        navigate('/')
      })
      .catch((error) => console.error(error))
  }

  const handleChange = (event) => {
    setName(event.target.value)
    console.log(name)
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
                <span className="label-text">Name</span>
              </label>
              <FaUser className="absolute top-24 ml-2" />
              <input
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered p-8"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute top-52 ml-2 "
              />
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered p-8 mt-1"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">PhotUrl</span>
              </label>
              <FontAwesomeIcon
                icon={faPhotoFilm}
                className="absolute mt-16 ml-2"
              />
              <input
                name="photourl"
                type="text"
                placeholder="photourl"
                className="input input-bordered p-8 ml-1"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <FontAwesomeIcon
                icon={faLock}
                className="absolute bottom-44 ml-3 "
              />
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered p-8 ml-1 mt-1"
                required
              />
            </div>
            <h3>
              Already have an account. Please
              <Link to="/login" className="btn btn-link mr-6">
                Log in
              </Link>
            </h3>
            <div className="form-control mt-2">
              <button className="btn btn-primary">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Signup
