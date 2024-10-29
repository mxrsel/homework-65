import './Toolbar.css';
import {NavLink} from "react-router-dom";

const Toolbar = () => {
    return (
        <div className='main-container container'>
        <div className='navbar'>
            <div className='container-fluid'>
                <NavLink className='navBrand' to='/pages/home'>Navbar</NavLink>
                <ul className='navList'>

                        <NavLink to='/pages/home' className='navLink'>Home</NavLink>

                        <NavLink to='/pages/about' className='navLink'>About</NavLink>

                        <NavLink to='/pages/projects' className='navLink'>Projects</NavLink>

                        <NavLink to='/pages/contacts' className='navLink'>Contacts</NavLink>

                         <NavLink to='/pages/events' className='navLink'>Events</NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Toolbar;