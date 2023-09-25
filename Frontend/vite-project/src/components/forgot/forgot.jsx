import React from "react";
import { Link } from "react-router-dom";

const forgot = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg  rounded-lg p-8 w-full md:w-[30rem] h-[23rem] md:h-[20rem]">
        <h1 className="text-4xl text-center font-semibold mb-7">
          Reset Password
        </h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className=" mb-2 text-xl block text-sm font-medium text-gray-600"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@email.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none  focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
        <Link to="/login">
          <p className="text-center font-semibold text-blue-500 mt-2">&lt;Back to Sign-in</p>
        </Link>
      </div>
    </div>
  );
};

export default forgot;
