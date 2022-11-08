import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from './Card'

const ServicesCard = () => {
  const allServices = useLoaderData()
  return (
    <div className="w-full">
      <div className="w-3/4 mx-auto">
        <h1 className="text-center font-bold text-3xl mt-6 mb-6">
          Our All Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {allServices.map((allService) => (
            <Card key={allService._id} allService={allService} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesCard
