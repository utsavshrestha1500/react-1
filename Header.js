import React from 'react';


const Header = () => {
  return (
   
    
        <div className="navBox">
    <div className=" container" id="navbarLp">
      <div className="navbarBost ">
        <div className="row mt-2" id="nav-float">
          <div className="col-3 " id="forLogo">
            <a className="navbar-brand fs-3" style={{color:"rgb(128, 123, 123)"}} href="..">Ziggy-Zag</a>
          </div>
          <div className="col-6 " id="navbar1">
            <ul className="nav" id="homeNav">
              <li className="nav-item">
                <a href=".." className="nav-link" id="explore"> Explore</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="reviews" href=".."> Destinations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="reviews" href="..">Packages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="reviews" href="..">Flights</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="reviews" href=".."> Reviews</a>
              </li>
            </ul> 
          </div>
          <div className="col-3 " id="navIcon">
            <i className="bi bi-search"></i>
            <i className="bi bi-person-circle"></i>
          </div>
        </div>
      </div>
    </div>
  
    
  </div>
  
  );
};

export default Header;