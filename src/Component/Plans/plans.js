import React from "react";
import './plans.css'
import { plansData } from "../../Data/plansData";
import whiteTick from "../../Image/whitetick2.png";
const Plans =()=>{
    return(
        <div className="plans-cont">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header" style={{gap: '2rem'}}>
                <span className="stroke-text">READY TO START</span>
                <span> YOUR JOURNEY</span>
                <span className="stroke-text"> NOW WITH US</span>
            </div>

            <div className="plans">
                {plansData.map((plan,i)=>(
                 <div className="plan" key={i}>
                    <span className="span1">{plan.name}</span>
                    <span className="span">${plan.price}</span>
                    <div className="features">
                        {plan.features.map((feature, i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt=""/>
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span>See more benefits -</span>
                    </div>
                    <button className="btn">Join now</button>
                 </div>
                 ) )}
            </div>
        </div>
    )
}
export default Plans;