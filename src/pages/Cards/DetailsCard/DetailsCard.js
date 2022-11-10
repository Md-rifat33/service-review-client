import React, { useContext } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { FaUser, FaPhone } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider'

const DetailsCard = () => {
  const details = useLoaderData()
  const { title, image, description, _id } = details
  const { user } = useContext(AuthContext)

  const handleReview = (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = user?.email || alert('unregistered')
    const phone = form.phone.value
    const message = form.message.value
    const order = {
      service: _id,
    }
  }
  return (
    <div className="w-full">
      <div className="w-3/4 mx-auto">
        {/* start : card */}
        <h1 className="text-3xl font-bold text-center mt-6 mb-9">{title}</h1>
        <img
          src={image}
          className="w-3/4 mx-auto h-full rounded-2xl mt-12 mb-10"
          alt=""
        />
        <p className="text-center mb-6 w-3/4 mx-auto text-2xl leading-10">
          {description}
        </p>
        <div className="w-3/4 mx-auto text-center">
          <Link
            to="/services"
            className="btn btn-primary font-bold text-slate-200 w-80 h-14 mb-9 mt-3"
          >
            Back
          </Link>
        </div>
        {/* end : card */}
        {/* start : review add form */}
        <form className="w-full">
          <div className="w-3/4 mx-auto flex justify-center">
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-200">
              <div className="card-body">
                <div className="form-control flex">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <FaUser className="absolute top-24 ml-2" />
                  <input
                    name="name"
                    type="text"
                    placeholder="name"
                    className="input input-bordered p-8"
                  />
                </div>
                <div className="form-control flex">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute bottom-96 top-52 ml-2"
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    defaultValue={user?.email}
                    readOnly
                    className="input input-bordered p-8 mt-1"
                  />
                </div>
                <div className="form-control flex">
                  <label className="label">
                    <span className="label-text">Number</span>
                  </label>
                  <FaPhone className="absolute top-80 ml-2" />
                  <input
                    type="number"
                    name="number"
                    placeholder="number"
                    className="input input-bordered p-8"
                  />
                </div>
                <div className="text-center flex">
                  <FontAwesomeIcon
                    icon={faMessage}
                    className="absolute bottom-44 ml-2"
                  />
                  <textarea
                    name="message"
                    className="textarea textarea-primary  p-8 w-full mt-3"
                    placeholder="message"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <Link to={`/services/${_id}/reviews`}>
                    <input className="btn btn-primary w-full" value="submit" />
                  </Link>
                </div>
              </div>
            </div>
            {/* end : review add form */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default DetailsCard
