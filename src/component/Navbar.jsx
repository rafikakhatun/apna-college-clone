import { AlignJustify, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpModal from '../modals/SignUpModal';
import LoginModal from '../modals/LoginModal';

function Navbar() {

  // responsive navbar useState

  const [isOpen, setIsOpen] = useState(false);

  // modal signup button usestate

  const [isOpenSignUp,setIsOpenSignUp] = useState(false);

  // modal  Login usestate

  const [isOpenLogin,setIsOpenLogin] = useState(false)










  return (
    <>
      <section className='py-2 px-6 shadow border-b border-gray-100 w-full bg-white relative '>
        <nav className='flex justify-between items-center px-1 md:px-6 '>
          <img className="w-26 h-14" data-aos="fade-up" src="src/assets/apna logo.png" alt="" />

          {/* Desktop Menu */}
          <ul className='md:flex lg:flex hidden gap-6 text-lg'>
            <li data-aos="fade-up"><Link to="/results">Our Results</Link></li>
            <li data-aos="fade-up" className='bg-[#6674cc] hover:bg-indigo-500 text-white py-2 px-6 rounded-md '><Link to="/sigma">New Sigma 8.0</Link></li>
            <li data-aos="fade-up"><Link to="/dsa-sheet">DSA Sheet</Link></li>
            <li data-aos="fade-up"><Link to="/new-course">New Course</Link></li>

            {/* log in button */}
            <button onClick={()=>setIsOpenLogin(true)} data-aos="fade-up">Log in</button>

            {/* sign up button */}
            <button onClick={()=>setIsOpenSignUp(true)} className='px-3 py-1 border-2 border-[#6674cc] text-[#6674cc] rounded-md cursor-pointer' data-aos="fade-up">Sign up</button>
          </ul>
          {/* hamburger toggle icon */}

          <div className='block md:hidden lg:hidden' >
            <button  onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={36} className='text-gray-500' /> : <AlignJustify size={36} className='text-gray-500' />}

            </button>
          </div>

        </nav>
      </section>





      {/* mobile menu */}
      {isOpen  && (<ul className='flex flex-col w-full h-screen justify-center items-center space-y-1 md:hidden lg:hidden'>

        <li data-aos="fade-up" className='text-2xl text-[#6674cc] cursor-pointer font-light'>Our Result</li>
        <li data-aos="fade-up" className='text-2xl text-[#6674cc] cursor-pointer font-light'>New Sigma 8.0</li>
        <li data-aos="fade-up" className='text-2xl text-[#6674cc] cursor-pointer font-light'>DSA Sheet</li>
        <li data-aos="fade-up" className='text-2xl text-[#6674cc] cursor-pointer font-light'>New Courses</li>
        <button onClick={()=> setIsOpenLogin(true)} className='text-2xl text-[#6674cc] cursor-pointer font-light' data-aos="fade-up">Log in</button>
        <button onClick={()=>setIsOpenSignUp(true)}  className='text-2xl text-[#6674cc] cursor-pointer font-light' data-aos="fade-up">Sign up</button>


      </ul>)}

      {/* signup  modal show condition */}
      <SignUpModal isOpen={isOpenSignUp} onClose={()=>setIsOpenSignUp(false)} ></SignUpModal>
      <LoginModal isOpenLoginModal={isOpenLogin} onCloseLoginModal={()=>setIsOpenLogin(false)}></LoginModal>
      


    </>
  );
}

export default Navbar;
