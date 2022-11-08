import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ allService }) => {
  const { _id, title, image, description } = allService
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link
            to={`/services/${_id}`}
            className="btn btn-primary font-bold text-slate-200"
          >
            Show Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
