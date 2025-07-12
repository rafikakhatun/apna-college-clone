import MillionsBannerImg from "../assets/apna bigimg.jpeg"




function TeachMillionsBanner() {
    return (

        <>

            <section className="py-16 px-8">

                <h1 className="text-lg md:text-3xl font-medium text-center mb-14">On a mission to teach Millions</h1>

                <div className="mt-5">
                    <img className="w-full md:w-11/12 mx-auto" src={MillionsBannerImg} alt="TeachMillionsBannerImg" />

                </div>
            </section>

        </>



    )
}

export default TeachMillionsBanner;