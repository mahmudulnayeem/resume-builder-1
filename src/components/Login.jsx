"use client";
import { AuthContext } from "@/providers/AuthProvider";
import Image from "next/image";
import { useContext, useState } from "react";

const Login = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleGoogleLogin = () => {
    setError("");
    googleLogin()
      .then((result) => {
        const user = result.user;

        console.log(user);
        alert("login success");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("login success");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center">
      <div className="flex flex-col gap-3 md:w-1/3 mx-auto pt-24 pb-16 px-5 bg-gray-400 rounded-lg justify-center items-center">
        <h1 className="text-xl font-semibold text-gray-800">
          WELCOME TO RESUME BUILDER
        </h1>
        <Image
          src={
            "https://media.discordapp.net/attachments/922720652803321906/1073239019774816346/logo-rb.png"
          }
          alt="logo"
          height={100}
          width={100}
          priority={true}
        />

        <div className="flex flex-col gap-4 w-full">
          <button
            onClick={handleGoogleLogin}
            type="submit"
            className="px-5 py-2 bg-gray-600 hover:bg-red-200 hover:text-black text-white rounded-md "
          >
            Google SignIn
          </button>
          <button
            onClick={handleGithubLogin}
            type="submit"
            className="px-5 py-2 bg-gray-600 hover:bg-red-200 hover:text-black text-white rounded-md"
          >
            Github Login
          </button>
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
