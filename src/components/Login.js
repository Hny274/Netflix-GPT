import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_medium.jpg" />
      </div>

      <form className="absolute w-1/4 bg-black p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Username"
            className="p-2 my-4 w-full  text-black rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full  text-black rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full  text-black rounded-md"
        />
        {isSignInForm && (
          <div className="flex justify-center">
            <Link className=" hover:text-blue-300" to={"/forgot-password"}>
              Forgot password?
            </Link>
          </div>
        )}
        <button className="p-2 my-4 bg-red-600 w-full text-xl  rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="flex justify-center pb-4 cursor-pointer hover:text-blue-300"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix ? Sign Up"
            : "Alredy registred ? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
