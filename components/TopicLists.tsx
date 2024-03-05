import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'

const getTopics = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/topics',{cache:'no-store'})
    if(!res.ok) throw new Error('Failed to fetch the data');
    return await res.json()
  } catch (error) {
    console.log("Error loading topics", error)
  }
}


const TopicList = async () => {
  const {topics} = await getTopics();
  return (
    <>
    {topics.map((t:any) => (
    <div key={t._id} className='p-4 border my-3 w-3/4 rounded-md flex justify-between items-center gap-5'>
        <div className='gap-4'>
            <h2 className='text-white font-bold'>{t.title}</h2>
            <p className='text-white'>{t.description}</p>
        </div>

        <div className='flex gap-2'>
            <RemoveBtn id = {t._id}/>
            <Link className='text-green-400' href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24}/>
            </Link>
        </div>
      
    </div>
  ))}
  </>
  )
}

export default TopicList
