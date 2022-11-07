import { createBrowserRouter } from 'react-router-dom'
import Main from '../../layout/Main'
import Blogs from '../../pages/Blogs/Blogs'
import Home from '../../pages/Home/Home/Home'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/blogs', element: <Blogs /> },
    ],
  },
])
