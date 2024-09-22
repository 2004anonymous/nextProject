"use client"
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const AddForm = () => {
    const router = useRouter();
    const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('')
  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/projects", {method:"POST",
        body: JSON.stringify({
          title: title,
          description: description
        })
      })

      if(res.ok){
        router.push("/")
        router.refresh()
      }else{
        throw new Error("Failed to add project");
      }
  }
  return (
    <form className="flex flex-col gap-4 w-3/4 mx-auto" onSubmit={handleFormSubmit}>
      <input
      required
      value={title}
      onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Your Project Title"
        className="focus:outline-none text-white rounded-md bg-transparent border py-2 px-5 border-gray-500 focus:border-gray-200"
      />
      <textarea
      required
      value={description}
      onChange={(e) => setDescription(e.target.value)}
        placeholder="Description..."
        className="
        min-h-24
        focus:outline-none text-white rounded-md bg-transparent border py-2 px-5 border-gray-500 focus:border-gray-200"
      />
      <button
      type="submit"
        className="bg-blue-400 rounded-md py-2"
      >
        Add project
      </button>
    </form>
  );
};

export default AddForm;
