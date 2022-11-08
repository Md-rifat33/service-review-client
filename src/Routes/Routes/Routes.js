import { createBrowserRouter } from 'react-router-dom'
import Main from '../../layout/Main'
import About from '../../pages/About/About'
import Blogs from '../../pages/Blogs/Blogs'
import Contact from '../../pages/Contact/Contact'
import Home from '../../pages/Home/Home/Home'
import Login from '../../pages/Login/Login'
import Signup from '../../pages/Login/Signup'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/blogs', element: <Blogs /> },
      { path: '/about', element: <About /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
])
