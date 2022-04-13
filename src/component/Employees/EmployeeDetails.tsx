import { useDispatch, useSelector } from "react-redux";
import './Employee.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faLockOpen, faUser } from "@fortawesome/free-solid-svg-icons";
import { selectSelectedEmployee } from "../../store/employee/employeeSelectors";
import { callWebservice, useWebservice } from "../../hooks/useWebservice";
import { removeUserRole, getUserRoles, addUserRole } from "../../store/userroles/userRoleActions";
import { selectUserRoles } from "../../store/userroles/userRoleSelectors";
import { setUserRoles } from "../../store/userroles/userRoleActions";
import EmployeeList from "./EmployeeList";
import { employeeActions } from "../../store";
import { IMsalContext, MsalContext, useMsal } from "@azure/msal-react";


const EmployeeDetails = (props: any) => {
    useWebservice(true, getUserRoles)
    
    const dispatch = useDispatch()

    const msalContext: IMsalContext = useMsal();
    const userRoles = useSelector(selectUserRoles)
    const employee = useSelector(selectSelectedEmployee)


    const getUserRole = () => {
        const roleItem = userRoles.findIndex
        console.log(roleItem)    
    }

    const deleteUserGroup = (group:string) => {
        console.log(group)
        callWebservice(msalContext, dispatch, removeUserRole, employee?.email, group)
    }

    const addUserGroup = (group:string) => {
        console.log(group)
        callWebservice(msalContext, dispatch, addUserRole, employee?.email, group)
    }

    return (
        <div className="employee-view">
            <div className="employee-details">
                <h2>Name: {employee?.fullName} | {employee?.acronym}</h2>
                <a>E-Mail: {employee?.email}</a>
                <a>Country: {employee?.location.countryIsocode}</a>
                <div className="flags">
                    <FontAwesomeIcon className="flag" icon={faUser} />
                    <FontAwesomeIcon className="flag" icon={faLockOpen} />
                    <FontAwesomeIcon className="flag" icon={faEye} />
                </div>
                <div className="usergroups">
                    Assigned Groups:
                    <ul>
                        {employee?.groups?.map(group => 
                            <li onClick={() => deleteUserGroup(group)} key={group}>{group}</li>
                        )}
                    </ul>
                    
                </div>
                <div className="list-group">
                    Available Groups:
                    <ul>
                        {userRoles.filter(group => !employee?.groups?.includes(group)).map(group => 
                            <li onClick={() => addUserGroup(group)} key={group}>{group}</li>
                        )}
                    </ul>
                </div>
                <button className="btn btn-primary shadow-none">Save</button>
            </div>
        </div>
    )
}

export default EmployeeDetails;
