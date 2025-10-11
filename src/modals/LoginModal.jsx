import { useState } from "react";
import { X } from "lucide-react";

function LoginModal({ isOpenLoginModal, onCloseLoginModal }) {
    if (!isOpenLoginModal) {
        return false;
    }

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    // ✅ Regex Patterns
    const regex = {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Standard email format
        password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{6,}$/ // 6+ chars, one number & one special char
    };

    // ✅ Input Change Handler
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); // Clear specific error while typing
    };

    // ✅ Form Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!regex.email.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }
        if (!regex.password.test(formData.password)) {
            newErrors.password = "Password must be 6+ chars with a number & special character";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        alert("Login Successful!");
    };

    return (
        <>
            {/* overlay */}
            <div className="fixed bg-black/80 inset-0 bg-opacity-70 flex justify-center items-center z-50">
                {/*modal box*/}
                <div className="p-8 shadow w-[80%] max-w-md bg-black text-white relative">
                    {/* close button */}
                    <button onClick={onCloseLoginModal} className="absolute top-3 right-2  text-neutral-500 hover:text-neutral-400 text-xl font-bold">
                        <X size={20} />
                    </button>

                    {/*heading*/}
                    <h1 className="text-md font-semibold text-center mb-6">LOGIN OR SIGN UP TO START LEARNING</h1>

                    {/*login form input field*/}
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="block mb-1 text-sm">What's your e-mail</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="w-full px-4 py-2 bg-neutral-800 outline-none placeholder:text-neutral-500 placeholder:text-xs"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block mb-1 text-sm">Your password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="w-full px-4 py-2 bg-neutral-800 outline-none placeholder:text-neutral-500 placeholder:text-xs"
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>

                        {/* login button */}
                        <button type="submit" className="w-full text-sm bg-[#6674cc] hover:bg-indigo-600 text-white py-2 font-semibold">
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
    );
}

export default LoginModal;
