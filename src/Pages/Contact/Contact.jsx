import React, {useRef} from 'react'
import { useState } from 'react';
import './contact.css'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [isMessageSent, setMessageSent] = useState('true');

 
  const notify = () => {
    const messageSent = isMessageSent; 
    if (messageSent) {
      setMessageSent(true);
      toast.success('Message sent successfully');
    } else {
      setMessageSent(false);
      toast.error('Message not sent');
    }
  };
 
         

  const form  = useRef()


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ylbviqe', 'template_2aqq6ai', form.current, 'vVi8IRnGxGIlvDhR_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <>

<div className="container">
<section id="contact" className="contact mb-5">
    <div className="aos-init aos-animate" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-12 text-center mb-5">
          <h1 className="page-title">Contact us</h1>
        </div>
      </div>
      <div className="row gy-4">
      <div className="col-md">
          <div className="info-item">
            <i className="bi bi-envelope" />
            <h3>Email</h3>
            <p className='text-center'><Link to="mailto:STMconferences@celnet.in">STMconferences@celnet.in</Link></p>
           <Link to='mailto:conferences@conwiz.in'>conferences@conwiz.in</Link> 
          </div>
        </div>

        <div className="col-md">
          <div className="info-item">
          <i className="bi bi-phone" />
          <h3>Phone Number</h3>
            <p className='text-center'><Link to="tel:+01204781211/219">+ 01204781211/219  </Link></p>
          <Link  to="https://wa.me/+917827713832" className='bi bi-whatsapp'>Whatsapp (7827713832)</Link> 
          </div>
          
        </div>

        <div className="col-md">
          <div className="info-item">
            <i className="bi bi-geo-alt" />
            <h3>Address</h3>
           <Link to="https://goo.gl/maps/i6qC4eoHiPSmmZxj7"> <address >A-118, 1st Floor, Sector-63, Noida, U.P. India</address></Link>
          </div>
        </div>
      </div>
      <div className="form mt-5">
        <form ref={form}  onSubmit={sendEmail} className="php-email-form">
          <div className="row">
            <div className="form-group col-md-6">
              <input type="text" name="user_name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group col-md-6">
              <input type="email" className="form-control" name="user_email" id="email" placeholder="Your Email" required />
            </div>
          
          <div className="form-group">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
          </div>
          <div className="my-3">
          <div className="text-center"><button className='btn btn-dark' type="submit" value="Send" onChange={notify}>Send Message</button></div>
          <ToastContainer />
            </div>
            </div>
        </form>
      </div>
    </div>
  </section>  
</div>

    
    
    
    </>
  )
}

export default Contact