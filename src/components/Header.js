import netflixLogo from '../assets/Netflix_logo.png'

const Header = () =>{
    return(
        <div className="header-wrapper py-2 px-3 z-10 relative">
            <div className="the-logo w-40">
                <img className='w-40' src={netflixLogo} alt='netfilx-logo' />
            </div>
        </div>
    )
}

export default Header;