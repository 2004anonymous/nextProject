"use client";
import React, { useEffect, useState } from "react";
import TaskLists from "./TaskLists";
import useMyContext from "@/app/utils/useMyContext";

const Task = () => {
  type Project = {
    _id: string;
    title: string;
    description: string;
    __v: number;
  };

  const { refetch } = useMyContext();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    const getData = async () => {
  console.log(refetch);

      try {
        const res = await fetch("/api/projects", { cache: "no-store" });
        if (res.ok) {
          const result = await res.json();
          setData(result);
          setLoading(false);
        } else {
          setLoading(false);
          console.log("Failed to load data !");
          throw new Error("Failed to load data");
        }
      } catch (error) {
        setLoading(false);
        console.log("Fetch error :" + error);
      }
    };
    getData();

  }, [refetch]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return <TaskLists projects={data} />;
};

export default Task;
