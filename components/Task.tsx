import React from "react";
import TaskLists from "./TaskLists";

const Task = async () => {
  const res = await fetch("/api/projects", {
    cache: "no-store",
  });
  const data = await res.json();
  if(data.projects.length === 0){
    return <div>No project added yet...</div>
  }

  return <TaskLists projects={data.projects} />;
};

export default Task;
