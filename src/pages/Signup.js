import React, { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
function Signup({ hide }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 rounded w-[30rem]">
        {toggle ? (
          <h2 className="text-2xl mb-4 flex justify-center font-semibold">
            LOG IN
          </h2>
        ) : (
          <h2 className="text-2xl mb-4 flex justify-center">Sign-Up Here</h2>
        )}
        {toggle ? (
          <form>
            <div className="block text-gray-500 font-bold mb-2">Username</div>
            <div className="">
              <input
                className="shadow border appearance-none w-full focus:ouline-none py-4 px-2 rounded focus:shadow-outline"
                type="text"
                placeholder="Enter User name here..!"
              ></input>
            </div>
            <div className="block text-gray-500 font-bold mt-2">Password</div>
            <div className="">
              <input
                className="shadow border appearance-none w-full focus:ouline-none py-4 px-2 rounded focus:shadow-outline"
                type="password"
                placeholder="******************"
              ></input>
            </div>
            <div className="flex items-center justify-between w-full">
              <button className="mt-4 bg-gray-400 p-3 font-semibold text-white hover:bg-blue-500 rounded">
                Log In
              </button>
              <a className="text-blue-600" href="#">
                Forgot Password ?
              </a>
            </div>
          </form>
        ) : (
          <form>
            <div className="block text-gray-500 font-bold mb-2">Username</div>
            <div className="">
              <input
                className="shadow border appearance-none w-full focus:ouline-none py-4 px-2 rounded focus:shadow-outline"
                type="text"
                placeholder="Enter User name here..!"
              ></input>
            </div>
            <div className="block text-gray-500 font-bold mt-2">Password</div>
            <div className="">
              <input
                className="shadow border appearance-none w-full focus:ouline-none py-4 px-2 rounded focus:shadow-outline"
                type="password"
                placeholder="******************"
              ></input>
            </div>
            <div className="flex items-center justify-between w-full">
              <button className="mt-4 bg-gray-400 p-3 hover:bg-blue-500 rounded">
                Sign Up
              </button>
              Already Have An account?
              <button onClick={() => setToggle(!toggle)}>Log In</button>
            </div>
          </form>
        )}
        <button className="mt-4" onClick={hide}>
          <div className="text-[25px] bg-red-600 text-white">
            <AiFillCloseSquare />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Signup;
