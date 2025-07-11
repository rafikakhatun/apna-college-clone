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
            <section className="py-10 px-4 bg-[#F8F8FD]">
                <p className="text-3xl text-center mt-20">
                    Thousands of students achieved their
                    <span className="text-3xl text-indigo-700 font-semibold"> dream job at </span>
                </p>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-8 p-4 place-items-center">
                    <div><img src={amazon} alt="Amazon" width="150" height="150"/></div>
                    <div><img src={google} alt="Google" width="150" height="150" /></div>
                    <div><img className="mb-1" src={microsoft} alt="Microsoft" width="150" height="150" /></div>
                    <div><img src={goldman} alt="Goldman Sachs" width="100" height="100" /></div>
                    <div><img src={paypal} alt="PayPal" width="100" height="100" /></div>
                    <div><img src={samsung} alt="Samsung" width="100" height="100" /></div>
                    <div><img src={salesforce} alt="Salesforce" width="100" height="100" /></div>
                    <div><img src={netapp} alt="NetApp" width="100" height="100" /></div>
                    <div><img src={hitachi} alt="Hitachi" width="100" height="100" /></div>
                    <div><img src={jpmorgan} alt="JPMorgan" width="100" height="100" /></div>
                    <div><img src={ibm} alt="IBM" width="100" height="100" /></div>
                    <div><img src={dell} alt="Dell" width="100" height="100" /></div>
                    <div><img src={deloitte} alt="Deloitte" width="100" height="100" /></div>
                    <div><img className="mt-4" src={kpmg} alt="KPMG" width="100" height="100" /></div>
                    <div><img src={mercedes} alt="Mercedes" width="100" height="100" /></div>
                    <div><img src={ey} alt="EY" width="100" height="100" /></div>
                    <div><img src={airtel} alt="Airtel" width="100" height="100" /></div>
                    <div><img src={tcs} alt="TCS" width="100" height="100" /></div>
                </div>

                {/* many more */}
                <div className="text-center mb-7">
                    <a className="text-slate-500 text-lg">+ many more</a>
                </div>

                {/* line border */}
                <div className="border border-black mt-12"></div>
            </section>
        </>
    );
}

export default JobCompanies;
