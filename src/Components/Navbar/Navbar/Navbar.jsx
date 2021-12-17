import SigninButton from '../Buttons/signin';
import Logo from '../../../Media/Images/YourSpace.png';

const Navbar = () => {
    return(
     <nav>
        <div className='w-full h-11 sticky border-b-1'>
            <img src={Logo} alt='logo'></img>
            <SigninButton/>
        </div>
    </nav>
    )
}

export default Navbar;