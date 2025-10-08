import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const DsaSheet = () => {
    return (
       <>
       <Navbar></Navbar>
       <section className='px-10 py-14 flex flex-col justify-center items-center'>

        <h1 className='text-xl  font-semibold mb-2'><span className='text-[#6674cc]'>DSA PRACTICE</span> SHEET</h1>
        <p className='text-gray-700 text-sm'>Note - This Sheet is only meant for <b>Alpha</b> & <b>Sigma </b>students.</p>

       </section>
       <Footer></Footer>
       
       
       
       </>
    );
};

export default DsaSheet;