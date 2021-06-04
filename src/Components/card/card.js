import React from 'react';
import "./card.css";
import CardItem from './cardItem';
/**
* @author
* @function Card
**/

const Card = (props) => {
  return(
    <div className="card_main_cot">
        <div className="c card_cot">
            <div className="card_wrapper">
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
            </div>
        </div>
    </div>
   )

 }

export default Card;