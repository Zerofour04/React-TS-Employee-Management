import { slide as Menu } from "react-burger-menu"
import './Sidebar.css'

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
            </Menu>
        </>
    );
};

export default Sidebar;