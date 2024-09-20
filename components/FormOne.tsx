"use client";
import React, { useState } from "react";
import { FormEvent } from "react";
import { getConnection } from "../app/utils/dbConnection";

const FormOne = () => {
  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
  getConnection()
    await fetch("/api/create", {method:"POST",
      body: JSON.stringify({
        email:email,
        username: username
      })
    })

    // if(res.ok){
    //   alert("A mail sent to your email address please confirm !");
    // }
    // fetch("/api/create", {method: "GET"})
  };
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");


  return (
    <>
      <h1 className=" text-center text-4xl font-bold mt-10">
        Hello ! welcome to Anonymous Code
      </h1>
      <form
        onSubmit={handleFormSubmit}
        className=" w-96 mx-auto mt-10 p-5 rounded-lg bg-transparent space-y-5"
      >
        <input
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="username"
          className="py-2 px-4 bg-transparent rounded-lg text-whit bg-gray-400 w-full focus:outline-none focus:border"
          required
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="your@email.com"
          className="py-2 px-4 bg-transparent rounded-lg text-white bg-gray-400 w-full focus:outline-none focus:border"
          required
        />
        <button
          type="submit"
          className="w-full py-2 rounded-lg hover:to-orange-500 duration-200 bg-gradient-to-tr from-orange-300 to-orange-400 text-black font-bold text-lg"
        >
          Send request
        </button>
      </form>
    </>
  );
};

export default FormOne;
