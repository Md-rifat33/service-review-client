import { createBrowserRouter } from 'react-router-dom'
import Main from '../../layout/Main'
import About from '../../pages/About/About'
import Blogs from '../../pages/Blogs/Blogs'
import DetailsCard from '../../pages/Cards/DetailsCard/DetailsCard'
import ServicesCard from '../../pages/Cards/ServicesCard/ServicesCard'
import Contact from '../../pages/Contact/Contact'
import Home from '../../pages/Home/Home/Home'
import Login from '../../pages/Login/Login'
import Signup from '../../pages/Login/Signup'
import Page404 from '../../pages/Page404/Page404'
import Reviews from '../../pages/Reviews/Reviews'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch(`https://backend-three-cyan.vercel.app/`),
      },
      { path: '/blogs', element: <Blogs /> },
      { path: '/about', element: <About /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: '/contact', element: <Contact /> },
      {
        path: '/services',
        element: <ServicesCard />,
        loader: () => fetch(`https://backend-three-cyan.vercel.app/services`),
      },
      {
        path: '/services/:id',
        element: <DetailsCard />,
        loader: ({ params }) =>
          fetch(`https://backend-three-cyan.vercel.app/services/${params.id}`),
      },
      {
        path: '/services/:id/reviews',
        element: <Reviews />,
      },
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
])
