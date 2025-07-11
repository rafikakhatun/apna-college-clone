
import ShradhaKhapra from "../assets/Shradha Khapra.jpeg";


function Hero() {
    return (
        <>
            <section className="py-24 px-20  bg-gradient-to-r from-white via-white to-[#CDD1EE]">
                <div className="flex flex-col gap-6 md:flex-row justify-between  items-center">
                    <div className="space-y-5">
                        <p className="text-2xl md:text-4xl font-semibold">Learn & become the <br />
                            <span className="font-semibold text-[#354Ac5] block mt-2">Top 1% software developer</span>
                        </p>
                        <p className="text-xl text-gray-800 ">DSA + Web Development</p>
                        <button className="px-8 py-3 rounded-md text-white bg-[#354Ac5] hover:bg-blue-800 font-semibold cursor-pointer"><span className="text-[#FFEB3A]">Ultimate</span> Placement Solution</button>
                    </div>
                    {/* hero section image */}
                    <div>
                        <img className="w-96 h-96 rounded-t-full object-center" src={ShradhaKhapra} alt="ShradhaKhapraImage" />
                    </div>
                </div>
            </section>


        </>

    )
}

export default Hero;