import React from 'react'
import "./card.css"
import user_image from "../image/image.jpg";
import { FaEnvelope, FaFacebook, FaLinkedin } from 'react-icons/fa';
/**
* @author
* @function Card
**/

const CardItem = (props) => {
  return(
    
        <div class="profile-card">
  <div class="card-header">
    <div class="pic">
      <img src={user_image}/>
    </div>
    <div class="name">Name</div>
    <div class="desc">Branch</div>
    <div class="sm">
      <a href="#" class="fab fa-facebook-f"><FaFacebook/>{props.Facebook}</a>
      <a href="#" class="fab fa-linkedn"><FaLinkedin/>{props.linkedn}</a>
      <a href="#" class="fab fa-github"><FaEnvelope/>{props.mail}</a>
      
    </div>
    </div>
    
</div>
   
   
   )

 
}

export default CardItem;