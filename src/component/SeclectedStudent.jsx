import { useEffect, useState } from "react";
import SelectedStudentData from "./SelectedStudentData";

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
            <section className="py-16 px-10">
                {/* grid box */}
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">

                    {data.map((datas,index)=>(

                         <SelectedStudentData key={index} userData={datas}></SelectedStudentData>

                    ))}

                   
                    
                </div>

            </section>


        </>
    )
}

export default SelectedStudent;