import { X } from "lucide-react";

        
    function SignUpModal({ isOpen, onClose }) {
  if (!isOpen) return null;

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

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block mb-2 text-sm">What's your name?</label>
              <input type="text" placeholder="Name" className="w-full px-4 py-2 bg-neutral-800  outline-none  placeholder:text-neutral-500 placeholder:text-xs" />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm">What's your e-mail?</label>
              <input type="email" placeholder="E-mail" className="w-full px-4 py-2 bg-neutral-800 outline-none placeholder:text-neutral-500 placeholder:text-xs" />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-2">Your password?</label>
              <input type="password" placeholder="Password" className="w-full px-4 py-2 bg-neutral-800 outline-none placeholder:text-neutral-500 placeholder:text-xs" />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block mb-2 text-sm">Phone Number</label>
              <input type="tel" placeholder="98xxxxxxxx" className="w-full px-4 py-2 bg-neutral-800 outline-none placeholder:text-neutral-500 placeholder:text-xs" />
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-[#6674cc] hover:bg-indigo-600 text-white py-2 font-semibold">
              Start your learning journey
            </button>
          </form>

         

        </div>
      </div>
    </>
  );
}

export default SignUpModal;