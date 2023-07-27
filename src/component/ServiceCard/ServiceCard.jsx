import './ServiceCard.css'
// eslint-disable-next-line react/prop-types
const ServiceCard = ({img}) => {
    return (
        <div className='my-10 border relative rounded-2xl p-4 service-card'>
            <img src={img} className='absolute -top-6 h-12 bg-white rounded-xl p-2' alt="" />
            <div className='text-white mt-4'>
                <h1 className='text-xl font-semibold mb-2'>accommodation</h1>
                <p>20,000+ Listed Properties across 5 countries. </p>
                <p>100+cities</p>
            </div>
        </div>
    );
};

export default ServiceCard;