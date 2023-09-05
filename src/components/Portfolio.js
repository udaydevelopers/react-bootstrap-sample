import React from 'react'

function Portfolio() {
  return (
    
    <section id="portfolio" className="portfolio">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>Portfolio</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <ul id="portfolio-flters" className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
        <li data-filter="*" className="filter-active">All</li>
        <li data-filter=".filter-app">App</li>
        <li data-filter=".filter-card">Card</li>
        <li data-filter=".filter-web">Web</li>
      </ul>

      <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" /></div>
          <div className="portfolio-info">
            <h4>App 1</h4>
            <p>App</p>
            <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" /></div>
          <div className="portfolio-info">
            <h4>Web 3</h4>
            <p>Web</p>
            <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" /></div>
          <div className="portfolio-info">
            <h4>App 2</h4>
            <p>App</p>
            <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" /></div>
          <div className="portfolio-info">
            <h4>Card 2</h4>
            <p>Card</p>
            <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" /></div>
          <div className="portfolio-info">
            <h4>Web 2</h4>
            <p>Web</p>
            <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" /></div>
          <div className="portfolio-info">
            <h4>App 3</h4>
            <p>App</p>
            <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" /></div>
          <div className="portfolio-info">
            <h4>Card 1</h4>
            <p>Card</p>
            <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" /></div>
          <div className="portfolio-info">
            <h4>Card 3</h4>
            <p>Card</p>
            <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" /></div>
          <div className="portfolio-info">
            <h4>Web 3</h4>
            <p>Web</p>
            <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
            <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
          </div>
        </div>

      </div>

    </div>
  </section>
  )
}

export default Portfolio