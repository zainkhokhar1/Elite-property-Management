
import React, { useState } from 'react';
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";
import { HiOutlineMapPin } from "react-icons/hi2";
import { PiCaretDown, PiCaretUp } from "react-icons/pi";
import { GiOpenBook } from "react-icons/gi";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    const [showPage, setShowPages] = useState(false);
    const [showOffice, setShowOffice] = useState(false);

    return (
        <div className='flex flex-col w-full text-center pb-4'>

            <div className='bg-[#F7FAFC] h-[400px] w-full text-center space-y-4 px-6 py-16'>
                <h4 className='text-[#26262E] leading-[31px] text-base font-medium'>
                    We are to help you
                </h4>

                {/* contacts container */}
                <div className='w-full text-start gap-4 flex flex-col'>
                    {/* contacts */}
                    <span className='text-[#6E6F73] text-sm leading-[21px] font-normal'>
                        Phone:
                    </span>
                    <span className='flex items-center gap-2 text-[#26262E]'>
                        <FiPhone />
                        <span className='font-medium text-base'>
                            561 - 302 - 9383
                        </span>
                    </span>

                    <span className='text-[#6E6F73] text-sm leading-[21px] font-normal'>
                        Email:
                    </span>
                    <span className='flex items-center gap-2 text-[#26262E]'>
                        <FaRegEnvelope />
                        <span className='font-medium text-base'>
                            info@elitepropmgt.com
                        </span>
                    </span>

                    <span className='text-[#6E6F73] text-sm leading-[21px] font-normal'>
                        Address:
                    </span>
                    <span className='flex items-start gap-2 text-[#26262E]'>
                        <HiOutlineMapPin className='text-3xl' />
                        <span className='font-medium text-base'>
                            1515 N Federal Hwy, Suite 300 Boca Raton, FL 33432
                        </span>
                    </span>

                </div>
            </div>
            {/* pages container */}
            <div className="justify-between items-center w-full flex flex-col h-fit">
                {/* Dropdown button */}
                <div
                    className="flex justify-between w-full px-6 bg-white h-16 items-center cursor-pointer"
                    onClick={() => setShowPages(!showPage)}
                >
                    <span className="text-[#26262E] font-medium text-base leading-6">Pages</span>

                    {showPage ? (
                        <PiCaretUp className="text-[#158BE3] text-xl" />
                    ) : (
                        <PiCaretDown className="text-[#158BE3] text-xl" />
                    )}
                </div>

                {/* Dropdown options container */}
                <div
                    className={`flex flex-col items-start bg-[#F7FAFC] w-full transition-all duration-300 ease-in-out ${showPage ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                >
                    <span className="text-[#6E6F73] font-normal text-[14px] py-4 px-6">Home</span>
                    <span className="text-[#6E6F73] font-normal text-[14px] py-4 px-6">Services</span>
                    <span className="text-[#6E6F73] font-normal text-[14px] py-4 px-6">Contact</span>
                </div>
            </div>

            {/* office hours container */}
            <div className="justify-between items-center w-full flex flex-col h-fit">
                {/* Dropdown button */}
                <div
                    className="flex justify-between w-full px-6 bg-white h-16 items-center cursor-pointer"
                    onClick={() => setShowOffice(!showOffice)}
                >
                    <span className="text-[#26262E] font-medium text-base leading-6">Office hours</span>

                    {showOffice ? (
                        <PiCaretUp className="text-[#158BE3] text-xl" />
                    ) : (
                        <PiCaretDown className="text-[#158BE3] text-xl" />
                    )}
                </div>

                {/* Dropdown options container */}
                <div
                    className={`flex items-start flex-col bg-[#F7FAFC] w-full transition-all duration-300 ease-in-out ${showOffice ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                >
                    <span className="text-[#6E6F73] font-normal text-start text-[14px] py-4 px-6 flex flex-col">
                        <span>
                            Monday - Friday
                        </span>
                        <span>
                            9AM - 5PM
                        </span>
                    </span>

                    <span className="text-[#6E6F73] font-normal text-start text-[14px] py-4 px-6 flex flex-col">
                        <span>
                            Saturday - Sunday
                        </span>
                        <span>
                            By Appointment
                        </span>
                    </span>
                </div>

            </div>

            <div className='w-full flex flex-col items-center justify-between h-[80px]'>
                <div className='w-10/12 mx-auto bg-slate-200 h-[0.5px] '></div>
                <div className='flex items-center gap-2'>
                    <GiOpenBook className='text-[#696C80]' />
                    <span className='text-[#696C80] font-normal text-[14px]'>
                        Complaints book
                    </span>
                </div>
                <div className='w-10/12 mx-auto bg-slate-200 h-[0.5px] '></div>
            </div>

            <div className='w-full flex flex-col items-center mb-8 h-[80px] pt-7'>
                <div className='flex items-center gap-2 pb-7'>
                    <GrFacebookOption className='text-[#696C80] text-xl' />
                    <FaLinkedinIn className='text-[#696C80] text-xl' />
                    <AiFillInstagram className='text-[#696C80] text-xl' />

                </div>
                <div className='w-10/12 mx-auto bg-slate-200 h-[0.5px] '></div>

            </div>

            <div className='font-normal text-[14px] leading-[21px] text-[#696C80]'>
                © 2024 Elite All rights reserved
            </div>

        </div>
    )
}

export default Footer;