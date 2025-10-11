import { useState } from "react";
import { X } from "lucide-react";

function SignUpModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: ""
    });

    const [errors, setErrors] = useState({});

    // ✅ Regex Patterns
    const regex = {
        name: /^[A-Za-z\s]{3,}$/, // At least 3 letters, only alphabets and spaces
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Standard email format
        password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{6,}$/, // 6+ chars, one number & one special char
        phone: /^[6-9]\d{9}$/ // 10-digit Indian phone number starting with 6-9
    };

    // ✅ Input Handler
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); // Clear error when typing
    };

    // ✅ Form Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!regex.name.test(formData.name)) {
            newErrors.name = "Enter a valid name (min 3 letters)";
        }
        if (!regex.email.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }
        if (!regex.password.test(formData.password)) {
            newErrors.password = "Password must be 6+ chars with a number & special character";
        }
        if (!regex.phone.test(formData.phone)) {
            newErrors.phone = "Enter a valid 10-digit phone number";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        alert("✅ Form submitted successfully!");
    };

    return (
        <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/80 bg-opacity-70 flex justify-center items-center z-50">

                {/* Modal Box */}
                <div className="bg-black text-white p-8  w-[90%] max-w-md relative">

                    {/* Close Button */}
                    <button onClick={onClose} className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-400 text-xl font-bold">
                        <X size={24} />
                    </button>

                    <h1 className="text-lg font-bold text-center mb-6">SIGN UP TO APNA COLLEGE!</h1>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Name */}
                        <div>
                            <label className="block mb-2 text-sm">What's your name?</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className="w-full px-4 py-3 bg-neutral-800 outline-none placeholder:text-neutral-500 placeholder:text-xs"
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-2 text-sm">What's your e-mail?</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="E-mail"
                                className="w-full px-4 py-3 bg-neutral-800 outline-none placeholder:text-neutral-500 placeholder:text-xs"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm mb-2">Your password?</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="w-full px-3 py-2 bg-neutral-800 outline-none placeholder:text-neutral-500 placeholder:text-xs"
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block mb-2 text-sm">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="98xxxxxxxx"
                                className="w-full px-4 py-3 bg-neutral-800 outline-none placeholder:text-neutral-500 placeholder:text-xs"
                            />
                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full bg-[#6674cc] hover:bg-indigo-600 text-white py-2 font-semibold">
                            Start your learning journey
                        </button>

                        {/* Bottom Links */}
                        <div className="flex justify-between mt-4 text-sm text-[#6674cc] underline">
                            <a href="#">Sign in with your account</a>
                            <a href="#">Forgot your password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUpModal;
