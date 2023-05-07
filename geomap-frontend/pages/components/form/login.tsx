import React from "react";
import Image from "next/image";
import background from "./images/login-background.jpg";

function LoginForm() {
  return (
    <div className="relative w-screen h-screen">
      <Image
        src={background}
        alt=""
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <form
        className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-400 p-6 rounded-lg left-1/2 w-5/6 h-2/3 flex flex-col items-center"
        style={{ maxWidth: "400px" }}
      >
        <div className="h-1/3 flex justify-center items-center max-md:w-11/12 md:w-4/5">
          <div className=" w-3/5 h-4/5 bg-black"></div>
        </div>

        <div className="my-4 max-md:w-11/12 md:w-4/5">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6 max-md:w-11/12 md:w-4/5">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-center space-x-3">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label className="text-black dark:text-gray-300">
                Remember me
              </label>
            </div>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full text-white my-2 bg-primary-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Login
        </button>
        <p className="text-sm font-light text-black dark:text-gray-400">
          Don’t have an account yet?{" "}
          <a
            href="#"
            className="px-2 font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Sign-up
          </a>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
