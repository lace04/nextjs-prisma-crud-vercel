import Image from 'next/image';
import Link from 'next/link';
import { prisma } from '@/libs/prisma';
import TaskCard from './TaskCard';
import Todo from '../assets/Todo.svg';

// <Image src={not} alt='404' width={300} height={300} />

async function loadTasks() {
  //fetch data from api
  const res = await fetch('http://localhost:3000/api/tasks');
  const data = await res.json();
  return data;
}

async function getTasks() {
  // get data from db
  return await prisma.task.findMany();
}

async function TasksList() {
  const tasks = await getTasks();

  if (tasks.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <Image src={Todo} alt='404' width={300} height={300} />
        <h1 className='text-3xl'>No tasks found</h1>
        <Link href='/new' className='bg-blue-500 hover:bg-blue-700 p-2 mt-2'>
          <p className='text-sm'>Add a new task</p>
        </Link>
      </div>
    );
  }

  return (
    <>
      <h1 className='text-3xl m-5 text-center'>Tasks List</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mx-auto w-[90%]'>
        {tasks.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </div>
    </>
  );
}

export default TasksList;
