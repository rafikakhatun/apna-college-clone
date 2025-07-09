import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <section className='py-2 px-6 shadow w-full'>
        <nav className='flex justify-between items-center px-6'>
          <img className="w-26 h-14" src="src/assets/apna logo.png" alt="" />

          <ul className='flex gap-6 text-lg  '>
            <li><Link to="/results">Our Results</Link></li>
            <li className='bg-[#6674cc] hover:bg-indigo-500 text-white py-2 px-6 rounded-md '><Link to="/sigma">New Sigma 8.0</Link></li>
            <li><Link to="/dsa-sheet">DSA Sheet</Link></li>
            <li><Link to="/new-course">New Course</Link></li>
            <li><Link to="/login">Log in</Link></li>
            <li className='px-3 py-1 border-2 border-[#6674cc] text-[#6674cc] rounded-md'><Link to="/signup">Sign up</Link></li>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
