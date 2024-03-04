'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

const AddTopicPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!title || !description) {
      alert("Fill the required details");
      return;
    }
    else {
      try {
        const res = await fetch('http://localhost:3000/api/topics/',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            title, description
          })
        });
        if(res.ok){
          router.push('/')
        }else{
          throw new Error('Could not add topic');
        }
      } catch (error) {
        console.log(error);
      }
    }
    
  };

  return(<div className="bg-gray-900 text-white min-h-screen">
  <Navbar />
  <div className="container mx-auto p-8">
    <form onSubmit={handleSubmit} className="bg-gray-700 p-8 rounded-md shadow-md">
      <h2 className="text-2xl text-white font-light mb-6">Add Topic</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-300 text-sm font-medium mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-md bg-slate-800 focus:outline-none focus:border-green-500"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="description" className="block text-gray-300 text-sm font-medium mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => {setDescription(e.target.value)}}
          rows={4}
          className="w-full px-4 py-2 border rounded-md bg-slate-800 focus:outline-none focus:border-green-500"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-green-400 text-slate-800 px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>);
};

export default AddTopicPage;
