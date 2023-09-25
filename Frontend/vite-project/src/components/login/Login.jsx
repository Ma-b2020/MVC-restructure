import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"
const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  useEffect(() => {
    if (rememberMe) {
      // Store session data in session storage
      sessionStorage.setItem("userLoggedIn", "true");
    } else {
      // Remove session data from session storage
      sessionStorage.removeItem("userLoggedIn");
    }
  }, [rememberMe]);

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const data={
      username:email,
      password:password
    }
    try{
      
      const res=await axios.post("http://localhost:4000/login",data,{
        withCredentials:true
      })
      console.log(res)

    }catch(err){
      console.log(err.message)
    }
  }
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg  rounded-lg p-8 w-full md:w-[30rem] h-[29rem] md:h-[30rem]">
        <h1 className="text-5xl text-center font-semibold mb-7">
          Welcome Back!
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className=" mb-1 text-xl block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@email.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none  focus:border-blue-500"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-1 text-xl block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-2 border mb-3 rounded-lg focus:outline-none focus:border-blue-500"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleCheckboxChange}
                id="remember"
                className="mr-2"
              />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <Link to="/forgot" className="text-sm text-blue-500">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
