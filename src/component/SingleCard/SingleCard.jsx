import './SingleCard.css'
// eslint-disable-next-line react/prop-types
const SingleCard = ({img,heading,para}) => {
    return (
        <div className=' service-card bg-[#0D1948] flex flex-col items-center  rounded-xl space-y-2  p-5'>
            <img src={img} className=' h-12 rounded-full bg-white p-2' alt="" />
            <h4 className='font-semibold'>{heading}</h4>
            <p className='text-xs'>{para}</p>
        </div>
    );
};

export default SingleCard;