import React from 'react'
import { Link } from 'react-router-dom'
// import { useAuth0 } from "@auth0/auth0-react";
// import LoginButton from '../Button/LoginButton';
import './Navbar.css'

const Navbar = () => {
  // const { isAuthenticated, user, logout } = useAuth0();
  
  return (
    <>
      <nav className="navbar navbar-expand-lg  sticky-top bg-light shadow  bg-white ">
        <div className="container ">
          <Link className="navbar-brand" to="/">
            <img src='https://stmconferences.com/wp-content/uploads/2023/03/stmconf..png' width={'150'} alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-10 mb-2 mb-lg-0 m-2">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li> <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/events">Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/venue">Venue</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle active" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Who we are
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/blogs">Blogs</Link></li>
                  <li><Link className="dropdown-item" to="/contact">Contact Us</Link></li>
                  <li><Link className="dropdown-item" to="/terms-and-conditions">Terms and Conditions</Link></li>
                  <li><Link className="dropdown-item" to="/publication-management">Publication Management</Link></li>
                  {/* <li><Link className="dropdown-item" to="/payment-details">Payment Details</Link></li> */}
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/faq">Faq</Link></li>
                </ul>
              </li>
             
            </ul>


            {/* {
              isAuthenticated ? (
                <div className="mt-2">
                  <Link to='/dashboard' ><button className="btn btn-outline-success" type="submit">Admin Pannel</button></Link>
                  <button className='btn btn-primary btn-lg mx-2' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                  </button>
              {isAuthenticated && <img src={user.picture} width={50} style={{borderRadius:'50%'}} alt={user.name}></img>}

                </div>

              ) : (

                <LoginButton />

              )
            } */}

          </div>

        </div>
      </nav>




    </>
  )
}

export default Navbar