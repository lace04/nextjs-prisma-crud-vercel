'use client';

import { useRouter } from 'next/navigation';

function TaskCard({ task }) {
  const router = useRouter();
  return (
    <article className='bg-zinc-800 hover:bg-zinc-700 cursor-pointer trasition duration-300'
    onClick={() => router.push(`/tasks/edit/${task.id}`)}
    >
      <h1 className='text-xl text-center mt-2 uppercase'>{task.title}</h1>
      <p className='m-2'>{task.description}</p>
      <div className='m-2'>
        <p className='text-xs text-zinc-400'>
          {new Date(task.createdAt).toLocaleString()}
        </p>
        <p className='text-xs text-orange-300'>
          {new Date(task.updatedAt).toLocaleString()}
        </p>
      </div>
    </article>
  );
}

export default TaskCard;
