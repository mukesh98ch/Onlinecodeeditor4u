import React from "react";
import './Join.css';

const Join=()=>{
    
    return(
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">READY TO</span>
                    <span> LEVEL UP</span>
                    
                </div>
                <div>
                    <span> YOUR CODE</span>
                    <span className="stroke-text"> WITH US?</span>
                    
                </div>
            </div>
            <join className="right-j">
             <form action="" className="email-cont" >
                <input type="email" name="user_email" placeholder="Enter your Email address"></input>
               <button className="btn btn-j">Join now</button>  </form>   
            </join>
        </div>
    )
}
export default Join;