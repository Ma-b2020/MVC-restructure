import React from "react";
import InstructionLogo from "../assets/img/instruction.jpg"
const Pwdguide = () => {
    const hoveri = () =>{
        const element= document.getElementById("guide");
        element.style.display='block';
    } 
    const unhoveri = () =>{
        const element= document.getElementById("guide");
        element.style.display='none';
        console.log("unhover");
    } 

    return(
        
        <>
        
        <div onMouseOut={unhoveri} onMouseOver={hoveri} className="mb-2 h-[20px] w-[20px]">
        <img className="my-1" src={InstructionLogo} alt="info" />
        <div className="w-[300px] bg-amber-200 mx-10 pl-3 rounded-lg">
            <ul id="guide" className='hidden'>
                <li>Minimum length of 8 characters</li>
                <li>Must contain at least one uppercase letter</li>
                <li>Must contain at least one lowercase letter</li>
                <li>Must contain at least one digit</li>
                <li>Must contain at least one special character</li>
            </ul>
        </div>
        </div>
        </>
    );
};
export default Pwdguide;