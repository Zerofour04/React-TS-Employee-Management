import { useDispatch, useSelector } from "react-redux";
import './Employee.css'
import { selectSelectedEmployee } from "../../store/employee/employeeSelectors";
import { callWebservice, useWebservice } from "../../hooks/useWebservice";
import { removeUserRole, getUserRoles, addUserRole, patchRole } from "../../store/userroles/userRoleActions";
import { selectUserRoleErrorMessage, selectUserRoles } from "../../store/userroles/userRoleSelectors";
import { IMsalContext, useMsal } from "@azure/msal-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash, faLock, faLockOpen, faUserLargeSlash } from "@fortawesome/free-solid-svg-icons";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import * as React from 'react';
import { Snackbar } from "@mui/material";
import { userRoleActions } from "../../store";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const EmployeeDetails = (props: any) => {
    useWebservice(true, getUserRoles)
    const errorMessage = useSelector(selectUserRoleErrorMessage)

    const dispatch = useDispatch()

    const msalContext: IMsalContext = useMsal();
    const userRoles = useSelector(selectUserRoles)
    const employee = useSelector(selectSelectedEmployee)

    const [openError, setOpenError] = React.useState(false);

    const deleteUserGroup = (group: string) => {
        console.log(group)
        callWebservice(msalContext, dispatch, removeUserRole, employee?.email, group)
    }

    const addUserGroup = (group: string) => {
        console.log(group)
        callWebservice(msalContext, dispatch, addUserRole, employee?.email, group)
    }

    const handleActive = (active: boolean | undefined) => {
        if (active !== undefined) {
            callWebservice(msalContext, dispatch, patchRole, employee?.email, { active: active })
        }
    }

    const handleLocked = (locked: boolean | undefined) => {
        if (locked !== undefined) {
            callWebservice(msalContext, dispatch, patchRole, employee?.email, { locked: locked })
        }
    }

    const handleVisible = (visible: boolean | undefined) => {
        if (visible !== undefined) {
            callWebservice(msalContext, dispatch, patchRole, employee?.email, { visible: visible })
        }
    }

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            dispatch(userRoleActions.setErrorMessage(null));
            setOpen(false)
            return;
        }
    };

    return (
        <div className="employee-details">
            {errorMessage ? 
            <Snackbar open={true} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Maybe missing permission | ERROR:{errorMessage}
                </Alert>
            </Snackbar> 
            : null}
            
            <h2>Name: {employee?.fullName} | {employee?.acronym}</h2>
            <span onClick={handleClick}>Test</span>
            <a>E-Mail: {employee?.email}</a>
            <a>Country: {employee?.location.countryIsocode}</a>
            <div className="flags">
                <FontAwesomeIcon onClick={() => handleActive(!(employee?.active))} icon={employee?.active ? faUser : faUserLargeSlash} /> {employee?.active ? "Employee" : "Not Emploee"}
                <FontAwesomeIcon onClick={() => handleLocked(!(employee?.locked))} icon={employee?.locked ? faLock : faLockOpen} /> {employee?.locked ? "Locked" : " Not Locked"}
                <FontAwesomeIcon onClick={() => handleVisible(!(employee?.visible))} icon={employee?.visible ? faEye : faEyeSlash} /> {employee?.visible ? "Visible" : "Not Visible"}
            </div>
            <div className="usergroups-view">
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
            </div>
        </div >
    )
}

export default EmployeeDetails;
