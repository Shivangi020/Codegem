import React from "react";
import "./Header.css";
import header_img from "../image/header.svg";


function Header(){
 return <div  className="banner">
<div className="content">
<div className="leader">
 <img src={header_img} className="image"/> </div> 
  
  <div className="t"><h1>Meet our Gems!</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus amet, porro unde nihil blanditiis harum corporis accusantium magnam nesciunt ad </p>
         </div>  
   </div> 
</div>

    
}
export default Header;


