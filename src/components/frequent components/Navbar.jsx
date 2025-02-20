
import React from 'react'
import { FiPhone } from "react-icons/fi";
import Logo from '../../assets/Rebranding Elite property manage/Mobile/Logo.png'
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    return (
        <div>
            {/* two parts */}

            <div className='flex flex-col w-full h-fit'>

                {/* first part white half */}
                <div className='w-full border border-slate-200 h-[30px] flex items-center justify-end bg-white'>
                    {/* #158BE3 color */}
                    <div className='text-[#158BE3] text-xs flex justify-end items-center gap-2 px-4'>
                        {/* icon */}
                        <FiPhone className='w-[14px] h-[14px]' />
                        <span>
                            Resident services: 561-302-9383
                        </span>
                    </div>
                </div>

                {/* 2nd part */}
                <div className='h-18 flex items-center w-full bg-transparent justify-between py-4 px-6'>

                    <img src={Logo} alt="img" className='w-[141px] h-13 '/>
                    <FiMenu className='text-white text-3xl'/>
                </div>

            </div>

        </div>
    )
}

export default Navbar;