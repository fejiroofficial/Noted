import React from 'react'
import Image from 'next/image'
import cursor from '../../assets/svg/cursor.svg'
import avater from '../../assets/svg/avatar/avater.svg'
import avater1 from '../../assets/svg/avatar/avater1.svg'
import avater2 from '../../assets/svg/avatar/avater2.svg'
import avater3 from '../../assets/svg/avatar/avater3.svg'
import avater4 from '../../assets/svg/avatar/avater4.svg'
import avater5 from '../../assets/svg/avatar/avater5.svg'

const avatars = [avater, avater1, avater2, avater3, avater4, avater5]

export default function Hero() {
  return (
    <div className='container mx-auto flex flex-col items-center'>
      <p className='text-[12px] md:text-[20px] text-white'>The <span className='italic'>Noisy</span> Founders</p>
      <div className='text-center'>
        <h1 className='text-[34px] lg:text-[64px] font-medium text-white'>The World's Fastest Growing</h1>
        <h2 className='gradient-text text-[34px] lg:text-[64px] font-medium'>Founders Newsletter</h2>
        <p className='text-[12px] md:text-[20px] font-medium text-white'>
          Support system for indie founders. Join 1000+ founders on the journey to 10k MRR.
        </p>
      </div>

      <div className='relative w-[300px]  md:w-[517px] mt-16 mb-8'>
        <input
          placeholder='Email Address'
          className='w-full h-[61px] rounded-[16px] px-4 bg-white text-black outline-none'
        />
        <div className='absolute top-1/2 -translate-y-1/2 right-4 flex items-center gap-2 bg-black cursor-pointer px-6 py-4 rounded-2xl h-[52px]'>
          <p className='text-sm font-medium text-white'>Subscribe</p>
          <Image src={cursor} alt='cursor-icon' width={18} height={18} />
        </div>
      </div>

      <div className='text-center mt-4'>
        <p className='text-white font-medium mb-2'>Already trusted by 1000+ indie founders</p>
        <div className='flex justify-center -space-x-4'>
          {avatars.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`avatar-${index}`}
              width={30}
              height={40}
              className='rounded-full'
            />
          ))}
        </div>
      </div>
    </div>
  )
}
