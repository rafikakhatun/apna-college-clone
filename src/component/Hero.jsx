import ShradhaKhapra from "../assets/Shradha Khapra.jpeg";


function Hero() {
    return (
        <>
            <section className="  py-24 px-20  bg-gradient-to-r from-white via-white to-[#CDD1EE]" data-aos="fade-up">
                <div className="flex flex-col gap-6 md:flex-row justify-between  items-center" data-aos="fade-up">
                    <div className="space-y-6" data-aos="fade-right">
                        <p className="text-2xl md:text-4xl font-semibold" data-aos="fade-up">Learn & become the <br />
                            <span className="font-semibold text-[#354Ac5] block mt-2" data-aos="zoom-in">Top 1% software developer</span>
                        </p>
                        <p className="text-xl text-gray-800 " data-aos="fade-up">DSA + Web Development</p>
                        <button className="px-8 py-3 rounded-md text-white bg-[#354Ac5] hover:bg-blue-800 font-semibold cursor-pointer" data-aos="zoom-in"><span className="text-[#FFEB3A]">Ultimate</span> Placement Solution</button>
                    </div>
                    {/* hero section image */}
                    <div data-aos="fade-left">
                        <img className="w-96 h-96 rounded-t-full object-center" src={ShradhaKhapra} alt="ShradhaKhapraImage" data-aos="zoom-in" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;
