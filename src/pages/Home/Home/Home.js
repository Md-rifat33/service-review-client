import React from 'react'
import { useLoaderData } from 'react-router-dom'
import img1 from '../../../assets/image1.jpg'
import img2 from '../../../assets/image2.jpg'
import img3 from '../../../assets/image3.jpg'
import img4 from '../../../assets/image4.jpg'
import LimitedCard from '../../Cards/ServiceLimitedCard/LimitedCard'

const Home = () => {
  const services = useLoaderData()
  return (
    <div className="w-full">
      <div className="w-3/4 mx-auto">
        <h1 className="text-3xl font-bold text-center mt-5">
          Welcome to Cobbler Shop
        </h1>
        {/* start:  Carousel  */}
        <div className="carousel  rounded-lg mx-auto h-96 mt-10 mb-12 ">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={img1} alt="" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} alt="" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} alt="" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={img4} alt="" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        {/* end: carousel */}
        <h1 className="text-4xl font-bold text-center">Our Services</h1>
        {/* start : service section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-9">
          {services.map((service) => (
            <LimitedCard key={service._id} service={service} />
          ))}
        </div>
        {/* end : service section */}
      </div>
    </div>
  )
}

export default Home
