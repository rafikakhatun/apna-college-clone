        
    function SignUpModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/80 bg-opacity-70 flex justify-center items-center z-50">
        
        {/* Modal Box */}
        <div className="bg-black text-white p-8 rounded-lg w-[90%] max-w-md relative">

          {/* Close Button */}
          <button onClick={onClose} className="absolute top-4 right-4 text-white text-xl font-bold">
            ✖
          </button>

          <h1 className="text-2xl font-bold text-center mb-6">SIGN UP TO APNA COLLEGE!</h1>

          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block mb-1">What's your name?</label>
              <input type="text" placeholder="Name" className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md placeholder-gray-400" />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1">What's your e-mail?</label>
              <input type="email" placeholder="E-mail" className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md placeholder-gray-400" />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1">Your password?</label>
              <input type="password" placeholder="Password" className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md placeholder-gray-400" />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block mb-1">Phone Number</label>
              <input type="tel" placeholder="98xxxxxxxx" className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md placeholder-gray-400" />
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-md font-semibold">
              Start your learning journey
            </button>
          </form>

          {/* Bottom Links */}
          <div className="flex justify-between mt-4 text-sm text-blue-400 underline">
            <a href="#">Sign in with your account</a>
            <a href="#">Forgot your password?</a>
          </div>

        </div>
      </div>
    </>
  );
}

export default SignUpModal;