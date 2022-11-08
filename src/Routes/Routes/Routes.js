import { createBrowserRouter } from 'react-router-dom'
import Main from '../../layout/Main'
import About from '../../pages/About/About'
import Blogs from '../../pages/Blogs/Blogs'
import Home from '../../pages/Home/Home/Home'
import Login from '../../pages/Login/Login'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/blogs', element: <Blogs /> },
      { path: '/about', element: <About /> },
      { path: '/login', element: <Login /> },
    ],
  },
])
