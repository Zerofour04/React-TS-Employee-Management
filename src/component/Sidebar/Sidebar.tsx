import React, { useState } from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";
import { Button } from 'react-bootstrap';



const Sidebar = (props: any) => {

    const [sidebar, setSidebar] = useState(false);
    const [isOpen, setOpen] = useState(true)
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{ color: "#FFF" }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <Button onClick={showSidebar}>Sidebar</Button>

                        <div className="actions">
                            <div className={'caret' + (isOpen ? '' : ' open')}>
                                <FontAwesomeIcon className="icon" onClick={() => {setOpen(!isOpen); showSidebar()}} icon={faAnglesLeft}/>
                            </div>
                        </div>
                        
                    </Link>
                </div>
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