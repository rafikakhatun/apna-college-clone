import { X } from "lucide-react";

function LoginModal({ isOpenLoginModal, onCloseLoginModal }) {
    if (!isOpenLoginModal) {
        return false;
    }

    return (
        <>
            {/* overlay */}
            <div className="fixed bg-black/80 inset-0 bg-opacity-70 flex justify-center items-center z-50">
                {/*modal box*/}
                <div className="p-8 shadow w-[80%] max-w-md bg-black text-white relative">
                    {/* close button */}
                    <button onClick={onCloseLoginModal} className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-400 text-xl font-bold">
                        <X size={24} />
                    </button>
                    {/*heading*/}
                    <h1 className="text-md font-semibold text-center mb-8">LOGIN OR SIGN UP TO START LEARNING</h1>

                    {/*login form input field*/}
                    <form className="space-y-6">
                        <div>
                            <label className="block mb-2 text-sm"  htmlFor="">What's your e-mail</label>
                            <input type="text" placeholder="Name" className="w-full px-4 py-2 bg-neutral-800  outline-none  placeholder:text-neutral-500 placeholder:text-xs" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm" htmlFor="">Your password</label>
                            <input type="password"  placeholder="Password" className="w-full px-4 py-2 bg-neutral-800  outline-none  placeholder:text-neutral-500 placeholder:text-xs" />
                        </div>

                        {/* login button */}

                        <button type="submit" className="w-full bg-[#6674cc] hover:bg-indigo-600 text-white py-2 font-semibold">
                            Login
                        </button>

                        {/* Bottom Links */}
                        <div className="flex justify-between mt-2 text-sm text-[#6674cc] underline">
                            <a href="#">Sign in with your account</a>
                            <a href="#">Forgot your password?</a>
                        </div>

                      


                    </form>

                    



                </div>
            </div>



        </>
    )
}

export default LoginModal;