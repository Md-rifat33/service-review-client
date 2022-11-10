import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import img1 from '../../../assets/image1.jpg'
import img2 from '../../../assets/image2.jpg'
import img3 from '../../../assets/image3.jpg'
import img4 from '../../../assets/image4.jpg'
import LimitedCard from '../../Cards/ServiceLimitedCard/LimitedCard'
import useTitle from '../../../Hooks/useTitle'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Home = () => {
  useTitle('Home')
  const services = useLoaderData()
  return (
    <div className="w-full">
      <div
        className="hero min-h-[60vh] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("https://media.istockphoto.com/id/1218015625/vector/cobbler-set-professional-equipments-for-shoe-repair-shoemaker-or-bootmaker-cream-hammer-awl.jpg?s=612x612&w=is&k=20&c=E1jY4i0aRv3_3sUCSUqn4WLHG0Xdbicw-kyZoYM2jiE=")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-5xl font-bold">Digital Cobbler</h1>
            <p className="mb-5 text-xl">
              A shoe cobbler is a person who mends and repairs shoes. The
              profession has been around for most of human history. Some people
              assume that cobblers and shoemakers (called cordwainers in
              England) are the same profession, and while that may be true
              today, it wasn't always so.Cobblers are people who make and mend
              shoes and boots by replacing worn soles and heels by either sewing
              or gluing on the new pieces. Cobblers measure customers for fit,
              and discuss with them the type of footwear to be made,
              recommending details such as leather quality.
            </p>

            <button className="btn btn-primary w-64 font-bold text-slate-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="w-3/4 mx-auto">
        <h1 className="text-center mt-6 text-3xl font-bold">
          Welcome to Digital Cobbler
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
        <div className="w-full flex justify-center mb-9 mt-16">
          <Link
            className="btn btn-primary w-80 h-14 text-lg text-slate-200 font-bold"
            to="/services"
          >
            See All
          </Link>
        </div>
      </div>
      <div className=" mt-16">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          className="h-[600px]  w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>Company Address.</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default Home
