import { ChevronsRight } from "lucide-react";

function NewPlacementSection() {

    return (
        <>
            <section className="py-12 px-4 flex justify-center items-center ">
                <div className="text-center space-y-4">
                    <h1 className="text-[#354Ac5] ">New PLACEMENT PREP Batch🔥
                    </h1>
                    <p className="text-xl font-semibold">Sigma 8.0 : Development + DSA + Aptitude</p>
                    <p className="text-gray-800">Start your placement preparation today!</p>
                    <div className="flex justify-center items-center">
                        <button className="flex   bg-[#6674cc] px-6 py-3 rounded-md text-white font-semibold">Explore more
                            <ChevronsRight size={20} className="mt-1"  />
                        </button>

                    </div>
                </div>
            </section>



        </>

    )


}

export default NewPlacementSection;