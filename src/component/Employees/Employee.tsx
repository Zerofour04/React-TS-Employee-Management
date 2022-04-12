import { useSelector } from "react-redux";
import { useState } from 'react'
import './Employee.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faLockOpen, faUser } from "@fortawesome/free-solid-svg-icons";
import { selectSelectedEmployee } from "../../store/employee/employeeSelectors";


const EmployeeDetails = (props:any) => {
    const employee = useSelector(selectSelectedEmployee)

/*     const [activeGroups, setActiveGroups] = useState([]);
    const [inactiveGroups, setInactiveGroups] = useState(["Vacation Admin", "DDHub Admin", "Sales Manager", "PMO Manager"].sort());

    const onAddGroup = (item) => {
        setInactiveGroups(prevState => prevState.filter(i => i !== item).sort());
        setActiveGroups(prevState => [...prevState, item].sort())
    }

    const onRemoveGroup = (item) => {
        setActiveGroups(prevState => prevState.filter(i =>s i !== item).sort());
        setInactiveGroups(prevState => [...prevState, item].sort())
    } */


    return (
        <div className="employee-view">
            <div className="employee-details">
                {employee?.fullName}
                <li className="usergroups">
                    Assigned Groups:
                </li>
                <li>
                    Available Groups:
                </li>
                <button className="btn btn-primary shadow-none">Save</button>
            </div>
        </div>
    )
}

export default EmployeeDetails;
