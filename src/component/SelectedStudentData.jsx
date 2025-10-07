function SelectedStudentData({ userData }) {

    console.log(userData)

    return (
        <>

            {/* all information box */}
            <div 
                className="w-96 h-96 rounded-2xl shadow-lg mt-10 ml-5" 
                data-aos="fade-up"
            >
                <div 
                    className="w-full h-72 overflow-hidden rounded-t-2xl bg-gradient-to-l to-[#8A59FE] from-[#60D5E8]"
                    data-aos="zoom-in"
                >
                    <p 
                        className="w-8/12 h-10 mt-6 ml-16 rounded-2xl text-white text-2xl font- flex justify-center items-center bg-slate-700"
                        data-aos="fade-down"
                    >
                        {userData?.company}
                    </p>

                    {/* candidate profile section */}
                    <div className="flex justify-between mt-6" data-aos="fade-right">
                        <div>
                            <img 
                                className="rounded-full w-32 h-32 ml-3 bg-white" 
                                src={userData?.profileImage} 
                                alt="photo" 
                                data-aos="zoom-in" 
                            />
                        </div>
                        <div 
                            className="w-7/12 h-32 rounded-s-xl bg-white" 
                            data-aos="fade-left"
                        >
                            <p className="mt-2 ml-4">Name : {userData?.name}</p>
                            <p className="mt-1 ml-4">Branch : {userData?.branch}</p>
                            <p className="mt-1 ml-4">Degree : {userData?.degree}</p>
                            <p className="mt-1 ml-4">Batch :{userData?.batch}</p>
                        </div>
                    </div>

                    {/* salary info */}
                    <p 
                        className="text-center text-md font-semibold mt-6" 
                        data-aos="fade-up"
                    >
                        {userData?.stipend}
                    </p>
                </div>

                {/* company logo section */}
                <div className="w-full flex justify-center items-center" data-aos="zoom-in">
                    <img 
                        className="w-32 h-28 object-contain" 
                        src={userData?.companyLogo} 
                        alt="Google" 
                       
                    />
                </div>
            </div>

        </>
    )
}

export default SelectedStudentData;
