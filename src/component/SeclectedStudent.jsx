function SelectedStudent() {
    return (
        <>
            <section className="py-16 px-10">
                <div className="w-96 h-96 rounded-2xl shadow-lg mt-10 ml-5">
                    <div className="w-full h-72 overflow-hidden rounded-t-2xl bg-gradient-to-l to-purple-600 from-sky-300">
                        <p className="w-8/12 h-10 mt-6 ml-16 rounded-2xl text-white text-2xl font- flex justify-center items-center bg-slate-700">
                            Google (intern)
                        </p>

                        {/* candidate profile section */}
                        <div className="flex justify-between mt-6">
                            <div>
                                <img className="rounded-full w-32 h-32 ml-3" src="apna college 2.jpg" alt="photo" />
                            </div>
                            <div className="w-7/12 h-32 rounded-s-xl bg-white">
                                <p className="mt-2 ml-4">Name : Rimi roy</p>
                                <p className="mt-1 ml-4">Branch : CSE</p>
                                <p className="mt-1 ml-4">Degree : Mtech</p>
                                <p className="mt-1 ml-4">Batch : Alpha Student</p>
                            </div>
                        </div>

                        {/* salary info */}
                        <p className="text-center text-xs font-semibold mt-6">
                            Rs 5lakh+/month
                            <br />
                            Stipent
                        </p>
                    </div>

                    {/* company logo section */}
                    <div className="w-full">
                        <img className="ml-16 mt-2" src="google logo.png" alt="Google" width="230" height="230" />
                    </div>
                </div>

            </section>


        </>
    )
}

export default SelectedStudent;