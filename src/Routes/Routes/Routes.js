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

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch(`http://localhost:5000/`),
      },
      { path: '/blogs', element: <Blogs /> },
      { path: '/about', element: <About /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: '/contact', element: <Contact /> },
      {
        path: '/services',
        element: <ServicesCard />,
        loader: () => fetch(`http://localhost:5000/services`),
      },
      {
        path: '/services/:id',
        element: <DetailsCard />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
])
