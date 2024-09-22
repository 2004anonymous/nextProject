"use client";
import { Trash } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import useMyContext from "@/app/utils/useMyContext";

type Prop = {
  id: string;
};

const DeleteButton = ({ id }: Prop) => {
  const router = useRouter();
  const {refetch,setRefetch} = useMyContext();
  const deleteItem = async (id: string) => {
    try {
      const confirmed = confirm("Are you sure?");
      if (confirmed) {
        const res = await fetch("/api/projects?id=" + id, { method: "DELETE" });
        if (!res.ok) {
          throw new Error("Failed to delete the project");
        }
      } else {
        console.log("Confirmation declined");
      }
    } catch (error) {
      console.log("Error :" + error);
    }finally{
      router.refresh();
      setRefetch(!refetch)
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
