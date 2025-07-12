import apnaCollegeLogo from "../assets/apna logo.png"

function Footer() {
    return (
        <>

            <section className="w-full py-20 px-">
                <footer className="flex flex-col md:flex-row justify-between items-center">

                    {/* profile information link */}
                    <div className="flex flex-col space-y-4">
                        <img src={apnaCollegeLogo} alt="Logo" width="100" height="100" />
                        <a className="text-[#6674CC] text-md md:text-lg" href="#">
                            Where education meets <br className="hidden md:block" /> real-world needs.
                        </a>
                    </div>

                    {/* helpful links */}
                    <div className="flex flex-col">
                        <p className="text-[#6674CC] font-bold">HELPFUL LINKS</p>
                        <a className="text-[#6674CC] mt-2" href="#">Courses</a>
                        <a className="text-[#6674CC] mt-2" href="#">Privacy Policy</a>
                        <a className="text-[#6674CC] mt-2" href="#">Refund Policy</a>
                        <a className="text-[#6674CC] mt-2" href="#">Terms & Conditions</a>
                    </div>



                    <div></div>
                    <div></div>

                </footer>
            </section>



        </>

    )
}

export default Footer;