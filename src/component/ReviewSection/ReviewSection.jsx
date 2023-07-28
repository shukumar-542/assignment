import './ReviewSection.css'
import img from '../../assets/Rectangle5422.png'
import { BiSolidQuoteRight } from 'react-icons/bi';
import img1 from '../../assets/Image.png'
import { BiSolidStar } from 'react-icons/bi';


const ReviewSection = () => {

  return (

    <div className="relative  h-[500px] w-[700px] mx-auto">
        <img src={img} className=' h-[500px] w-[700px]' alt="" />
      <div className='absolute top-0 p-12 w-3/4 '>
        <h1 className='text-2xl font-bold mt-5 ps-5'>Freda Collier</h1>
        <hr className="w-20 h-1 mx-auto mb-4 bg-gray-100 border-0 rounded  dark:bg-gray-700" />
        <p className='ps-5' >
          <span >
            <BiSolidQuoteRight></BiSolidQuoteRight>
          </span>
          Ipsum vel nobis doloremque est aut non accusantium vero molestias. Et est minima dolorem
          eum modi atque sint nobis. Enim quod facere. Reiciendis necessitatibus ipsam non aspernatur
          voluptate id.
          lorem200
          <span className='flex justify-end me-5'>
            <BiSolidQuoteRight></BiSolidQuoteRight>
          </span>
        </p>
        <div className='flex ms-5 gap-2 mt-10'>
          <BiSolidStar></BiSolidStar>
          <BiSolidStar></BiSolidStar>
          <BiSolidStar></BiSolidStar>
          <BiSolidStar></BiSolidStar>
          <BiSolidStar></BiSolidStar>
        </div>
      </div>
      <div className='absolute h-[220px] right-0 top-24'>
      <img src={img1} className='h-[220px] w-[200px] relative z-10' alt="" />
      <div className='bg-[#031D44] h-[200px] absolute top-0 rounded-md -rotate-12 w-[200px]'>
      </div>
    </div> 

    </div>
  );
};

export default ReviewSection;