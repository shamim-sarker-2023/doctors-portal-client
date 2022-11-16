import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {

    const menuItems = <>
        <li><NavLink to={"/"} activeclassname="bg-primary">Home</NavLink></li>
        <li><NavLink to={"/about"} activeclassname="bg-primary">About</NavLink></li>
        <li><NavLink to={"/appointment"} activeclassname="bg-primary">Apointment</NavLink></li>
        <li><NavLink to={"/reviews"} activeclassname="bg-primary">Reviews</NavLink></li>
        <li><NavLink to={"/contact-us"} activeclassname="bg-primary">Contact Us</NavLink></li>
        <li><NavLink to={"/login"} activeclassname="bg-primary">Login</NavLink></li>
    </>;

    return (
        < div className="max-w-7xl mx-auto navbar justify-between">
            <div className="navbar-start">
                <div className="dropdown block lg:hidden">

                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={0} className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
                        {menuItems}
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost normal-case text-xl">Doctor's Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;