import { ChevronRight, Mail, Phone } from "lucide-react";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube
} from "react-icons/fa";

import apnaCollegeLogo from "../assets/apna logo.png"

function Footer() {
    return (
        <>

            <section className="w-full py-20 px-14">
                <footer
                    className="flex flex-col md:flex-row justify-evenly items-start p-6 space-y-8"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    {/* profile information link */}
                    <div className="flex flex-col space-y-4" data-aos="fade-right" data-aos-delay="200">
                        <img src={apnaCollegeLogo} alt="Logo" width="100" height="100" />
                        <a className="text-[#6674CC] text-md md:text-lg" href="#">
                            Where education meets <br className="hidden md:block" /> real-world needs.
                        </a>
                    </div>

                    {/* helpful links */}
                    <div className="flex flex-col" data-aos="zoom-in" data-aos-delay="300">
                        <p className="text-[#6674CC] font-bold">HELPFUL LINKS</p>
                        <a className="text-[#6674CC] mt-2 flex text-sm md:text-lg" href="#"><ChevronRight />Courses</a>
                        <a className="text-[#6674CC] mt-2 flex text-sm md:text-lg" href="#"><ChevronRight />Privacy Policy</a>
                        <a className="text-[#6674CC] mt-2 flex text-sm md:text-lg" href="#"><ChevronRight />Refund Policy</a>
                        <a className="text-[#6674CC] mt-2 flex text-sm md:text-lg" href="#"><ChevronRight />Terms & Conditions</a>
                    </div>

                    {/* this is gmail-id link */}
                    <div className="flex flex-col" data-aos="fade-left" data-aos-delay="400">
                        <p className="font-bold">GET IN TOUCH</p>
                        <div className="mt-3">
                            <div className="flex items-center mt-2 ">
                                <Mail className="text-blue-900 w-5 h-5" />
                                <a className="ml-2 text-gray-700 text-sm md:text-lg" href="#">alpha@apnacollege.in</a>
                            </div>
                            <div className="flex items-center mt-2">
                                <Mail className="text-blue-900 w-5 h-5" />
                                <a className="ml-2 text-gray-700 text-sm md:text-lg" href="#">delta@apnacollege.in</a>
                            </div>
                            <div className="flex items-center mt-2">
                                <Mail className="text-blue-900 w-5 h-5" />
                                <a className="ml-2 text-gray-700 text-sm md:text-lg" href="#">sigma@apnacollege.in</a>
                            </div>
                            <div className="flex items-center mt-2">
                                <Phone className="text-blue-900 w-5 h-5" />
                                <a className="ml-2  text-sm md:text-lg" href="#">Support Team : 10am-6pm</a>
                            </div>
                        </div>
                    </div>

                    {/* social media link */}
                    <div className="flex flex-col" data-aos="zoom-in-up" data-aos-delay="500">
                        <p className="font-bold">CONNECT WITH US</p>
                        <a className="text-[#6674CC] mt-3 flex items-center gap-2" href="#">
                            Facebook  <FaFacebook className="text-[#6674CC] w-5 h-5" />
                        </a>
                        <a className="text-[#6674CC] flex items-center gap-2" href="#">
                            Instagram <FaInstagram className="text-[#6674CC] w-5 h-5" />
                        </a>
                        <a className="text-[#6674CC] flex items-center gap-2" href="#">
                            Linkedin <FaLinkedin className="text-[#6674CC] w-5 h-5" />
                        </a>
                        <a className="text-[#6674CC] flex items-center gap-2" href="#">
                            YouTube <FaYoutube className="text-[#6674CC] w-5 h-5" />
                        </a>
                        <a className="text-[#6674CC] flex items-center gap-2" href="#">
                            Twitter <FaTwitter className="text-[#6674CC] w-5 h-5" />
                        </a>
                    </div>
                </footer>

                {/* footer copyright text */}
                <p className="text-md mt-7 text-center text-gray-600" data-aos="fade-up" data-aos-delay="600">
                    Copyright © 2025
                </p>
            </section>
        </>
    )
}

export default Footer;
