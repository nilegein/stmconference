import React from 'react'
import '../../Pages/About/About.css';
import { Link } from 'react-router-dom';
import image1 from '../../api/Assets/Conferences.jpg'
import image2 from '../../api/Assets/Organizers.jpg'
import image3 from '../../api/Assets/Speakers.jpg'
import image4 from '../../api/Assets/Events.jpg'


const Cards = () => {
  const AboutCard = [
    {
      img: image1,
      title: 'Conferences',
      paragraph: 'Nurturing Ideas, Inspiring Change',
      url: '/all-conferences'
    },
    // {
    //   img: image2,
    //   title: 'Organizers',
    //   paragraph: 'Architects of Inspiration',
    //   url: '/all-organizers'
    // },
    {
      img: image3,
      title: 'Speakers',
      paragraph: 'Voices that Resonate, Ideas that Echo',
      url: '/all-speakers'
    },
    // {
    //   img: image4,
    //   title: 'Events',
    //   paragraph: 'Beyond Conferencing',
    //   url: '/events'
    // },
  ]
  return (
    <>
       <div className="aboutpage">
        <h1 className='text-center '>Who we are!</h1>
        <p className='mb-1'>Welcome to STM Conferences, an initiative by STM Journals publication. an initiative by STM Journals publication. We are a leading journal publication with the name STM (Scientific, Technical, and Medical Journals), based in Noida, committed to advancing knowledge and fostering collaboration in various fields. With a rich history of delivering high-quality research content, we are excited to extend our expertise to the world of conferences.</p>
        <p className='mb-1'>At STM Conferences, we believe in the power of intellectual exchange and the impact of shared insights. Our goal is to create a platform that brings together experts, scholars, researchers, and professionals from around the globe. By facilitating meaningful discussions, innovative ideas, and cutting-edge research presentations, we aim to contribute to the growth and development of various domains.</p>
        <p className='mb-1'>Your groundbreaking work and innovative ideas shared during the conferences have not only enriched the discussions but have also inspired fellow researchers worldwide. Now is the opportunity to ensure that your insights reach an even wider audience through our esteemed publication channels.
</p>

      </div>
      <div className="row mx-2">
        <h1 className='text-center about'><strong>Know More..</strong></h1>
        {AboutCard.map((item) =>
          <div className="col-md-4 mt-2 ">


            <Link to={item.url}>
            <div className="news-card-4 text-center"><img src={item.img} className="img img-responsive" alt='Know More' />
              <div className="profile-content"><Link to={item.url}><h4>{item.title}</h4></Link>
                <div className="profile-description">{item.paragraph}</div>
                <div className="row">
                  <div className="col-xs-4">
                    <div className="profile-overview">
                      <Link to={item.url}><button type="button" class="btn btn-dark ">Read More</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Link>

          </div>
        )}
        
<div className="col-md-4 mt-2 ">
<Link to='/events'>

<div className="news-card-4 text-center"><img src={image4} className="img img-responsive" alt='News' />
  <div className="profile-content"> <Link to='/events'><h4>Events</h4></Link>
    <div className="profile-description">Beyond Conferencing</div>
    <div className="row">
      <div className="col-xs-4">
        <div className="profile-overview mt-4">
          <Link to='/events'><button type="button" class="btn btn-dark">Read More</button></Link>
        </div>
      </div>
    </div>
  </div>
</div>
</Link>
</div>
<div className="col-md-4 mt-2 ">
<Link to='/all-organizers'>

<div className="news-card-4 text-center"><img src={image2} className="img img-responsive" alt='News' />
  <div className="profile-content"> <Link to='/all-organizers'><h4>Organizers</h4></Link>
    <div className="profile-description">Architects of Inspiration</div>
    <div className="row">
      <div className="col-xs-4">
        <div className="profile-overview mt-4">
          <Link to='/all-organizers'><button type="button" class="btn btn-dark">Read More</button></Link>
        </div>
      </div>
    </div>
  </div>
</div>
</Link>
</div>

</div>




    </>
  )
}

export default Cards