import React, {useRef} from 'react'
import './Subscribe.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Subscribe = () => {
  const notify = () => {
    const messageSent = "sendEmail"; 

  
    if (messageSent === "sendEmail") {
      toast.success('Message sent successfully',{position: toast.POSITION.TOP_CENTER});

    } else {
      toast.error('Message not sent',{position: toast.POSITION.TOP_CENTER});

    }
  };
  const form  = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ylbviqe', 'template_0v9m42m', form.current, 'vVi8IRnGxGIlvDhR_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <>
   <section id="subscribe">
  <div className="container" data-aos="zoom-in">
    <div className="section-header">
      <h2>Newsletter</h2>
     
    </div>
    <form ref={form}  onSubmit={sendEmail} role="form">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-10 d">
        <input type="email" className="form-control" name="user_email" id="email" placeholder="Your Email" required />
          <button type="submit" className="ms-2" onClick={notify}>Subscribe</button>
        </div>
      </div>
    </form>
  </div>
</section>

    
    </>
  )
}

export default Subscribe