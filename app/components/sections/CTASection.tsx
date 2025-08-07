import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const CTASection = () => {
  return (
    <div className='bg-[#091B32] h-80 rounded-tl-[160px] rounded-b-3xl flex items-center justify-center relative'>
        <div className='absolute -top-10 -right-10 size-60'>
            <Image src={'/elements/rocket.png'} alt='rocket' fill className='object-contain' />
        </div>
        <div className='absolute -bottom-20 -left-20 size-72'>
            <Image src={'/elements/rings.svg'} alt='rings' fill className='object-contain' />
        </div>
        <div className='flex flex-col items-center gap-6'>
            <h2 className='text-4xl font-bold max-w-2xl text-center'>We are always looking for talented people to join us</h2>
            <Button className='px-32'>Join Now</Button>
        </div>
    </div>
  )
}

export default CTASection