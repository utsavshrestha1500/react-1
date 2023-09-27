import React from 'react';

const Footer = () => {
  return (
    <div>
        <footer class="bg-dark mt-4  text-white pt-4 pb-4">
    <div class="container text-center ">
      <div class="row text-center">
        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-4">
          <h5 class="text-uppercase mb-4 font-weight-bold text-warning"> About US</h5>
          <p class="paragraph1"> Summary to be written in the format where others can apply for the suitable
            vacation or holidays.
            Summary to be written in the format where others can apply for the suitable vacation or holidays. </p>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-4">
          <h5 class="text-uppercase mb-4 font-weight-bold text-warning"> Our Sites</h5>
          <p>
            <a href=".." class="text-white " style={{textDecoration: "none;"}}> Bali</a>
          </p>
          <p>
            <a href=".." class="text-white" style={{textDecoration: "none;"}}> Desert</a>
          </p>
          <p>
            <a href=".." class="text-white" style={{textDecoration: "none;"}}> GreenLand</a>
          </p>
          <p>
            <a href=".." class="text-white" style={{textDecoration: "none;"}}> Pokhara</a>
          </p>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-4">
          <h5 class="text-uppercase mb-4 font-weight-bold text-warning"> Places</h5>
          <p>
            <a href=".." class="text-white" style={{textDecoration: "none;"}}> Bali</a>
          </p>
          <p>
            <a href=".." class="text-white" style={{textDecoration: "none;"}}> Desert</a>
          </p>
          <p>
            <a href=".." class="text-white" style={{textDecoration: "none;"}}> GreenLand</a>
          </p>
          <p>
            <a href=".." class="text-white" style={{textDecoration: "none;"}}> Pokhara</a>
          </p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-4" id="paragraph2">
          <h5 class="text-uppercase mb-4 font-weight-bold text-warning"> Contact Us</h5>
          <p>
            <i class="bi bi-house-door-fill"></i> Kathmandu, Nepal
          </p>
          <p>
            <i class="bi bi-envelope-fill"></i> abcde@gmail.com
          </p>
          <p>
            <i class="bi bi-telephone-fill "></i> 01-590900/589590
          </p>
          <p>
            <i class="bi bi-printer-fill"></i> 00-023000/292922
          </p>
        </div>
      </div>
      <hr class="mb-4" />
      <div class="row  align-items-center">
        <div class="col-md-7 col-lg-8">
          <p> Copyrights @2023. All rights reserved by:
            <a href=".." style={{textDecoration: "none;"}}>
              <strong class="text-warning">Utsav Shrestha</strong> </a>
          </p>
        </div>
        <div class="col-md-5 col-lg-4 ">
          <div class="text-center">
            <i class="bi bi-twitter" style={{color:"blue"}}></i>
            <i class="bi bi-facebook" style={{color:"rgb(48, 144, 223)"}}></i>
            <i class="bi bi-instagram" style={{color:"red"}}></i>
          </div>
        </div>
      </div>
    </div>
  </footer>
 
    </div>
  );
};

export default Footer;