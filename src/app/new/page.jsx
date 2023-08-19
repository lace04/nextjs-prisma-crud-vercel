'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (params.id)
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: 'PATCH',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
    } else {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
    }
    router.refresh();
    router.push('/');
  };

  return (
    <>
      <h1 className='text-3xl m-5 text-center'>Task Form</h1>
      <form
        className='flex flex-col bg-zinc-900 p-10 w-1/2 md:w-1/3 rounded-md mx-auto gap-y-3'
        onSubmit={onSubmit}
      >
        <label className='text-sm' htmlFor='title'>
          Title:
        </label>
        <input
          type='text'
          id='title'
          placeholder='Write a title'
          className='bg-zinc-700 rounded-md p-2 mb-2'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label className='text-sm' htmlFor='description'>
          Description:
        </label>
        <textarea
          rows={3}
          id='description'
          placeholder='Write a description'
          className='bg-zinc-700 rounded-md p-2 mb-2'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <div className='flex justify-between items-center'>
          <button className='bg-blue-500 hover:bg-blue-600 rounded-sm p-2 text-center'>
            {params.id ? 'Update' : 'Add Task'}
          </button>
          {params.id && (
            <button
              type='button'
              className='bg-red-400 hover:bg-red-500 rounded-sm p-2 text-center'
              onClick={async () => {
                confirm('Are you sure you want to delete it?')
                  ? await fetch(`/api/tasks/${params.id}`, {
                      method: 'DELETE',
                    })
                  : null;
                router.refresh();
                router.push('/');
              }}
            >
              Delete
            </button>
          )}
        </div>
      </form>
    </>
  );
}

export default NewPage;
