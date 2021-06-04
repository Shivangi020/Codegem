import React from "react";
import "./Header.css";
import image from "../image/image.jpg"


function Header(){
 return <div  className="banner">
<div className=" l content">
<div className="leader">
<div><img src={image} className="image"/></div>

<div className="header_content"><h1>Meet our Gems!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus amet, porro unde ni</p></div>
</div>
</div>
</div>

    
}
export default Header;









// import React from 'react'
// import "./Header.css"
// import user_image from "../image/image.jpg";

// /**
// * @author Shivangi
// * @function 
// **/

// const Header  = (props) => {
//   return(
//     <div className="main_cot">
//     <div className=" l header_cot">
//         <div className="content">
//             <div className="image">
//            <div className="user_image"><img src={user_image} /></div></div>
//            <div className="header_content"><div className="o"><h1><header>Meet our Gems !</header></h1>
//           <p>Lorem ipsum dolor sit amet. Cum mollitia ipsa et autem quia sed facilis molestias. Sed error voluptatem et ipsa corrupti non vitae debitis ut inventore quia et dolor incidunt sed consequatur quisquam qui atque animi! 
//            </p>
//            </div></div>
//         </div>
        
//     </div>
//     </div>
//    )

//  }

// export default Header;