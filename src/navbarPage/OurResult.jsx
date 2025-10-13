import Footer from '../component/Footer';
import { Link } from 'react-router-dom';

const OurResult = () => {
    return (
        <>
            {/*header section */}
            <header className='px-10 py-4 flex justify-between items-center'>
                {/*left content*/}
                <div className='flex gap-6 items-center'>
                    <h1 className='text-[#4084F6] font-bold text-xl leading-tight'>APNA<br/> <span className='text-gray-700'>COLLEGE</span></h1>
                   <button className='text-white bg-[#4084F6] p-2 rounded-full cursor-pointer hidden md:flex'>Course</button>
                </div>
                {/*right content */}
                <div className='flex gap-4 items-center'>
                    <button className='text-white bg-[#4084F6] rounded-full p-2 cursor-pointer'>New Sigma 9.0</button>
                    <Link className='text-gray-8000 cursor-pointer'>DSA sheet</Link>
                </div>
                
            </header>
           
           <Footer></Footer>
        </>
    );
};

export default OurResult;