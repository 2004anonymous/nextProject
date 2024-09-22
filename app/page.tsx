"use client";
import React from "react";
import { ContextProvider } from "./utils/ContextProvider";
import Task from "@/components/Task";

const HomePage = () => {

  return (
    <ContextProvider>
    <Task/>
</ContextProvider>
  )

};

export default HomePage;
