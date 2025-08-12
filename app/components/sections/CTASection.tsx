import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CTASection = () => {
  return (
    <div className='lg:bg-[#091B32] py-8 lg:py-20 max-sm:rounded-lg lg:rounded-tl-[160px] lg:rounded-b-3xl flex items-center justify-center relative'>
        <div className='hidden lg:block absolute -top-10 -right-10 size-60'>
            <Image src={'/elements/rocket.png'} alt='rocket' fill className='object-contain' />
        </div>
        <div className='hidden lg:block absolute -bottom-20 -left-20 size-72'>
            <Image src={'/elements/rings.svg'} alt='rings' fill className='object-contain' />
        </div>
        <div className='flex flex-col items-center gap-6'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold max-w-2xl text-center'>We are always looking for talented people to join us</h2>
            <Button className='px-32'>
              <Link href="/coming-soon">Join Now</Link>
            </Button>
        </div>
    </div>
  )
}

export default CTASection