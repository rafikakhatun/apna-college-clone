import apnaCollegeLogo from "../assets/apna logo.png"

function Footer() {
    return (
        <>

            <section className="w-full py-20 px-22">
                <footer>

                    {/* profile information link */}
                    <div className="flex flex-col space-y-2">
                        <img src={apnaCollegeLogo} alt="Logo" width="100" height="100" />
                        <a className="text-[#6674CC] text-md md:text-lg" href="#">
                           Where education meets <br className="hidden md:block" /> real-world needs.
                        </a>
                    </div>


                    <div></div>
                    <div></div>
                    <div></div>

                </footer>
            </section>



        </>

    )
}

export default Footer;