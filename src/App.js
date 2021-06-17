import React from 'react';
import logo from './images/connworldLogo.png';
import { HashRouter, Route, Link } from 'react-router-dom';
import './bootstrap.min.css';
import './App.css';
import useFetch from './data/fetch';
import Homepage from './pages/Homepage';
import WhoweAre from './pages/WhoweAre';
import Services from './pages/Services';
import Quality from './pages/Quality';
import Infrastructure from './pages/Infrastructure';
import Capabilities from './pages/Capabilities';
import Contact from './pages/Contact';
import Gallery from './components/Gallery/Gallery';
import Careers from './pages/Careers';
import FooterComponent from './components/footer/FooterComponent';

const App = () => {
  const data_URL = '../content/content.json';
  //const data_URL = 'https://run.mocky.io/v3/d9c6be74-e7c2-4248-80d6-34e19e93b13d';
  const contents = useFetch(data_URL);
  console.log('Contents', contents);
  if (contents !== null) {
    return (
      <div className='App '>
        <HashRouter basename='/'>
          <>
            <header className='App-header'>
              <nav className='navbar navbar-expand-lg navbar-light bg-light altered-background'>
                <Link className='navbar-brand logo' to='/'>
                  <h1>
                    <img src={logo} className='w-100' alt='logo' />
                  </h1>
                </Link>
                <button
                  className='navbar-toggler'
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarColor03'
                  aria-controls='navbarColor03'
                  aria-expanded='false'
                  aria-label='Toggle navigation'>
                  <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarColor03'>
                  <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                      <Link className='nav-link active' to='/'>
                        <i className='fas fa-home mr-2'></i>
                        Home
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/who-we-are'>
                        <i className='fas fa-users mr-2'></i>
                        Who We Are
                      </Link>
                    </li>
                    <li className='nav-item dropdown'>
                      <span
                        className='nav-link dropdown-toggle'
                        data-toggle='dropdown'
                        href='#'
                        role='button'
                        aria-haspopup='true'
                        aria-expanded='false'>
                        <i className='fas fa-cogs mr-2'></i>
                        We are Capable Of
                      </span>
                      <div className='dropdown-menu'>
                        <Link className='dropdown-item' to='/infrastructure'>
                          Infrastructure
                        </Link>
                        <Link className='dropdown-item' to='/capabilities'>
                          Capabilities
                        </Link>
                        <Link className='dropdown-item' to='/quality'>
                          Quality
                        </Link>
                        <div className='dropdown-divider'></div>
                        <Link className='dropdown-item' to='/services'>
                          Services
                        </Link>
                      </div>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/careers'>
                        <i className='fas fa-user-tie mr-2'></i>
                        Careers
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/reach-us'>
                        <i className='fas fa-map-marker-alt mr-2'></i>
                        Reach Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </header>
            <div className='heading-background'>
              <Gallery></Gallery>
            </div>

            <div className='jumbotron container'>
              <Route
                exact
                path='/'
                component={() => <Homepage contents={contents.homepage} />}
              />
              <Route
                path='/who-we-are'
                component={() => <WhoweAre contents={contents.whoweare} />}
              />
              <Route
                path='/services'
                component={() => <Services contents={contents.services} />}
              />
              <Route
                path='/quality'
                component={() => <Quality contents={contents.quality} />}
              />
              <Route
                path='/infrastructure'
                component={() => (
                  <Infrastructure contents={contents.infrastructure} />
                )}
              />
              <Route
                path='/capabilities'
                component={() => (
                  <Capabilities contents={contents.capabilities} />
                )}
              />
              <Route
                path='/careers'
                component={() => <Careers contents={contents.careers} />}
              />
              <Route path='/reach-us' component={Contact} />
            </div>
          </>
          <FooterComponent />
        </HashRouter>
      </div>
    );
  } else {
    return <h2>Loading</h2>;
  }
};

export default App;
