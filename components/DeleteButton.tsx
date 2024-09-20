"use client";
import { Delete, Trash } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

type Prop = {
  id: string;
};

const DeleteButton = ({ id }: Prop) => {
  const router = useRouter();
  const deleteItem = async (id: string) => {
    try {
      const confirmed = confirm("Are you sure?");
      if (confirmed) {
        const res = await fetch("/api/projects?id=" + id, { method: "DELETE" });
        if (res.ok) {
          router.refresh();
        } else {
          throw new Error("Failed to delete the project");
        }
      }
    } catch (error) {
      console.log("Error :"+ error);
    }
  };
  return (
    <button
      className="p-2 rounded-md bg-red-400 cursor-pointer"
      onClick={() => deleteItem(id)}
    >
      <Trash />
    </button>
  );
};

export default DeleteButton;
