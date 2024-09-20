"use client"
import {useRouter} from 'next/navigation'
import React, { FormEvent, useState } from 'react'

type EditFormProp = {
  id: string,
  title?: string,
  description?: string
}

const EditForm: React.FC<EditFormProp> = ({id, title, description}) => {
    const router = useRouter();
    const [updatedTitle, setUpdatedTitle] = useState(title);
    const [updatedDesc, setUpdatedDesc] = useState(description);
    const handleformSubmit = async (e: FormEvent) => {
      e.preventDefault();
      try {
        const res = await fetch(`/api/projects/${id}`, {cache: "no-store", method:"PUT", body: JSON.stringify({
          title: updatedTitle,
          description: updatedDesc
        })})
        if(!res.ok){
          throw new Error("Error occured during updating...");
        }
        router.push("/")
        router.refresh();
      } catch (error) {
        console.log("Error : "+error);
      }
    }
  return (
    <form className='flex flex-col gap-4 w-3/4 mx-auto' onSubmit={handleformSubmit}>
      <input type="text" placeholder='Your Project Title' onChange={(e)=> setUpdatedTitle(e.target.value)} value={updatedTitle} className='focus:outline-none text-white rounded-md bg-transparent border py-2 px-5 border-gray-500 focus:border-gray-200'  />
      <textarea placeholder='Description...' onChange={(e)=> setUpdatedDesc(e.target.value)} value={updatedDesc} className='focus:outline-none text-white rounded-md bg-transparent border py-2 px-5 border-gray-500 focus:border-gray-200 min-h-24' required />
      <button className='bg-blue-400 rounded-md py-2' type='submit'>Edit</button>
    </form>
  )
}

export default EditForm