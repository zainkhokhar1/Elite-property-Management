
import React from 'react'
import Navbar from '../components/frequent components/Navbar';
import { PiWarehouse } from "react-icons/pi";
import { TbFiles } from "react-icons/tb";
import { PiMegaphone } from "react-icons/pi";
import Card from '../components/home/Card';
import img1 from '../assets/Image 2.png'
import img2 from '../assets/Image.png'
import img3 from '../assets/Image 3.png'
import CommercialMessageCard from '../components/home/CommercialMessageCard';
import Footer from '../components/Footer';

const Home = () => {

    const dummyCardData = [
        {
            img: img1,
            text: 'Rental Property Management',
        },
        {
            img: img2,
            text: 'Condominium Associations',
        },
        {
            img: img3,
            text: 'Homeowner Associations',
        },
    ];


    return (
        <div className="">

            {/* first section */}
            <div className='bg-img w-full h-[800px] object-contain'>
                <Navbar />

                <div className='flex flex-col items-start gap-6 h-[284px] text-white px-5 mt-14'>
                    <h1 className='text-4xl leading-[47px] text-start w-full font-bold'>
                        The Management team you can depend on
                    </h1>
                    <p className='font-normal leading-[24px] text-base'>
                        For all south florida rental property management,hoa and condo association needs
                    </p>
                </div>
            </div>

            {/* second section */}
            <div className='bg-white h-[1300px] w-full px-6 py-14'>

                <div className='space-y-7 w-full text-[#2E2B26]'>
                    <h1 className='leading-[31px] text-2xl font-semibold'>
                        Reliable Property Management with Transparent Reporting and Consistent Communication
                    </h1>

                    <div className='space-y-7'>
                        <h5>
                            Elite Property Management (EPM) was created with the vision of:
                        </h5>

                        <div className='space-y-4'>
                            <div className='flex items-center gap-4 w-full'>
                                <span className='w-fit h-fit px-2 py-2 flex items-center justify-center bg-[#E6EAF9] rounded-full'>
                                    <PiWarehouse className='text-2xl text-[#158BE3]' />
                                </span>
                                <span className='text-base leading-4 font-normal w-full'>
                                    Reliable property management
                                </span>
                            </div>

                            <div className='flex items-center gap-4 w-full'>
                                <span className='w-fit h-fit px-2 py-2 flex items-center justify-center bg-[#E6EAF9] rounded-full'>
                                    <TbFiles className='text-2xl text-[#158BE3]' />
                                </span>
                                <span className='text-base leading-4 font-normal w-full'>
                                    Transparent reporting
                                </span>
                            </div>

                            <div className='flex items-center gap-4 w-full'>
                                <span className='w-fit h-fit px-2 py-2 flex items-center justify-center bg-[#E6EAF9] rounded-full'>
                                    <PiMegaphone className='text-2xl text-[#158BE3]' />
                                </span>
                                <span className='text-base leading-4 font-normal w-full'>
                                    Consistent communication.
                                </span>
                            </div>

                            <p className=''>
                                The founders of EPM saw that most Property Management Companies do not provide these simple, yet essential responsibilities to the Property Owners and Associations they were hired to manage.
                            </p>

                        </div>
                    </div>
                </div>

                <div className='w-full space-y-14 pt-10'>
                    <div className='w-full rounded-2xl h-[330px] shadow-[0_0_10px_rgba(0,0,0,0.1)] bg-white'>
                        <img className='w-full h-full rounded-2xl' src="https://s3-alpha-sig.figma.com/img/2298/8c96/e37a60dd16c4fb13001b89cad7953c02?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=du8kzScgcI0fpyi4HClL2sOMCLcIY3tRtkotG1ZdmV~7PSa5sSH04mmRHfGHfDAbAVUH37e4cuc-y57BnTYfeyxnlo1SM5V1AMAgXFA0esPRH1~JavGCUp1B1-DhOkvyPtLF6SEw~EJG7kqJjq2KJTuzbduQQPP9L9PXKDrClcH5B5h9nG-ONEyA5CiCZjcGYQbCnxstqSsoT3bFFUzvShuGOaMDKL-AqD92koCTk~9R56LYhXnpSnw-hbE5EkPCPq7wVJYz1VvhLClSrujaN7dJesIt7aRcSycPwIx5zk0OvcNkPVCqTRcFg5ksBQdReHhYtdH84idohtvawXuYpw__" alt="img" />
                    </div>

                    <p>
                        The founders started this company to &nbsp;
                        <span className='leading-[24px] font-semibold'>
                            change this perception and look forward
                        </span>
                        &nbsp;
                        to showing you how much better your Property or Association can be managed.
                    </p>
                </div>
            </div>
            <div className='w-10/12 mx-auto bg-slate-200 h-[0.5px] mb-5'></div>
            {/* service card section */}
            <div className='w-full px-5 py-5 space-y-6 '>
                {
                    dummyCardData.map((one) => {
                        return <Card img={one?.img} text={one?.text} key={one?.text} />
                    })
                }
            </div>
            {/* commercial message section */}
            <div className='bg-[#158BE3] h-[600px] py-[56px] px-6'>
                <CommercialMessageCard />
            </div>

            {/* Footer */}
            <Footer />

        </div>
    )
}

export default Home;