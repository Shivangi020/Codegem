

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Image ,InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./user_info_nav.css"



function User_info_nav() {
  useEffect(() => {
    Aos.init({ duration: 1800 ,
      once: true});
  }, []);
  return (<section data-aos="fade-up" class="jobs-available"> 
            <div class="container">
            <div class="your-box">
              <h2 class="container"></h2>
              <div class="container">
                <InputGroup size="lg">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg">
                      Search
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
                <br />
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="form-group">
                      <select class="form-control" style={{marginBottom:10}} id="sel1">
                        <option>Year</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="form-group">
                      <select class="form-control" style={{marginBottom:10}} id="sel1">
                        <option>Brand</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="form-group">
                      <select class="form-control" style={{marginBottom:10}} id="sel1">
                        <option>Profession</option>
                      </select>
                    </div>
                  </div>
                  {/* <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="custom-control custom-switch" id="switch1">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customSwitches"
                      />
                      <label class="custom-control-label" for="customSwitches">
                        Remote Only
                      </label>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>


</div>
</section>


   
   )

 }

export default User_info_nav