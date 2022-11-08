import React from 'react'

const LimitedCard = ({ service }) => {
  const { title, image, description } = service
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary font-bold text-slate-200">
            Show Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default LimitedCard
