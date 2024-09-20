import { baseUrl } from '@/app/utils/utilities';
import EditForm from '@/components/EditForm'
import React from 'react'

interface EditTopicPageProps {
  params: {
    id: string;
  };
}

const page: React.FC<EditTopicPageProps> = async ({params}) => {
  const {id} = params
  const getProjectById = async (id: string) => {
    try {
      const res = await fetch(`${baseUrl}/api/projects/${id}`, {
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
  const result = await getProjectById(id);
  const {title, description} = result
  return (

    <EditForm id={id} title={title} description={description}/>
  )
}

export default page