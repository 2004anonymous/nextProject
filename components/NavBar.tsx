"use client"
import { Logs } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

const NavBar = () => {
  const router = useRouter();
  return (
    <nav className='py-2 px-5 justify-between flex bg-gray-500 rounded mb-8'>
        <div className='flex items-center justify-center'>
        <Logs size={28} onClick={()=> {
          router.push("/")
        }}/>
        </div>
        <Link href={"/addTopic"} className='bg-white text-black py-1.5 px-8 rounded'>create</Link>
  </nav>
  )
}

export default NavBar