import { useRef, useState } from "react";
import theBg from '../assets/Netflix-bg.jpg'
import Header from "./Header";
import formValidationCheck from "../utils/formValidationCheck";
import userAuth from "../utils/UserAuth";
import { useDispatch } from "react-redux";



const Login = () => {
    const [isLogin , setIsLogin] = useState(true);
    const [formError , setFormError] = useState(null);
    const dispatch = useDispatch()
    const fullName = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const handleFormChange = ()=>{
            setIsLogin(!isLogin)
    }
    const handleFormSubmit = (e)=>{
        e.preventDefault()
        const Username = isLogin ? null : fullName.current.value;
        const errMessage = formValidationCheck(Username , email.current.value, password.current.value)
        console.log(Username , email.current.value, password.current.value , "=>>")
        setFormError(errMessage)
        if(errMessage) return;
        userAuth(isLogin , email.current.value, password.current.value , setFormError , Username , dispatch)
    }
    return(
        <div className="login-wraper">
            <Header/>
            <img className='absolute top-0 h-dvh w-dvw object-cover' src={theBg} alt="the-bg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20"></div>
            <div className="form-wrapper w-[300px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10   py-4 px-6 bg-white/10 backdrop-blur-sm">
                <div className="form-heading">
                    <strong className="text-white text-2xl">{isLogin ? `Sign In` : `Sign Up`}</strong>
                </div>

                <form className="mt-4">
                    {!isLogin && <input ref={fullName} className="w-full py-2 px-2 bg-black mb-3 text-white rounded" type="text" placeholder="Enter Full Name"/>}
                    
                    <input ref={email} className="w-full py-2 px-2 bg-black mb-3 text-white rounded" type="text" placeholder="Enter Email Or Mobile No"/>
                    <input ref={password} className="w-full py-2 px-2 bg-black mb-3 text-white rounded" type="password" placeholder="Enter Password"/>
                    {formError && <span className="text-red-700 text-sm font-bold">{`${formError} *`}</span>}
                    <button className="w-full py-2 px-2 bg-red-700 text-white text-xl font-bold rounded cursor-pointer" onClick={handleFormSubmit}>{isLogin ? `Sign In` : `Sign Up`}</button>
                </form>

                <div className="check-user">
                    <button onClick={handleFormChange} className="text-white underline text-sm font-medium mt-4 cursor-pointer">{isLogin ?`New User Sign Up` : `Already Registerd`}</button>
                </div>
            </div>
        </div>
    )
}


export default Login;