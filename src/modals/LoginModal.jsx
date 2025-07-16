function LoginModal({isOpenLoginModal,onCloseLoginModal}){
    if(!isOpenLoginModal){
        return false;
    }

    return(
        <>
        <div className="fixed z-50 bg-black">hello i am modal</div>

        
        
        </>
    )
}

export default LoginModal;