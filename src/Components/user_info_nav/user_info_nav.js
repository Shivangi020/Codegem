import React from 'react'
import "./user_info_nav.css"
import { FaCaretDown} from 'react-icons/fa';


/**
* @author Shivangi singh
* @function User_info_nav
**/

const User_info_nav = (props) => {
  return(
    <div className="nav_cot">
        <div className="k nav_option_cot">
            <div className="cot">
            
            <div class="navbar">
 
 
           <div class="dropdown">
         <form class="dropbtn">Year
        <i class="fa fa-caret-down"><FaCaretDown/></i>
       <div class="dropdown-content">
           <select name="year" id="year">
      <option value="link1">Link 1</option>
      <option value="link1">Link 1</option>
      <option value="link1">Link 1</option>
      </select>
    </div>
    </form>
  </div> 
  <div class="dropdown">
         <form class="dropbtn">Brand
        <i class="fa fa-caret-down"><FaCaretDown/></i>
       <div class="dropdown-content">
           <select name="year" id="year">
      <option value="link1">Link 1</option>
      <option value="link1">Link 1</option>
      <option value="link1">Link 1</option>
      </select>
    </div>
    </form>
  </div> 

  <div class="dropdown">
         <form class="dropbtn">Profession
        <i class="fa fa-caret-down"><FaCaretDown/></i>
       <div class="dropdown-content">
           <select name="year" id="year">
      <option value="link1">Link 1</option>
      <option value="link1">Link 1</option>
      <option value="link1">Link 1</option>
      </select>
    </div>
    </form>
  </div> 





</div>
</div>
</div>

    </div>
   )

 }

export default User_info_nav