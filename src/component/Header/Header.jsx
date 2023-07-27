import img from '../../assets/img-student-3 2.png'
const Header = () => {
    return (
        <div className="grid grid-cols-2">
            <div>
                <h1 className="text-2xl">Start Your IELTS Preparation And Get Desire Bands</h1>
            </div>
            <div className='h-[400px] w-[400px] bg-rose-400'>
                <img src={img} className='h-[400px] w-[400px]' alt="" />
            </div>
        </div>
    );
};

export default Header;