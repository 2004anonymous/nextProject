"use client"
import EditForm from '@/components/EditForm'
import React, { useEffect, useState } from 'react'

interface EditTopicPageProps {
  params: {
    id: string;
  };
}
type Project = {
  _id: string;
  title: string;
  description: string;
  _v: number;
};

type SecondProp = {
  id: string
}

const EditPage: React.FC<SecondProp> = ({id}) => {
  const [editableData, setEditableData] = useState<Project | null>(null);
  useEffect(()=> {
    const getProjectById = async (id: string) => {
      try {
        const res = await fetch(`/api/projects/${id}`, {
          cache: "no-store",
        });
        if(!res.ok){
          throw new Error("Error occured during fetching the project");
        }
        return await res.json();
      } catch (error) {
        console.log("Error :"+error)
      }
    }
  const result = getProjectById(id);
  result.then(data => {
    setEditableData(data)
  }).catch(error => {
  console.log("Error fetching the data :"+error);
  })

  }, [])
  
  if(editableData === null){
    return <h1>Loading...</h1>
  }
  const {title, description} = editableData
  return (

    <EditForm id={id} title={title} description={description}/>
  )
}

const page: React.FC<EditTopicPageProps> = ({params}) => {
  const {id} = params
  return (
    <EditPage id={id}/>
  )
}

export default page