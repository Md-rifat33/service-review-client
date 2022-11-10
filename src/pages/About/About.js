import React from 'react'
import img1 from '../../assets/image1.jpg'
import img2 from '../../assets/image2.jpg'
import img3 from '../../assets/image3.jpg'
import img4 from '../../assets/image4.jpg'
import useTitle from '../../Hooks/useTitle'

const About = () => {
  useTitle('About')
  return (
    <div className="w-full mt-8">
      <div className="w-3/4 mx-auto">
        <div className="text-center mb-9">
          <h2 className="text-1xl font-semibold">I Love What I do</h2>
          <p>
            A cobbler is someone who fixes shoes. A cobbler is also a type of
            fruit pie. Context is everything with this word! If you give a pie a
            broken shoe, don’t expect results.
          </p>
        </div>
        <div>
          {/* start : Carousel */}
          <div className="mb-20 my-36">
            <div className="carousel h-96 rounded-lg w-3/4 mx-auto">
              <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" alt="" />
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
                <img src={img2} className="w-full" alt="" />
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
                <img src={img4} className="w-full" alt="" />
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
          </div>
          {/* end : carousel */}
        </div>
      </div>
    </div>
  )
}

export default About
