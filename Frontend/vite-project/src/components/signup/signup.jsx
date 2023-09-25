import { GoogleLogin } from "@react-oauth/google";
import PwdFilter from "../../hooks/passwordfilter"
import React,{useState} from "react"
import axios from "axios"
const Signdisp = ({ closeModal }) => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const data={
      name:name,
      username:email,
      password:password
    }
    console.log(data)
    try{
        const res=await axios.post("http://localhost:4000/register",data,{withCredentials:true})
        console.log(res)
    }catch(err){
      console.log(err.message)
    }
  }
  return (
    <div className="backdrop-blur-lg absolute inset-0">
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-[30rem] h-auto md:h-[37rem]">
          <h1 className="text-5xl text-center font-semibold mb-7">Sign Up!</h1>
          <form className="" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="mb-1 text-xl block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                onChange={(e)=>setName(e.target.value)}

              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-1 text-xl block text-sm font-medium text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="name@email.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              
              <PwdFilter password={password} setPassword={setPassword}/>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <hr className="my-3 " />
          {/* <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Signdisp;
