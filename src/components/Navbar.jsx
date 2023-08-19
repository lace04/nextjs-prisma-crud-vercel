import Link from 'next/link';

function Navbar() {
  return (
    <nav className='flex mx-auto justify-between items-center w-[90%] bg-slate-700 h-[2.5rem]'>
      <Link href='/'>
        <h3 className='mx-5'>Next CRUD</h3>
      </Link>
      <ul className='flex gap-x-6 mx-5'>
        <li className='text-sm text-white hover:text-orange-300'>
          <Link href='/'>Tasks</Link>
        </li>
        <li className='text-sm text-white hover:text-orange-300'>
          <Link href='/new'>New Task</Link>
        </li>
        <li className='text-sm text-white hover:text-orange-300'>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
