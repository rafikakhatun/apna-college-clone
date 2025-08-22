import { Eye, Link2, Users } from "lucide-react";

function CodingCommunity() {
    return (
        <>

            <section className="bg-gradient-to-r from-[#3f51b5] via-[#5c6bc0] to-[#7986cb] text-white py-10 px-4" data-aos="fade-up">
                <div className="text-center space-y-6" data-aos="fade-up">
                    <h2 className="text-xl md:text-2xl font-semibold uppercase" data-aos="zoom-in">
                        INDIA'S MOST LOVED CODING COMMUNITY ❤️
                    </h2>

                    <div className="flex flex-col md:flex-row justify-center gap-10 mt-6" data-aos="fade-up">
                        {/* Happy Learners */}
                        <div className="flex flex-col items-center" data-aos="fade-right">
                            <div className="flex flex-row gap-2" data-aos="zoom-in">
                                <Users size={28} className=" text-white" />
                                <p className="text-xl font-semibold">6,000,000+</p>
                            </div>
                            <p className="text-xs font-semibold">HAPPY LEARNERS</p>
                        </div>

                        {/* Monthly Views */}
                        <div className="flex flex-col items-center" data-aos="fade-up">
                            <div className="flex flex-row gap-2" data-aos="zoom-in">
                                <Eye size={28} className=" text-white" />
                                <p className="text-xl font-semibold">2 CRORE+</p>
                            </div>
                            <p className="text-xs font-semibold">MONTHLY VIEWS</p>
                        </div>

                        {/* New Subscribers */}
                        <div className="flex flex-col items-center" data-aos="fade-left">
                            <div className="flex flex-row gap-2" data-aos="zoom-in">
                                <Link2 size={28} className=" text-white" />
                                <p className="text-xl font-semibold">100,000+</p>
                            </div>
                            <p className="text-xs font-semibold text-center">NEW MONTHLY SUBSCRIBERS</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CodingCommunity;
