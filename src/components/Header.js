import netflixLogo from '../assets/Netflix_logo.png'
import userProfileIcon from '../assets/user-profile-icon.png'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser , removeUser} from '../utils/userSlice';
import { useEffect, useRef } from 'react';
import { callGptToggle } from '../utils/GptSlice';
import { SUPPORTED_LANGUAGE } from '../utils/constant';
import { changeLanguage } from '../utils/LangSlice';

const Header = () =>{
const navigate = useNavigate()
const langValue = useRef(null)
const isGptShow = useSelector(store => store.gpt.showGpt)

const handleSignOut = ()=>{
    signOut(auth).then(() => {
        navigate('/')
    }).catch((error) => {
        navigate('/error')
    });
}

  const dispatch = useDispatch()
    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName } = user;
        dispatch(addUser({uid :uid, email:email, displayName:displayName}))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });

    return () => unsubscribe()
 },[])

 const handleShowGtp = () =>{
    dispatch(callGptToggle())
 }
 const handelChangeLang = () => {
    dispatch(changeLanguage(langValue.current.value))
    
 }

    return(
        <div className="header-wrapper w-full py-2 px-3 flex items-center justify-between absolute top-0 z-10">
            <div className="the-logo w-40">
                <img className='w-40' src={netflixLogo} alt='netfilx-logo' />
            </div>

           {
            auth.currentUser &&<div className='sign-out flex gap-4 items-center'>
                    {isGptShow && <div className=''>
                        <select className='py-2 px-6 rounded bg-white font-medium text-black outline-none cursor-pointer' ref={langValue} onChange={handelChangeLang}>
                            {
                                SUPPORTED_LANGUAGE.map(lang => <option key={lang.name} value={lang.identifier}>{lang.name}</option>)
                            }
                        </select>
                    </div>
                }
                    

                    <button className='py-2 px-6 rounded bg-white font-medium text-black' onClick={handleShowGtp}>GPT Search</button>
                    <div className='userIcon flex gap-2 w-[110px]'>
                        <img src={userProfileIcon} alt='userIcon' />
                        <button onClick={handleSignOut} className='text-white font-bold text-sm'>Sign Out</button>
                    </div>
                </div>
            }

        </div>
    )
}

export default Header;