import React from 'react'
import { Link } from 'react-router-dom'
import recent1 from '../../api/Assets/img/post-sq-4.jpg'


const Footer = () => {
  return (
    <>
  <footer id="footer" className="footer shadow-sm">
  <div className="footer-content">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-4">
          <h3 className="footer-heading">About Stm conference</h3>
          <p className='h6'>Welcome to STM Conference, a leading organization dedicated to organizing and facilitating high-quality conferences and events all over the world.</p>
          <p><Link to="#" className="footer-link-more">Learn More</Link></p>
        </div>
        <div className="col-6 col-lg-2">
          <h3 className="footer-heading">Navigation</h3>
          <ul className="footer-links list-unstyled">
            <li><Link to="/"><i className="bi bi-chevron-right" /> Home</Link></li>
            <li><Link to="/blogs"><i className="bi bi-chevron-right" /> Blogs</Link></li>
            <li><Link to="/about"><i className="bi bi-chevron-right" /> About us</Link></li>
            <li><Link to="/contact"><i className="bi bi-chevron-right" /> Contact</Link></li>
          </ul>
        </div>
        <div className="col-6 col-lg-2">
          <h3 className="footer-heading">Categories</h3>
          <ul className="footer-links list-unstyled">
            <li><Link to="#"><i className="bi bi-chevron-right" /> Business</Link></li>
            <li><Link to="#"><i className="bi bi-chevron-right" /> Celebrity</Link></li>
            <li><Link to="#"><i className="bi bi-chevron-right" /> Startups</Link></li>
          </ul>
        </div>
        <div className="col-lg-4">
          <h3 className="footer-heading">Recent Posts</h3>
          <ul className="footer-links footer-blog-entry list-unstyled">
            <li>
              <Link to="/blog" className="d-flex align-items-center">
                <img src={recent1} alt='logo' className="img-fluid me-3" />
                <div>
                  <div className="post-meta d-block"><span className="date">Culture</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                  <span>5 Great Startup Tips for Female Founders</span>
                </div>
              </Link>
            </li>
       
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-legal">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          <hr/>
          <div className="copyright">
            © Copyright <strong><span>stmconference</span></strong>. All Rights Reserved
          </div>
       </div>
      </div>
    </div>
  </div>
</footer>


    
    </>
  )
}

export default Footer