import  { useState } from 'react';
import './Sidebar.css'
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import { slide as Menu } from "react-burger-menu"

const Sidebar = (props: any) => {

    const [sidebar, setSidebar] = useState(false);
/*     const [isOpen, setOpen] = useState(true) */
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <Menu {...props}>
                <a className="menu-item" href="/">
                    Home
                </a>

                <a className="menu-item" href="#employees">
                    Employees
                </a>

                <a className="menu-item" href="#server">
                    Server
                </a>
            </Menu>
            <IconContext.Provider value={{ color: "#FFF" }}>
{/*                 <div className="navbar">
                    <Link to="#" className="menu-bars">

                        <div className="actions">
                            <div className={'caret' + (isOpen ? '' : ' open')}>
                                <FontAwesomeIcon className="icon" onClick={() => { setOpen(!isOpen); showSidebar() }} icon={faAnglesLeft} />
                            </div>
                        </div>

                    </Link>
                </div> */}
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>



                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {/*                                         <FontAwesomeIcon icon={item.icon}/> 
 */}                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;