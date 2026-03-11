import netflixLogo from '../assets/Netflix_logo.png'
import userProfileIcon from '../assets/user-profile-icon.png'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () =>{
const navigate = useNavigate()
const handleSignOut = ()=>{
    signOut(auth).then(() => {
        navigate('/')
    }).catch((error) => {
        navigate('/error')
    });
}

console.log(auth)
    return(
        <div className="header-wrapper py-2 px-3 z-10 relative flex items-center justify-between">
            <div className="the-logo w-40">
                <img className='w-40' src={netflixLogo} alt='netfilx-logo' />
            </div>

           {
            auth.currentUser &&<div className='sign-out'>
                    <div className='userIcon flex gap-2'>
                        <img src={userProfileIcon} alt='userIcon' />
                        <button onClick={handleSignOut} className='text-white font-bold text-sm'>Sign Out</button>
                    </div>
                </div>
            }

        </div>
    )
}

export default Header;