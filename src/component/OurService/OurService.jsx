import img1 from '../../assets/women-png-img 1.png'
import img2 from '../../assets/Group 917.png'
import img3 from '../../assets/board logo_high 1.png'
import img4 from '../../assets/accommodation 1.png'
import img5 from '../../assets/boarding-pass 2.png'
import img6 from '../../assets/community 1.png'
import img7 from '../../assets/real-estate (1) 1.png'
import './OurService.css'
const OurService = () => {
    return (
        <div className='bg-gradient-to-r from-[#081C47] to-[#520267] my-5 grid grid-cols-2 px-20 relative h-[500px]  rounded-2xl'>
            <div>
                <div className=' absolute bottom-0 w-[450px]'>
                    <img src={img2} className='h-[450px]' alt="" />
                    <img src={img1} className='h-[280px] w-[300px] absolute bottom-0' alt="" />
                    <img src={img3} className='absolute top-10 h-[80px] w-[100px] left-14' alt="" />
                </div>
            </div>

            <div className='mt-10'>
                <h1 className='text-4xl font-bold text-white text-center mb-10'>Our Service</h1>
                {/* top two card */}
                <div className='flex justify-center  gap-5'>
                    <div className='border relative rounded-2xl p-4 service-card'>
                        <img src={img4} className='absolute -top-6 h-12 bg-white rounded-xl p-2' alt="" />
                        <div className='text-white mt-4'>
                            <h1 className='text-xl font-semibold mb-2'>accommodation</h1>
                            <ol className=''>
                                <li>20,000+ Listed Properties across 5 countries.</li>
                                <li>100+cities</li>
                            </ol>

                        </div>
                    </div>
                    <div className=' border relative rounded-2xl p-4 service-card'>
                        <img src={img5} className='absolute -top-6 h-12 bg-white rounded-xl p-2' alt="" />
                        <div className='text-white mt-4'>
                            <h1 className='text-xl font-semibold mb-2'>accommodation</h1>
                            <ol className=''>
                                <li>20,000+ Listed Properties across 5 countries.</li>
                                <li>100+cities</li>
                            </ol>

                        </div>
                    </div>
                </div>
                {/* bottom two card */}
                <div className='flex justify-center  gap-5'>
                    <div className='my-10 border relative rounded-2xl p-4 service-card'>
                        <img src={img6} className='absolute -top-6 h-12 bg-white rounded-xl p-2' alt="" />
                        <div className='text-white mt-4'>
                            <h1 className='text-xl font-semibold mb-2'>accommodation</h1>
                            <ol className=''>
                                <li>20,000+ Listed Properties across 5 countries.</li>
                                <li>100+cities</li>
                            </ol>

                        </div>
                    </div>
                    <div className='my-10 border relative rounded-2xl p-4 service-card'>
                        <img src={img7} className='absolute -top-6 h-12 bg-white rounded-xl p-2' alt="" />
                        <div className='text-white mt-4'>
                            <h1 className='text-xl font-semibold mb-2'>accommodation</h1>
                            <ol className=''>
                                <li>20,000+ Listed Properties across 5 countries.</li>
                                <li>100+cities</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurService;