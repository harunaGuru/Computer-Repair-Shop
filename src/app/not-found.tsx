
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <div className='w-full px-2'>
        <div className='mx-auto py-4 flex flex-col justify-center items-center gap-4'>
            <h2 className='text-2xl'>Page Not Found</h2>
            <Image 
            src='/images/imageNotFound.jpg'
            alt='image not found'
            width={350}
            height={350}
            sizes='350px'
            priority={true}
            title='page not found'
            className='m-0 rounded-xl'
            />
        </div>
      
    </div>
  )
}