import {NavLink} from 'react-router-dom'
import IconDiscover from '../../Media/Icons/Discover';
import IconFriends from '../../Media/Icons/Friends';
import IconProfile from '../../Media/Icons/Profile';
import IconSettings from '../../Media/Icons/Settings';
import IconAbout from '../../Media/Icons/About';

const SidebarMenu = () => {
    return (
        <nav className="col-start-2 col-end-4 pt-40 flex flex-col font-sans text-l text-gray-400">
            <NavLink
                to="profile"
                className={({ isActive }) =>
                    isActive ? 'font-semibold text-blue-500' : 'font-normal'}>
                <span className='flex flex-row w-9/12 py-4 border-b-2 border-opacity-50 hover:text-blue-500'>
                    <IconProfile/>
                    Profile   
                </span>
            </NavLink>
            <NavLink
                to="discover"
                className={({ isActive }) =>
                    isActive ? 'font-semibold text-blue-500' : 'font-normal'}>
                <span className='flex flex-row w-9/12 py-4 border-b-2 border-opacity-50 hover:text-blue-500'>
                    <IconDiscover/>
                    Discover   
                </span>
            </NavLink>
            <NavLink
                to="friends"
                className={({ isActive }) =>
                isActive ? 'font-semibold text-blue-500' : 'font-normal'}>
                <span className='flex flex-row w-9/12 py-4 border-b-2 border-opacity-50 hover:text-blue-500'>
                    <IconFriends/>
                    Friends 
                </span>
                  
            </NavLink>
            <NavLink
                to="settings"
                className={({ isActive }) =>
                isActive ? 'font-semibold text-blue-500' : 'font-normal'}>
                <span className='flex flex-row w-9/12 py-4 border-b-2 border-opacity-50 hover:text-blue-500'>
                    <IconSettings/>
                    Settings 
                </span>
            </NavLink>
            <NavLink
                to="about"
                className={({ isActive }) =>
                isActive ? 'font-semibold text-blue-500' : 'font-normal'}>
                <span className='flex flex-row w-9/12 py-4 border-b-2 border-opacity-50 hover:text-blue-500'>
                    <IconAbout/>
                    About 
                </span>
            </NavLink>
            
        </nav>
    )
}
    
    export default SidebarMenu;