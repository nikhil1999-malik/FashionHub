import React from 'react'
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <footer className="text-center text-lg-start bg-light text-muted">

  <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
    
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    

    
    <div>
      <a href="facebook.com" class="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="twitter.com" class="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="google.com" class="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="instagram.com" class="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href=".linkedin.com" class="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="github.com" class="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
    
  </section>
 

  
  <section className="">
    <div className="container text-center text-md-start mt-5">
      
      <div className="row mt-3">
        
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Fashion HUb
          </h6>
          <p>
          Shop from a wide range of Top from FashionHub.
          </p>
        </div>
        

       =
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Shirts</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Jeans</a>
          </p>
          <p>
            <a href="#!" className="text-reset">T-Shirts</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Skirts & More.</a>
          </p>
        </div>
        

       
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <NavLink to="/" className="text-reset">Home</NavLink>
          </p>
          <p>
            <NavLink to="/about" className="text-reset">About</NavLink>
          </p>
          <p>
            <NavLink to="/products" className="text-reset">Products</NavLink>
          </p>
          <p>
            <NavLink to="/contact" className="text-reset">Contact</NavLink>
          </p>
        </div>
        

        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        
      </div>
      
    </div>
  </section>


  
  <div className="text-center p-4">
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://fashionhub.com/">Fashionhub.com</a>
  </div>

</footer>
        </div>
    )
}

export default Footer;
