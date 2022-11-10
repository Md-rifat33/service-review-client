import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider'
import { FaUser } from 'react-icons/fa'

const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err))
    navigate('/')
  }
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Digital Cobbler
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="mr-6">
          <Link to="/" className="mr-14 hover:border-b-2 pb-1">
            Home
          </Link>
          <Link to="/about" className="mr-14 hover:border-b-2 pb-1">
            About
          </Link>
          <Link to="/contact" className="mr-14 hover:border-b-2 pb-1">
            Contact
          </Link>

          <Link to="/login" className="mr-14 hover:border-b-2 pb-1">
            Log in
          </Link>
          <Link to="/blogs" className="hover:border-b-2 pb-1">
            Blogs
          </Link>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="" />
              ) : (
                <FaUser className="mt-3 ml-3" />
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/" className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a className="" href="/">
                Settings
              </a>
            </li>
            <li>
              <button onClick={handleLogOut}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
