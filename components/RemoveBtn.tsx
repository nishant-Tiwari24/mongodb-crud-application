'use client';
import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { useRouter } from 'next/navigation';

interface RemoveBtnProps {
  id: string;
}

const RemoveBtn: React.FC<RemoveBtnProps> = ({ id }) => {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");
    if(confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics/?id=${id}`, { method: "DELETE" });
      if(res.ok) {
        router.refresh();
      }
    }
  }
  return (
    <div onClick={removeTopic} className='text-blue-400 cursor-pointer'>
      <MdDeleteOutline size={24} />
    </div>
  );
};

export default RemoveBtn;
