import img1 from '../../assets/release (1) 1.png'
import img2 from '../../assets/webinar (1) 1.png'
import img3 from '../../assets/online-learning (2) 1.png'
import './Card.css'
import SingleCard from '../SingleCard/SingleCard';

// eslint-disable-next-line react/prop-types
const Card = () => {
    return (
      <div className='flex justify-between items-center text-white  mx-28 my-10'>
        <SingleCard img={img1} heading={'Free IELTS Modules'}  para={'20,000+ Listed Properties across 5 countries.'}></SingleCard>
        <SingleCard img={img2} heading={'Offline Classes'}  para={'20,000+ Listed Properties across 5 countries.'}></SingleCard>
        <SingleCard img={img3} heading={'Live / Online Classes'}  para={'20,000+ Listed Properties across 5 countries.'}></SingleCard>     
      </div>
    );
};

export default Card;