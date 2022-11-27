import React, { useState } from 'react'
import { Link } from "react-router-dom";
import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';
import { SidebarData } from './Sidebardata';
import './Sidebar.css'

const Sidenav = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div className="navbar">
                <Link to='#' className='menu'>
                    <ListIcon onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <CloseIcon />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Sidenav