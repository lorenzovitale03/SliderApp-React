import React, { useState, useEffect } from "react";
import Slide from './Slide';
import data from './data';
import star from './star'


const Slider = () => {
    const [reviews, setReviews] = useState(data);
    const [active,setActive] = useState(0);

    //funzione passaggio prossima slide
    const prossimaSlide = () =>{
        setActive(prevValue =>{
            if(prevValue + 1 > reviews.length -1){
                return 0
            }
            return prevValue + 1
        })
    }

    //funzione passaggio slide precedente
    const slidePrecedente = () =>{
        setActive(prevValue =>{
            if(prevValue -1 < 0){
                return reviews.length -1;
            }
            return prevValue - 1;
        })
    }

    return (
    <div className="container slider">
        {reviews.map((el,index) =>{
            let positionClass = "";
            if(index === active){
                positionClass = "active";
            } else if(index + 1 === active || (active === 0 && index === reviews.length - 1)){
                positionClass = "prev";
            } else{
                positionClass = "next";
            }
            return(
                <Slide key={el.id} {...el} classes={positionClass}></Slide>
            );
        })}

        <div className="btn-group slider-btn-group">
            <button className="btn btn-slider prev-slider" onClick={slidePrecedente}>prev</button>
            <button className="btn btn-slider next-slider" onClick={prossimaSlide}>next</button>
        </div>
    </div>
    );
};


export default Slider;