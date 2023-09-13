import React from 'react'
import './Company.css'
import { Link } from 'react-router-dom'
const Company = () => {
  const intiatives =[
    {
      name:'Apid',
      img:'https://storage.googleapis.com/apid-journalslibrary-com-wp-media-to-gcp-offload/2022/11/Apid-logo-04-1024x560-1-1.png',
      url:'https://apid.journalslibrary.com/'
    },
    {
      name:'Nstc',
      img:'https://nanoschool.in/wp-content/uploads/2022/03/NSTC-Logo-png.png',
      url:'https://nanoschool.in/Nstc/'
    },
    {
      name:'Manuscript-Engine',
      img:'https://storage.googleapis.com/manuscript-engine-stmjournals-com-wp-media-to-gcp-offload/2022/10/manuscript-engine-logo-1-03-1536x718.png',
      url:'https://manuscript-engine.journalslibrary.com'
    },
    {
      name:'Journals Library',
      img:'https://journalslibrary.com/wp-content/uploads/2022/08/Journal-Library-logo-1536x599.png',
      url:'https://journalslibrary.com/'
    },
    {
      name:'Open Book',
      img:'https://openbookspublisher.com/public/presses/1/pageHeaderLogoImage_en_US.png',
      url:'https://openbookspublisher.com/index.php/openbooks'
    },
    {
      name:'Conwiz',
      img:'https://conwiz.in/wp-content/uploads/2022/03/conwiz-logo.gif',
      url:'https://conwiz.in/'
    }
   
  ]
  return (
    <>
    
   <section id="supporters" className="section-with-bg mt-5">
   <div className="container mt-2 mb-4 aos-init aos-animate" data-aos="fade-up">
    <div className="section-header">
    <h2 className='text-center' style={{color: "#1d5818"}}>Our Journals</h2>
    </div>
    <div className="row no-gutters mt-2 supporters-wrap clearfix aos-init aos-animate" data-aos="zoom-in" data-aos-delay={100}>
       <div className="col-sm-6">
       <Link to='https://stmjournals.in'>
       <div className="supporter-logo">
         <img src='https://storage.googleapis.com/apid-journalslibrary-com-wp-media-to-gcp-offload/2022/09/logo_stm.png' className="img-fluid" alt="logo" />
       </div>
       </Link>
     </div>
     <div className="col-sm-6">
       <Link to='https://journals.stmjournals.com'>
       <div className="supporter-logo">
         <img src='https://storage.googleapis.com/journals-stmjournals-com-wp-media-to-gcp-offload/2022/12/c55ced26-open-access-logo.png' className="img-fluid" alt="logo" />
       </div>
       </Link>
     </div>


     

    </div>
  </div>
  <div className="container  mt-2 mb-4 aos-init aos-animate" data-aos="fade-up">
    <div className="section-header">
     <h2 className='text-center' style={{color: "#1d5818"}}>Our Initiatives</h2>
    </div>
    <div className="row no-gutters mt-2 supporters-wrap clearfix aos-init aos-animate" data-aos="zoom-in" data-aos-delay={100}>
     
      {intiatives.map((item)=>
       <div className="col-lg-3 col-md-4 col-xs-6">
       <Link to={item.url}>
       <div className="supporter-logo">
         <img src={item.img} className="img-fluid" alt="logo" />
       </div>
       </Link>
     </div>
      )}
     

    </div>
  </div>
</section>

    </>
  )
}

export default Company