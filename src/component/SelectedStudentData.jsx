function SelectedStudentData({userData}){

    console.log(userData)


    return(
        <>

        {/* all information box */}
                    <div className="w-96 h-96 rounded-2xl shadow-lg mt-10 ml-5">
                        <div className="w-full h-72 overflow-hidden rounded-t-2xl bg-gradient-to-l to-[#8A59FE] from-[#60D5E8]">
                            <p className="w-8/12 h-10 mt-6 ml-16 rounded-2xl text-white text-2xl font- flex justify-center items-center bg-slate-700">
                                {userData?.company}

                            </p>


                            {/* candidate profile section */}
                            <div className="flex justify-between mt-6">
                                <div>
                                    <img className="rounded-full w-32 h-32 ml-3" src={userData?.profileImage} alt="photo" />
                                </div>
                                <div className="w-7/12 h-32 rounded-s-xl bg-white">
                                    <p className="mt-2 ml-4">Name : {userData?.name}</p>
                                    <p className="mt-1 ml-4">Branch : {userData?.branch}</p>
                                    <p className="mt-1 ml-4">Degree : {userData?.degree}</p>
                                    <p className="mt-1 ml-4">Batch :{userData?.batch}</p>
                                </div>
                            </div>

                            {/* salary info */}
                            <p className="text-center text-md font-semibold mt-6">
                               {userData?.stipend}
                            </p>
                        </div>

                        {/* company logo section */}
                        <div className="w-full">
                            <img className="ml-16 mt-2" src={userData?.companyLogo} alt="Google" width="230" height="230" />
                        </div>
                    </div>
        
        
        
        
        </>
    )
}

export default SelectedStudentData;
