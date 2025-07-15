function SignUpModal({isOpen,onClose}){

    if(!isOpen) {
        return null;
    }

    return(
        <>
        {/* here design overlay modal div */}
        <button onClick={onClose} >close</button>
        <div>hello i am signup button</div>
        
        
        
        </>
    )
}
 export default SignUpModal;
