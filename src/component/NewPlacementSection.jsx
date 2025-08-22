import { ChevronsRight } from "lucide-react";

function NewPlacementSection() {

    return (
        <>
            <section className="py-12 px-4 flex justify-center items-center " data-aos="fade-up">
                <div className="text-center space-y-4" data-aos="fade-up">
                    <h1 className="text-[#354Ac5]" data-aos="zoom-in">New PLACEMENT PREP Batch🔥
                    </h1>
                    <p className="text-xl font-semibold" data-aos="fade-up">Sigma 8.0 : Development + DSA + Aptitude</p>
                    <p className="text-gray-800" data-aos="fade-up">Start your placement preparation today!</p>
                    <div className="flex justify-center items-center" data-aos="zoom-in">
                        <button className="flex bg-[#6674cc] px-6 py-3 rounded-md text-white font-semibold" data-aos="zoom-in">Explore more
                            <ChevronsRight size={20} className="mt-1" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewPlacementSection;
