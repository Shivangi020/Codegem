import React from "react";
import "./Header.css";
import header_img from "../image/image.jpg";


function Header(){
 return <div  className="banner">
<div className="content">
<div className="leader">

     <img src={header_img} className="image"/>
     <h1>Meet our Gems!</h1></div>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus amet, porro unde nihil blanditiis harum corporis accusantium magnam nesciunt ad totam dignissimos maiores distinctio assumenda iusto, ab in beatae impedit.</p>
     </div> 

</div>

    
}
export default Header;


