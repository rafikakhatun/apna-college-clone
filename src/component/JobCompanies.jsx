import amazon from "../assets/amazonlogo.png";
import google from "../assets/google logo.png";
import microsoft from "../assets/microsoft logo.jpg";
import goldman from "../assets/Goldman-Sachs-Logo.png";
import paypal from "../assets/paypal logo.png";
import samsung from "../assets/Samsung-Logo.jpg";
import salesforce from "../assets/salesforce logo.jpg";
import netapp from "../assets/netapp logo.png";
import hitachi from "../assets/HITACHI LOGO.png";
import jpmorgan from "../assets/jpmorgan logo.png";
import ibm from "../assets/ibm logo.png";
import dell from "../assets/dell logo.png";
import deloitte from "../assets/deolitte logo.jpeg";
import kpmg from "../assets/kpmg logo.png";
import mercedes from "../assets/mercedes logo.png";
import ey from "../assets/ey logo.png";
import airtel from "../assets/airtel logo.png";
import tcs from "../assets/tcs2 logo.png";

function JobCompanies() {
    return (
        <>
            {/* our job company */}
            <section className="py-10 px-4 bg-[#F8F8FD]" data-aos="fade-up">
                <p className="text-3xl text-center mt-20" data-aos="zoom-in">
                    Thousands of students achieved their
                    <span className="text-3xl text-indigo-700 font-semibold"> dream job at </span>
                </p>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-8 p-4 place-items-center" data-aos="fade-up" data-aos-delay="100">
                    <div data-aos="zoom-in"><img src={amazon} alt="Amazon" width="150" height="150"/></div>
                    <div data-aos="zoom-in" data-aos-delay="100"><img src={google} alt="Google" width="150" height="150" /></div>
                    <div data-aos="zoom-in" data-aos-delay="200"><img className="mb-1" src={microsoft} alt="Microsoft" width="150" height="150" /></div>
                    <div data-aos="zoom-in" data-aos-delay="300"><img src={goldman} alt="Goldman Sachs" width="100" height="100" /></div>
                    <div data-aos="zoom-in" data-aos-delay="400"><img src={paypal} alt="PayPal" width="100" height="100" /></div>
                    <div data-aos="zoom-in" data-aos-delay="500"><img src={samsung} alt="Samsung" width="100" height="100" /></div>
                    <div data-aos="zoom-in" data-aos-delay="600"><img src={salesforce} alt="Salesforce" width="100" height="100" /></div>
                    <div data-aos="zoom-in" data-aos-delay="700"><img src={netapp} alt="NetApp" width="100" height="100" /></div>
                    <div data-aos="zoom-in" data-aos-delay="800"><img src={hitachi} alt="Hitachi" width="100" height="100" /></div>
                    <div data-aos="zoom-in" data-aos-delay="900"><img src={jpmorgan} alt="JPMorgan" width="100" height="100" /></div>
                    <div data-aos="zoom-in" data-aos-delay="1000"><img src={ibm} alt="IBM" width="100" height="100" /></div>
                    <div data-aos="zoom-in" data-aos-delay="1100"><img src={dell} alt="Dell" width="100" height="100" /></div>
                    <div data-aos="zoom-in" data-aos-delay="1200"><img src={deloitte} alt="Deloitte" width="100" height="100" /></div>
                    <div data-aos="zoom-in" data-aos-delay="1300"><img className="mt-4" src={kpmg} alt="KPMG" width="100" height="100" /></div>
                    <div data-aos="zoom-in" data-aos-delay="1400"><img src={mercedes} alt="Mercedes" width="100" height="100" /></div>
                    <div data-aos="zoom-in" data-aos-delay="1500"><img src={ey} alt="EY" width="100" height="100" /></div>
                    <div data-aos="zoom-in" data-aos-delay="1600"><img src={airtel} alt="Airtel" width="100" height="100" /></div>
                    <div data-aos="zoom-in" data-aos-delay="1700"><img src={tcs} alt="TCS" width="100" height="100" /></div>
                </div>

                {/* many more */}
                <div className="text-center mb-7" data-aos="fade-up" data-aos-delay="1800">
                    <a className="text-slate-500 text-lg">+ many more</a>
                </div>

                {/* line border */}
                <div className="border border-gray-600 mt-12 opacity-80" data-aos="fade-up" data-aos-delay="1900"></div>
            </section>
        </>
    );
}

export default JobCompanies;
