'use client';
import React, { useState } from 'react';
import Navbar from './Navbar';

const EditTopic: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Title: ${title}, Description: ${description}`);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto p-8">
        <form onSubmit={handleSubmit} className="bg-gray-700 p-8 rounded-md shadow-md">
          <h2 className="text-2xl text-white font-light mb-6">Edit Topic</h2>
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
              Edit Topic
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTopic;
