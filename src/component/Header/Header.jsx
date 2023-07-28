import img from '../../assets/img-student-3 2.png'
import { BsStopwatch } from 'react-icons/bs';
import { TbPointFilled } from 'react-icons/tb';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';

const Header = () => {
    const [value, setValue] = useState()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center hero-image my-container">
            <div className='mx-4 md:ms-28 mt-10 '>
                <h1 className="text-3xl text-[#051C45] font-bold text-center ">Start Your IELTS Preparation And Get Desire Bands</h1>
                <div className='mt-3 text-center '>
                    <p className='text-xs'><TbPointFilled className='inline-block ms-1'></TbPointFilled>Get access to IELTS Centralised Library </p>
                    <p className='text-xs'><TbPointFilled className='inline-block ms-1'></TbPointFilled>British Council Certified Teacher</p>
                </div>
                <div className='mt-5 shadow-lg rounded-lg py-8'>
                    <div className='flex justify-between px-10 mb-2'>
                        <p className='text-xs flex items-center gap-1'> <BsStopwatch></BsStopwatch> start</p>
                        <p className='text-xs'> <span className='bg-gray-400 px-1 rounded-full text-white'>2</span> Fill Details</p>
                        <p className='text-xs'> <span className='bg-gray-400 px-1 rounded-full text-white'>3</span>Confirm</p>
                    </div>
                    <div className='px-10'>
                        <h2 className='text-2xl font-bold my-4 text-[#051C45]'>Free IELTS classes</h2>
                        <form action="">
                            <div className='my-5 w-full space-y-4'>
                                <input type="text" className='focus:outline-0 shadow-md px-5 py-2 rounded-md w-full' placeholder='Enter Your Full Name' />
                                <div className='flex gap-2 '>
                                    
                                    <PhoneInput
                                        placeholder="Enter phone number"
                                        value={value}
                                        defaultCountry="IN"
                                        international
                                        countryCallingCodeEditable={false}
                                        className='shadow-md px-5 py-2 rounded-md w-full focus:outline-0'
                                        onChange={setValue} />
                                    {/* <input type="text" className='shadow-md px-5 py-2 rounded-md w-full' placeholder='Phone Number' /> */}
                                </div>
                                <button className='bg-[#051C45] w-full rounded-md text-white py-2 font-semibold'>Continue</button>
                                <p className='text-xs text-[#051C45] text-center'>By continuing, you agree to our <span className='font-semibold'> Term of services & Privacy policy</span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='ms-20 mt-36 md:ms-40  '>

                <div className='bg-[#051C45] z-10 h-[200px] w-[200px] md:h-[360px] md:w-[350px] relative  rounded-full '>
                    <img src={img} className='h-[370px] w-[350px] absolute rounded-b-full bottom-0 ' alt="" />
                    <div className='bg-[#99A4B3] w-1/2 text-center absolute px-4 py-3 font-semibold -left-16 rounded-2xl shadow-md opacity-80 top-0 md:top-12'>
                        <p className='bg-[#0400CA]  h-3 w-3 rounded-full absolute -top-1'></p>
                        <p className='text-sm'>Student Visa</p>
                    </div>
                    <div className='bg-[#99A4B3] w-1/2 text-center absolute px-4 py-3 font-semibold -left-16 rounded-2xl shadow-md opacity-80  bottom-14'>
                        <p className='bg-[#B600E3] h-3 w-3  rounded-full absolute -top-1 right-10'></p>
                        <p className='text-sm'>Permanent Resident</p>
                    </div>
                    <div className='bg-[#99A4B3] w-1/2 text-center absolute px-4 py-3 font-semibold -right-16 rounded-2xl shadow-md opacity-80  bottom-1/2'>
                        <p className='bg-[#00B674] h-3 w-3  rounded-full absolute -top-1 right-10'></p>
                        <p className='text-sm'>Work Visa</p>
                    </div>
                </div>
                {/* <div className='absolute top-0 right-0'>
                    <img src={img1} className='h-[600px] w-[450px]' alt="" />
                </div>
                <div className='absolute top-8 right-0'>
                    <img src={img1} className='h-[550px] w-[400px]' alt="" />
                </div>
                <div className='absolute top-16 right-0 '>
                    <img src={img1} className='h-[500px] w-[350px]' alt="" />
                </div>
                
                <div className='absolute top-16 right-0'>
                    <img src={img2} className='h-[450px] w-[320px]' alt="" />
                </div>
                <div className='absolute top-16 ms-10 right-0'>
                    <img src={img2} className='h-[450px] w-[320px]' alt="" />
                </div>
               
                <div className='absolute top-24 ms-10 right-0'>
                    <img src={img2} className='h-[450px] w-[320px]' alt="" />
                </div> */}



            </div>
        </div>
    );
};

export default Header;