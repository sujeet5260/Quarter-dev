'use client';
import React from 'react'

export default function Card(){

    return(

        <main className='w-full h-[50.25rem]  pt-[7.5rem] pb-[5.625rem] lg:flex justify-center items-center   '>

            <div className='grid grid-cols-2 m-[2rem]  '>
                <div className='"Left-box" w-[32rem] h-[48.125rem] drop-shadow-xl  ml-[2.5rem] mt-[2rem] ' >
                    <img className='' src="./Media/7.png" alt="" />

                    <div className='w-[19rem] h-[15rem] flex bottom-[11.2rem] left-[0.5rem] absolute'>
                        <div>
                            <img src="./Media/8.png" alt="" />
                        </div>

                    </div>

                </div>

                <div className=' flex flex-col justify-start -[60rem] mt-[3.5rem] mb-[1.25rem] w-[39.375rem] h-[39.39rem]'>
                    <h1 className=''><span className='text-[#FF5A3C]  bg-[#FFEEEB] font-medium rounded-full bg-[#FFEEEB] px-[1.2rem] py-[0.4rem] m-[1rem]'>About Us</span></h1>

                    <h1 className='font-bold font-poppins text-[2.75rem] leading-snug mt-[1rem]'>The Leading Real Estate Rental Marketplace<span className='text-[#FF5A3C] w-[0.75rem] h-[3.813rem]'>.</span></h1>
                    <p className='pt-[0.80rem] text-slate-500'>Over 39,000 people work for us in more than 70 countries all over 
                        <br/>
                        the This breadth of global coverage, combined with specialist
                        <br/>
                        services
                         </p>
                    
                    

                    <div className=' flex justify-start  items-center mt-[1.5rem]  flex-row '>
                        <ul className='grid grid-cols-2 grid-rows-2 gap-2 items-center '>
                            <li className='flex justify-center items-center gap-4'><div className='bg-[#FFEEEB] flex justify-center items-center rounded-full size-[2.8rem]'><img className='w-5 h-5 size-[1.25rem]' src="./Media/icon/home-icon.png" alt="" /></div> Smart Home Design</li>

                            <li className='flex justify-center items-center gap-4 ml-10' > <div className='bg-[#FFEEEB] flex justify-center items-center rounded-full size-[2.8rem]'><img className='w-5 h-5 size-[1.25rem]' src="./Media/icon/mountain.png" alt="" /></div> Beautiful Scene Around</li>

                            <li className='flex justify-center items-center gap-4' > <div className='bg-[#FFEEEB] flex justify-center items-center rounded-full size-[2.8rem]'><img className='w-5 h-5 size-[1.25rem]' src="./Media/icon/Lifestyle.png" alt="" /></div> Exceptional Lifestyle</li>

                            <li className='flex justify-center items-center gap-4 ml-10' > <div className='bg-[#FFEEEB] flex justify-center items-center rounded-full size-[2.8rem]'><img className='w-5 h-5 size-[1.25rem]' src="./Media/icon/security.png" alt="" /></div> Complete 24/7 Security</li>

                        </ul>

                    </div>
                    <div className='border-l-4 border-[#FF5A3C] w-[36.632rem] h-[5.099rem] bg-[#FFEEEB] border-solid text-[1rem] border-l-[#FF5A3C] mt-8'>
                        <div className=' w-[36.632rem] h-[3.599rem] mt-3 ml-6'>
                            <p>Enimad minim veniam quis nostrud exercitation
                                <br/>
                                llamco laboris. Lorem ipsum dolor sit amet
                                
                            </p>
                            

                        </div>
                        <div className='pt-[4rem] text-white'>
                            <button className='w-[12.609rem] h-[3.694rem] py-[1.063rem] px-[2.5rem] bg-[#FF5A3C]  '><span className='text-white'>OUR SERVICES</span></button>
                        </div>

                    </div>
                </div>
            

                

            </div>


        </main>
    );
};
