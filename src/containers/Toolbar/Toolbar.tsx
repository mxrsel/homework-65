import './Toolbar.css';
import  {NavLink} from "react-router-dom";
import {PAGES} from "../../pages.ts";

const Toolbar = () => {
    return (
        <div className='main-container container'>
        <div className='navbar'>
            <div className='container-fluid'>
                <NavLink className='navBrand' to='/pages/home'>Navbar</NavLink>
                <ul className='navList'>
                    {PAGES.map((page) => (
                        <div key={page.id}>
                        <NavLink className='navLink' to={`/pages/${page.id}`}>{page.title}</NavLink>
                        </div>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Toolbar;