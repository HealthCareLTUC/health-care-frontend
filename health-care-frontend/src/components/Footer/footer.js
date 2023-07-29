import React, { useRef } from 'react';
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

function Footer() {

  const [email, setEmail] = useState('');
  const emailInputRef = useRef();

  const handleInputChange = () => {
    const inputValue = emailInputRef.current.value;
    setEmail(inputValue);
  };

  const handleInputClick = () => {
    setEmail('');
  };


  return (
    <div className='footer'  style={{backgroundColor:'red', height:'10px'}} >
      <footer style={{backgroundColor:'#E3F4F4'}} >
        <div className="container py-0">
          <div className="row py-4">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <img src="img/logo.png" alt="" width="180" className="mb-3" />
              <p className="font-italic text-muted" style={{ color: 'blue'}}  >
                Quality treatment and compassionate care
              </p>
              
                <section className="mb-4">
                  <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.facebook.com/"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://twitter.com/i/flow/login?redirect_after_login=%2F"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>


                  <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.instagram.com/?hl=es"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>

                  <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.linkedin.com/"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>

                  <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://github.com/"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </section>
        
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">health</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><p>For Women</p></li>
                <li className="mb-2"><p>For Men</p></li>
                <li className="mb-2"><p>For children</p> </li>

              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">website</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#" className="text-muted">Home</a></li>
                <li className="mb-2"><a href="#" className="text-muted">Login</a></li>
                <li className="mb-2"><a href="#" className="text-muted">pharmacy</a></li>

              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">contact us</h6>
              <p className="text-muted mb-4"> Support@HealthCare.com.</p>
              <p className="text-muted mb-4"> 06574737 -  065783225</p>

              <div className="p-1 rounded border">
                <div className="input-group">
                  <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1"
                    className="form-control border-0 shadow-0"
              
                    ref={emailInputRef}
                    value={email}
                    onChange={handleInputChange} />
                  <div className="input-group-append">
                  
                    <button id="button-addon1" type="submit" onClick={handleInputClick} className="btn btn-link"><i className="fa fa-paper-plane"></i></button>
          
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light py-2">
          <div className="container text-center">
            <p className="text-muted mb-0 py-2">© 2023 Health Care Website.</p>
          </div>
        </div>




      </footer>
    </div>
  );
}

export default Footer;