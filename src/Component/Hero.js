import React from 'react';
import Header from '../Component/Header';
import './Hero.css';
import hero_image from "../Image/hero-image.png";
//import {motion} from 'framer-motion'
const transition={type: 'spring', duration:3}
const Hero =()=>{
    return (
        <div className="hero">
            <div className='blur hero-blur'></div>
            <div className="left-h">
                <Header/>
                <div className="the-best-ad">
                    <div
                    initial={{left:'238px'}}
                    whileInView={{left:'8px'}}
                    transition={{...transition, type: 'tween'}}
                    ></div>
                    <span>The Best Online Code Editor</span>
                </div>
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Build</span>
                        <span> Your</span>
                        </div>

                        <div>
                        <span>... Knowledge....</span>

                        </div>
                    <div>
                        <span>
                            
                            Online Compiler. Code, Compile, Run and Debug program online.
Write your code in this editor and press "Run" button to compile and execute it.
                        </span>
                        </div>
                        </div>
                     <div className='hero-buttons'>
                        <button className='btn1'>Learn More</button>
                     </div>
                        </div>
            <div className="right-h">
                
                
                <button className='btn'>Join Now</button>



                <div className='hero-image'>
                    <img src={hero_image} width={500} height={540} alt="" />
                </div>
            </div>
            
        </div>
    )
}
export default Hero;