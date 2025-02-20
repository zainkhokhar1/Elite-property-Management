
import React from 'react'
import commercial from '../../assets/commercial logo.png'

const CommercialMessageCard = () => {
  return (
    <div className='bg-white p-6 flex flex-col space-y-6 items-center h-[450px] rounded-[20px] w-[265px] mx-auto'>

      <div className=''>
        <img className='w-[180px] h-15' src={commercial} alt="cardImg" />
      </div>

      <div className='gap-6 flex flex-col items-center'>

        <h3 className='text-[#2E2B26] leading-[31px] text-2xl text-center font-bold'>
          The Start Of Something New
        </h3>

        <p className='text-[#2E2B26] leading-[24px] text-base text-center'>
          We are a team of professionals that have over 40 years experience in the real estate industry in South Florida and we look forward to servicing your community's needs.
        </p>
        <button className='bg-[#26262E] py-3 px-6 rounded-lg text-white'>
          CONTACT US
        </button>
      </div>


    </div>
  )
}

export default CommercialMessageCard;