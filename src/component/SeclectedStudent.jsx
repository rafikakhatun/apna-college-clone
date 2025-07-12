import { useEffect, useState } from "react";
import SelectedStudentData from "./SelectedStudentData";
import { ChevronRight } from "lucide-react";

function SelectedStudent() {

    const [data, setData] = useState([]);

    // json data api call

    const fetachJsonData = async () =>{

        const response = await fetch("/selectedStudentData.json")

        const result = await response.json();

        setData(result);




    } 

    useEffect(() =>{

         fetachJsonData()

    },[])
    









    return (
        <>
            <section className="py-16 px-10 bg-[#F8F8Fd]">
                {/* grid box */}
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">

                    {data.map((datas,index)=>(

                         <SelectedStudentData key={index} userData={datas}></SelectedStudentData>

                    ))}

                   
                    
                </div>

                <div className="flex items-center justify-center py-10">
                    <button className="bg-blue-800 text-white rounded-md px-10 py-4 text-lg flex cursor-pointer">See More<ChevronRight size={22} className="mt-1" /></button>
                </div>

            </section>


        </>
    )
}

export default SelectedStudent;