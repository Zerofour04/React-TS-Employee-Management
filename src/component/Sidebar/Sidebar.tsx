import './Sidebar.css'
import { slide as Menu } from "react-burger-menu"



const Sidebar = (props: any) => {

    return (
        <>
            <Menu {...props}>
                <a className="menu-item" href="/">
                    Home
                </a>

                <a className="menu-item" href="/employees">
                    Employees
                </a>

                <a className="menu-item" href="#server">
                    Server
                </a>
            </Menu>

        </>

    );
};

export default Sidebar;