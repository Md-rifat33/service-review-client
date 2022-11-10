import React from 'react'
import { Link } from 'react-router-dom'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import useTitle from '../../../Hooks/useTitle'

const Card = ({ allService }) => {
  useTitle('Sevices')
  const { _id, title, image, description } = allService
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={image}>
            <img src={image} alt="Shoes" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 100) + '...'}</p>
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
