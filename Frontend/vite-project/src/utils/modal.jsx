import React, { useState } from "react";
import Signdisp from "../components/signup/signup";
const Signup = ()=>{
    const [showModal,setShowModal]= useState(false);
    const closeModal =()=>{
        return(setShowModal(false));
    }
    return(<>
    <div > 
    <button class="mx-2 my-2 w-32 outline outline-offset-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300" onClick={()=>setShowModal(true)}>Sign Up</button>
     {showModal && <Signdisp closeModal={closeModal}/>}
    </div>
    </>);
};

export default Signup;