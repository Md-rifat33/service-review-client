import React from 'react'
import img from '../../assets/image5.jpg'
import { FaUser, FaPhone } from 'react-icons/fa'
import useTitle from '../../Hooks/useTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  useTitle('Contact')
  return (
    <div className="w-full mt-9 mb-12">
      <div
        className="hero h-96"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/shoes-repairing-service-flat-emblem-set-with-four-isolated-monochrome-vintage-style-logos-cobblers-workshop-vector-illustration_1284-75734.jpg?w=2000")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mb-5 text-5xl font-bold">Digital Cobbler</h1>
            <p className="mb-5">
              Cobbler: Cobblers are a fruit dessert baked with biscuit-style
              topping. It's called a cobbler because its top crust is not smooth
              like a pie crust but rather “cobbled” and coarse. It's usually
              dropped or spooned over the fruit, then baked. Individual fruit
              cobblers.Trades that engage in shoemaking have included the
              cordwainer's and cobbler's trades.
            </p>
          </div>
        </div>
      </div>
      <div className="w-3/4 mx-auto mt-10 rounded-lg">
        <h2 className="text-5xl font-bold text-center">Contact With Us</h2>
        <div className="hero mt-6">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <img src={img} alt="" className="rounded-lg ml-6" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-200">
              <div className="card-body">
                <div className="form-control flex">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <FaUser className="absolute top-24 ml-2" />
                  <input
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
                    placeholder="email"
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
                    className="textarea textarea-primary  p-8 w-full mt-3"
                    placeholder="message"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
