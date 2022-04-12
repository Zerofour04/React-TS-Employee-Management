import { useSelector } from "react-redux";
import './Employee.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faLockOpen, faUser } from "@fortawesome/free-solid-svg-icons";
import { selectSelectedEmployee } from "../../store/employee/employeeSelectors";
import { useWebservice } from "../../hooks/useWebservice";
import { getUserRoles } from "../../store/userroles/userRoleActions";
import { selectUserRoles } from "../../store/userroles/userRoleSelectors";


const EmployeeDetails = (props: any) => {
    useWebservice(true, getUserRoles)
    const userRoles = useSelector(selectUserRoles)

    const employee = useSelector(selectSelectedEmployee)

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
                    <a>{employee?.groups}</a>
                </div>
                <div className="list-group">
                    Available Groups:
                    <a>
                        {userRoles.join(", ")}
                    </a>
                </div>
                <button className="btn btn-primary shadow-none">Save</button>
            </div>
        </div>
    )
}

export default EmployeeDetails;
