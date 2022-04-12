import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react';
import { selectEmployees } from "../../store/employee/employeeSelectors";
import './Employee.css'
import EmployeeDetails from "./Employee";
import { useWebservice } from "../../hooks/useWebservice";
import { loadEmployees } from "../../store/employee/employeeActions";
import { Employee } from "../../store/employee/employeeModels";
import { employeeActions } from "../../store";


const EmployeeList = () => {
    useWebservice(true, loadEmployees);
    const employees = useSelector(selectEmployees)

    const dispatch = useDispatch()

    const [employeeList, setEmployeeList] = useState([])

    const consoleLog = () => {
        console.log('Test')
    }

    const onSelectEmployee = (employee:Employee) => {
        dispatch(employeeActions.setSelectedEmployee(employee))
    }

    return (
        <div className="employee-view">
            <div className="employees">
                <div className="filter">
                    <input type="text" />
                </div>
                <ul className="list-group">
                    {employees.map((item) =>

                        <li className="list-group-item" key={item.email} onClick={(() => onSelectEmployee(item))}>
                            <span>{item.fullName}</span>
                        </li>
                    )}
                </ul>

            </div>
            <EmployeeDetails />
        </div>
    )
}

export default EmployeeList;
