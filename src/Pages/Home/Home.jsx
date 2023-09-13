import React from 'react'
import Slider from '../../components/Banner/Slider'
import Post from '../../components/Post/Post'
import Cards from '../KnowMore/Cards'
import Gallery from '../../components/Gallery/Gallery'
import Testinomial from '../../components/Testinomial/Testinomial'
import Company from '../../components/Banner/Company/Company'

const Home = () => {
  return (
    <>
  <div className="row g-3">
        <Slider />
        <div className="col-md-9 div123 m-1">
          <Cards/>
        </div>
        <div className="col-md-4">
          <div className="position-sticky" style={{ top: '2rem' }}>
            
            <div>
              <h4 className="fst-italic">Recent posts</h4>
              <hr/>
            
              <marquee direction = "up" height= "400px" ><Post/></marquee>
            </div>

       
          </div>
        </div>
        
        <Gallery/>
        <Testinomial/>
        <Company/>


      </div>

    
    </>
  )
}

export default Home