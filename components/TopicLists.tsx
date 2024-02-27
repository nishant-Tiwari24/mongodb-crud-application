import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'

const TopicList = () => {
  return (

    <div className='p-4 border my-3 w-3/4 rounded-md flex justify-between items-center gap-5'>
        <div className='gap-4'>
            <h2 className='text-white font-bold'>Topic Title</h2>
            <p className='text-white'>Topic Description</p>
        </div>

        <div className='flex gap-2'>
            <RemoveBtn/>
            <Link className='text-green-400' href={'/editTopic/123'}>
                <HiPencilAlt size={24}/>
            </Link>
        </div>
      
    </div>
  )
}

export default TopicList
