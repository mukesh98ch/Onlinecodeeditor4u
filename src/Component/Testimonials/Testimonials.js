import React, { useState } from "react";
import './Testimonials.css';
import { testimonialsData } from "../../Data/testimonialsData";
import leftArrow from '../../Image/left.png';
import rightArrow from '../../Image/right.png';
const Testimonials=()=>{

    const [selected,setSelected]=useState(0);
    const tLength=testimonialsData.length;
    return (
        <div className="Testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className="stroke-text">What they</span>
                <sapn>about us</sapn>
                <span>
                    {testimonialsData[0].review}
                </span>
                <span>
                    <span style={{color: "orange"}}>
                        {testimonialsData[selected].name}
                    </span>
                    <span>{""}
                       - {testimonialsData[selected].status}
                    </span>
                </span>
            </div>
            <div className="right-t">
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt=""/>
                <div className="arrows">
                    
                  <img onClick={()=>{
                    selected===0?setSelected(tLength -1):setSelected((prev)=> prev -1);
                  }} src={leftArrow} alt=""/>
                  <img 
                  onClick={()=>{
                    selected===tLength -1 ? setSelected(0) : setSelected((prev)=>prev +1);
                  }} src={rightArrow} alt=""/>  
                </div>
            </div>
        </div>
    )
}
export default Testimonials;