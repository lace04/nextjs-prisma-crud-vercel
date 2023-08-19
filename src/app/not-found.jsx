import Image from 'next/image';
import not from '../assets/404.svg';

function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Image src={not} alt='404' width={300} height={300} />
      <h1 className='text-3xl'>404</h1>
      <p className='text-xl'>Page not found</p>
    </div>
  );
}

export default NotFound;
