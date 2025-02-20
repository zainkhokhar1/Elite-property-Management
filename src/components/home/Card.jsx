
import React from 'react'
import { PiCaretRight } from "react-icons/pi";

const Card = ({ img, text }) => {
    return (
        <div className='flex flex-col gap-6 w-full'>
            {/* img part */}
            <div className='h-3/4 relative'>
                <img className='rounded-[14px]' src={img} alt="img" />

                {/* absolute container to show the icon */}
                <div className='absolute bottom-4 right-3 flex items-center justify-center rounded-full bg-[#26262E] p-4'>
                    <PiCaretRight className='text-xl text-white' />
                </div>
            </div>
            {/* text part */}
            <div className='h-1/4'>
                <h3 className='font-bold text-[#26262E] text-2xl leading-[31px]'>
                    {
                        text
                    }
                </h3>
            </div>
        </div>
    )
}

export default Card;