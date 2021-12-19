import SigninButton from '../Buttons/signin';
import Logo from '../../../Media/Images/YourSpace.png';
import Avatar from '../../User/avatar';
import {Link} from 'react-router-dom'


// SWR Avatar, Username
const Navbar = () => {
    return(
     <nav className='py-5 sticky border-b-1 flex col-start-5 col-end-12 justify-between'>
            <Link to='/' className='flex items-center'>
                <img className='w-[157px] h-[30px]' src={Logo} alt='logo'></img>
            </Link>
            <div className='flex justify-center items-center w-[150px]'>
                {1 ? <Avatar/> : <SigninButton/> }
                <h1 className='ml-2 font-semibold text-gray-500 w-[80px] leading-5 font-sans'> Iván Alcántara</h1>
            </div>  
         
    </nav>
    )
}

export default Navbar;