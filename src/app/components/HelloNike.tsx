import React from 'react'

export default function HelloNike() {
  return (
    <div className='text-center text-black w-full my-5'>
        <h3 className='font-semibold'>Hello Nike App</h3> 
        <p>Download the app to access everything Nike. Get Your Great</p>
        <div className='h-[700px] flex justify-center items-center'>
            <img src="/images/Image.png" alt="" className='mt-5'/>
        </div>

        <div className='text-center text-black my-10'>
            <h3 className='text-sm font-medium'>First Look</h3>
            <h1 className='text-[56px] font-medium'>Nike Air Max Pulse</h1>
            <p className=''>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse</p>
          <p> — designed to push you past your limits and help you go to the max.</p>
        </div>

        <div className='flex justify-center items-center gap-4'>
            <button className='text-white bg-black b p-3'> 
            Notify Me
            </button>
            <button className='text-white bg-black b p-3'> 
            Shop Air Max
            </button>
        </div>
    </div>
  )
}
