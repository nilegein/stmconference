import React from 'react'
import './Organizers.css'
import { Link } from 'react-router-dom'

const Organizers = () => {
  return (
    <>
  <div>
  <div className="container py-5">
    <div className="row text-center text-white">
      <div className="text-center mb-4">
        <p className="display-4 text-center">Organizers</p>
        <p className="lead mb-0 text-center">Behind every successful conference lies an efficient and dedicated organizing team. Our organizers are the architects of inspiration, meticulously planning and executing events that leave a lasting impact. From conceptualization to realization, our team strives to create seamless experiences that enable attendees to focus on what truly matters – the exchange of knowledge.</p>
       
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row text-center ">
      <div className="col-xl-3 col-sm-6 mb-5 ">
        <div className="bg-white rounded shadow-sm py-5 px-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded"><Link to='/organizer-detail'><img src="https://bootstrapmade.com/demo/templates/TheEvent/assets/img/speakers/1.jpg" alt='logo' width={120} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" /></Link>
          <h5 className="mb-0">Arjun</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><Link href="#" className="social-link"><i className="bi bi-facebook" /></Link></li>
            <li className="list-inline-item"><Link href="#" className="social-link"><i className="bi bi-twitter" /></Link></li>
            <li className="list-inline-item"><Link href="#" className="social-link"><i className="bi bi-instagram" /></Link></li>
            <li className="list-inline-item"><Link href="#" className="social-link"><i className="bi bi-linkedin" /></Link></li>
          </ul>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 mb-5 ">
        <div className="bg-white rounded shadow-sm py-5 px-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded"><Link to='/organizer-detail'><img src="https://bootstrapmade.com/demo/templates/TheEvent/assets/img/speakers/1.jpg" alt='logo' width={120} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" /></Link>
          <h5 className="mb-0">Arjun</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><Link href="#" className="social-link"><i className="bi bi-facebook" /></Link></li>
            <li className="list-inline-item"><Link href="#" className="social-link"><i className="bi bi-twitter" /></Link></li>
            <li className="list-inline-item"><Link href="#" className="social-link"><i className="bi bi-instagram" /></Link></li>
            <li className="list-inline-item"><Link href="#" className="social-link"><i className="bi bi-linkedin" /></Link></li>
          </ul>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 mb-5 ">
        <div className="bg-white rounded shadow-sm py-5 px-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded"><Link to='/organizer-detail'><img src="https://bootstrapmade.com/demo/templates/TheEvent/assets/img/speakers/1.jpg" alt='logo' width={120} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" /></Link>
          <h5 className="mb-0">Arjun</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><Link href="#" className="social-link"><i className="bi bi-facebook" /></Link></li>
            <li className="list-inline-item"><Link href="#" className="social-link"><i className="bi bi-twitter" /></Link></li>
            <li className="list-inline-item"><Link href="#" className="social-link"><i className="bi bi-instagram" /></Link></li>
            <li className="list-inline-item"><Link href="#" className="social-link"><i className="bi bi-linkedin" /></Link></li>
          </ul>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 mb-5 ">
        <div className="bg-white rounded shadow-sm py-5 px-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded"><Link to='/organizer-detail'><img src="https://bootstrapmade.com/demo/templates/TheEvent/assets/img/speakers/1.jpg" alt='logo' width={120} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" /></Link>
          <h5 className="mb-0">Arjun</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><Link href="#" className="social-link"><i className="bi bi-facebook" /></Link></li>
            <li className="list-inline-item"><Link href="#" className="social-link"><i className="bi bi-twitter" /></Link></li>
            <li className="list-inline-item"><Link href="#" className="social-link"><i className="bi bi-instagram" /></Link></li>
            <li className="list-inline-item"><Link href="#" className="social-link"><i className="bi bi-linkedin" /></Link></li>
          </ul>
        </div>
      </div>
     
  
    </div>
  </div>
</div>

    
    
    </>
  )
}

export default Organizers