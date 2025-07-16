function LoginModal({ isOpenLoginModal, onCloseLoginModal }) {
    if (!isOpenLoginModal) {
        return false;
    }

    return (
        <>
            {/* overlay */}
            <div className="fixed z-50 bg-black">
                {/*modal box*/}
                <div>
                    {/* close button */}
                    <button onClick={onClose} className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-400 text-xl font-bold">
                        <X size={24} />
                    </button>



                </div>
            </div>



        </>
    )
}

export default LoginModal;