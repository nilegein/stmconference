import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './components/Header/Navbar'
import './App.css';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Footer from './components/Footer/Footer';
import Services from './Pages/Services/Services';
import Events from './Pages/Events/Events';
import Faq from './Pages/Faq/Faq';
import Singleblog from './Pages/Blog/SingleBlog/Singleblog';
import BlogList from './Pages/Blog/BlogList/BlogList';
import Subscribe from './components/Subscribe/Subscribe';
import Speakers from './Pages/Speakers/Speakers';
import SpeakerDetaiil from './Pages/Speakers/Speakerdetail/SpeakerDetaiil';
import Venue from './Pages/Venue/Venue';
import Terms from './Pages/Terms/Terms';
// import Payment from './Pages/Terms/Payment/Payment';
import PublicManagement from './Pages/Terms/Publlication/PublicManagement';
import Organizerdetail from './Pages/Organizers/Organizerdetail/Organizerdetail';
import Organizers from './Pages/Organizers/Organizers';
import Error from './Pages/Error/Error';
import Conferences from './Pages/Conferences/Conferences';
import ScrollToTop from "./components/ScrollToTop";
import Services1 from './Pages/Services/services-detail/Services-detail';


const App = () => {


  return (
    <>
    <BrowserRouter>
   

    <Navbar/>
    <ScrollToTop>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route  path='*' element={<Error/>}/>

        <Route path='/events' element={<Events/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/blogs' element={<BlogList/>}/>
        <Route path='/blogs/singleblog' element={<Singleblog/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/all-speakers' element={<Speakers/>}/>
        <Route path='/all-organizers' element={<Organizers/>}/>
        <Route path='/all-conferences' element={<Conferences/>}/>
        <Route path='/Venue' element={<Venue/>}/>
        <Route path='/terms-and-conditions' element={<Terms/>}/>
        {/* <Route path='/payment-Details' element={<Payment/>}/> */}
        <Route path='/publication-management' element={<PublicManagement/>}/>
        <Route path='/speaker-detail' element={<SpeakerDetaiil/>}/>
        <Route path='/organizer-detail' element={<Organizerdetail/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services-detail' element={<Services1/>}/>
    </Routes>
    
    <Subscribe/>
     <Footer/>
     </ScrollToTop>

     </BrowserRouter>


    
    </>
  )
}

export default App