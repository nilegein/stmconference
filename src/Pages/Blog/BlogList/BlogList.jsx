import React from 'react'
import { Link } from 'react-router-dom'
import Blog1 from '../../../api/Assets/img/post-landscape-3.jpg'
import writer from '../../../api/Assets/img/person-2.jpg'

const BlogList = () => {
  return (
    <>
    <section id="search-result" className="search-result">
  <div className="container">
    <div className="row">
      <div className="col-md-9">
        <h3 className="category-title">Search Results</h3>
        <div className="d-md-flex post-entry-2 small-img">
          <Link to="/blogs/singleblog" className="me-4 thumbnail">
            <img src={Blog1} alt className="img-fluid" />
          </Link>
          <div>
            <div className="post-meta"><span className="date">Business</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
            <h3><Link to="/blogs/singleblog">What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</Link></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas.</p>
            <div className="d-flex align-items-center author">
              <div className="photo"><img src={writer} alt className="img-fluid" /></div>
              <div className="name">
                <h3 className="m-0 p-0">Wade Warren</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="d-md-flex post-entry-2 small-img">
          <Link to="/blogs/singleblog" className="me-4 thumbnail">
            <img src={Blog1} alt className="img-fluid" />
          </Link>
          <div>
            <div className="post-meta"><span className="date">Business</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
            <h3><Link to="/blogs/singleblog">What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</Link></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas.</p>
            <div className="d-flex align-items-center author">
              <div className="photo"><img src={writer} alt className="img-fluid" /></div>
              <div className="name">
                <h3 className="m-0 p-0">Wade Warren</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="d-md-flex post-entry-2 small-img">
          <Link to="/blogs/singleblog" className="me-4 thumbnail">
            <img src={Blog1} alt className="img-fluid" />
          </Link>
          <div>
            <div className="post-meta"><span className="date">Business</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
            <h3><Link to="/blogs/singleblog">What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</Link></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas.</p>
            <div className="d-flex align-items-center author">
              <div className="photo"><img src={writer} alt className="img-fluid" /></div>
              <div className="name">
                <h3 className="m-0 p-0">Wade Warren</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="d-md-flex post-entry-2 small-img">
          <Link to="/blogs/singleblog" className="me-4 thumbnail">
            <img src={Blog1} alt className="img-fluid" />
          </Link>
          <div>
            <div className="post-meta"><span className="date">Business</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
            <h3><Link to="/blogs/singleblog">What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</Link></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas.</p>
            <div className="d-flex align-items-center author">
              <div className="photo"><img src={writer} alt className="img-fluid" /></div>
              <div className="name">
                <h3 className="m-0 p-0">Wade Warren</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="d-md-flex post-entry-2 small-img">
          <Link to='/blogs/singleblog'  className="me-4 thumbnail">
            <img src={Blog1} alt className="img-fluid" />
          </Link>
          <div>
            <div className="post-meta"><span className="date">Business</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
            <h3><Link to="/blogs/singleblog">What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</Link></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas.</p>
            <div className="d-flex align-items-center author">
              <div className="photo"><img src={writer} alt className="img-fluid" /></div>
              <div className="name">
                <h3 className="m-0 p-0">Wade Warren</h3>
              </div>
            </div>
          </div>
        </div>

      
        {/* Paging */}
        <div className="text-start py-4">
          <div className="custom-pagination">
            <Link to="#" className="prev">Prevous</Link>
            <Link to="#" className="active">1</Link>
            <Link to="#">2</Link>
            <Link to="#">3</Link>
            <Link to="#">4</Link>
            <Link to="#">5</Link>
            <Link to="#" className="next">Next</Link>
          </div>
        </div>{/* End Paging */}
      </div>
      
      
      <div className="col-md-3">
        {/* ======= Sidebar ======= */}
        <div className="aside-block">
          <ul className="nav nav-pills custom-tab-nav mb-4" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-popular-tab" data-bs-toggle="pill" data-bs-target="#pills-popular" type="button" role="tab" aria-controls="pills-popular" aria-selected="true">Popular</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-trending-tab" data-bs-toggle="pill" data-bs-target="#pills-trending" type="button" role="tab" aria-controls="pills-trending" aria-selected="false">Trending</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-latest-tab" data-bs-toggle="pill" data-bs-target="#pills-latest" type="button" role="tab" aria-controls="pills-latest" aria-selected="false">Latest</button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            {/* Popular */}
            <div className="tab-pane fade show active" id="pills-popular" role="tabpanel" aria-labelledby="pills-popular-tab">
              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Sport</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><Link to="#">How to Avoid Distraction and Stay Focused During Video Calls?</Link></h2>
                <span className="author mb-3 d-block">Jenny Wilson</span>
              </div>
              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><Link to="#">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</Link></h2>
                <span className="author mb-3 d-block">Jenny Wilson</span>
              </div>
              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><Link to="#">9 Half-up/half-down Hairstyles for Long and Medium Hair</Link></h2>
                <span className="author mb-3 d-block">Jenny Wilson</span>
              </div>
              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><Link to="#">Life Insurance And Pregnancy: A Working Mom’s Guide</Link></h2>
                <span className="author mb-3 d-block">Jenny Wilson</span>
              </div>
              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Business</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><Link to="#">The Best Homemade Masks for Face (keep the Pimples Away)</Link></h2>
                <span className="author mb-3 d-block">Jenny Wilson</span>
              </div>
              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><Link to="#">10 Life-Changing Hacks Every Working Mom Should Know</Link></h2>
                <span className="author mb-3 d-block">Jenny Wilson</span>
              </div>
            </div> {/* End Popular */}
            {/* Trending */}
            <div className="tab-pane fade" id="pills-trending" role="tabpanel" aria-labelledby="pills-trending-tab">
              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><Link to="#">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</Link></h2>
                <span className="author mb-3 d-block">Jenny Wilson</span>
              </div>
              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><Link to="#">9 Half-up/half-down Hairstyles for Long and Medium Hair</Link></h2>
                <span className="author mb-3 d-block">Jenny Wilson</span>
              </div>
              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><Link to="#">Life Insurance And Pregnancy: A Working Mom’s Guide</Link></h2>
                <span className="author mb-3 d-block">Jenny Wilson</span>
              </div>
              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Sport</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><Link to="#">How to Avoid Distraction and Stay Focused During Video Calls?</Link></h2>
                <span className="author mb-3 d-block">Jenny Wilson</span>
              </div>
              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Business</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><Link to="#">The Best Homemade Masks for Face (keep the Pimples Away)</Link></h2>
                <span className="author mb-3 d-block">Jenny Wilson</span>
              </div>
              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><Link to="#">10 Life-Changing Hacks Every Working Mom Should Know</Link></h2>
                <span className="author mb-3 d-block">Jenny Wilson</span>
              </div>
            </div> {/* End Trending */}
            {/* Latest */}
            <div className="tab-pane fade" id="pills-latest" role="tabpanel" aria-labelledby="pills-latest-tab">
              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><Link to="#">Life Insurance And Pregnancy: A Working Mom’s Guide</Link></h2>
                <span className="author mb-3 d-block">Jenny Wilson</span>
              </div>
              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Business</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><Link to="#">The Best Homemade Masks for Face (keep the Pimples Away)</Link></h2>
                <span className="author mb-3 d-block">Jenny Wilson</span>
              </div>
              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><Link to="#">10 Life-Changing Hacks Every Working Mom Should Know</Link></h2>
                <span className="author mb-3 d-block">Jenny Wilson</span>
              </div>
              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Sport</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><Link to="#">How to Avoid Distraction and Stay Focused During Video Calls?</Link></h2>
                <span className="author mb-3 d-block">Jenny Wilson</span>
              </div>
              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><Link to="#">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</Link></h2>
                <span className="author mb-3 d-block">Jenny Wilson</span>
              </div>
              <div className="post-entry-1 border-bottom">
                <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
                <h2 className="mb-2"><Link to="#">9 Half-up/half-down Hairstyles for Long and Medium Hair</Link></h2>
                <span className="author mb-3 d-block">Jenny Wilson</span>
              </div>
            </div> {/* End Latest */}
          </div>
        </div>
        <div className="aside-block">
          <h3 className="aside-title">Video</h3>
          <div className="video-post">
            <Link to='https://www.youtube.com/watch?v=AiFfDjmd0jU' className="glightbox link-video">
              <span className="bi bi-play-circle-fill" />
              <img src={Blog1} alt className="img-fluid" />
            </Link>
          </div>
        </div>{/* End Video */}
        <div className="aside-block">
          <h3 className="aside-title">Categories</h3>
          <ul className="aside-links list-unstyled">
            <li><Link to="category.html"><i className="bi bi-chevron-right" /> Business</Link></li>
            <li><Link to="category.html"><i className="bi bi-chevron-right" /> Culture</Link></li>
            <li><Link to="category.html"><i className="bi bi-chevron-right" /> Sport</Link></li>
            <li><Link to="category.html"><i className="bi bi-chevron-right" /> Food</Link></li>
            <li><Link to="category.html"><i className="bi bi-chevron-right" /> Politics</Link></li>
            <li><Link to="category.html"><i className="bi bi-chevron-right" /> Celebrity</Link></li>
            <li><Link to="category.html"><i className="bi bi-chevron-right" /> Startups</Link></li>
            <li><Link to="category.html"><i className="bi bi-chevron-right" /> Travel</Link></li>
          </ul>
        </div>{/* End Categories */}
        <div className="aside-block">
          <h3 className="aside-title">Tags</h3>
          <ul className="aside-tags list-unstyled">
            <li><Link to="category.html">Business</Link></li>
            <li><Link to="category.html">Culture</Link></li>
            <li><Link to="category.html">Sport</Link></li>
            <li><Link to="category.html">Food</Link></li>
            <li><Link to="category.html">Politics</Link></li>
            <li><Link to="category.html">Celebrity</Link></li>
            <li><Link to="category.html">Startups</Link></li>
            <li><Link to="category.html">Travel</Link></li>
          </ul>
        </div>{/* End Tags */}
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}

export default BlogList