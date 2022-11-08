import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const DetailsCard = () => {
  const details = useLoaderData()
  const { title, image, description } = details
  return (
    <div className="w-full">
      <div className="w-3/4 mx-auto">
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
      </div>
    </div>
  )
}

export default DetailsCard
