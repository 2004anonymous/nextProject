
import React from 'react'
import DeleteButton from './DeleteButton'
import { PencilOff } from 'lucide-react'
import Link from 'next/link'

type Project = {
  _id: string;
  title: string;
  description: string;
  __v: number;
};

type ProjectsProps = {
  projects: Project[];
};

const TaskLists: React.FC<ProjectsProps> = ({projects}) => {
  return (
    <>
          {projects.map(p => (
        <div key={p._id} className='py-4 overflow-y-auto'>
        <div className='flex gap-3 justify-between border border-gray-400 rounded-md p-5'>
        <div>
            <h1 className=' text-3xl font-bold mb-2'>{p.title}</h1>
            <p className='text-gray-400 line-clamp-4'>{p.description}</p>
        </div>
        <div className='flex gap-3 items-start'>
            <DeleteButton id={p._id}/>
            <Link href={`/editTopic/${p._id}`} className='p-2 rounded-md bg-gray-400'><PencilOff /></Link>
        </div>
    </div>
    </div>
      ))}
    </>

  )
};


export default TaskLists