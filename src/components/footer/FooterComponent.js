import React from 'react';
import { Link } from 'react-router-dom';
const FooterComponent = () => {
  return (
    <>
      <footer className='text-center text-lg-start  text-muted border-top'>
        <section className='border-bottom'>
          <div className='container text-center text-md-start mt-5'>
            <div className='row mt-3'>
              <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <i className='fas fa-gem me-3 mr-2'></i>ConnWorld
                </h6>
                <p>
                  ConnWorld Engineering Shed # 55, DITP Phase II, KIADB
                  Industrial Area, Doddaballapura- 561203, Karnataka, India,
                </p>
              </div>

              <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <Link className='nav-item' to='/quality'>
                    Quality
                  </Link>
                </p>
                <p>
                  <Link className='nav-item' to='/careers'>
                    Careers
                  </Link>
                </p>
                <p>
                  <Link className='nav-item' to='/services'>
                    Services
                  </Link>
                </p>
              </div>

              <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>

                <p>
                  <i className='fas fa-envelope mr-1 text-primary'></i>
                  djk@connworldengg.com
                </p>
                <p>
                  <i className='fas fa-phone-alt mr-1 text-primary'></i> +91
                  84310 43608
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className='text-center p-4 border-top bg-light '>
          © 2021 Copyright: ConnWorld
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
