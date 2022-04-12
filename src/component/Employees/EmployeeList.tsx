import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react';
import { selectEmployees } from "../../store/employee/employeeSelectors";
import './Employee.css'
import EmployeeDetails from "./EmployeeDetails";
import { useWebservice } from "../../hooks/useWebservice";
import { loadEmployees } from "../../store/employee/employeeActions";
import { Employee } from "../../store/employee/employeeModels";
import { employeeActions } from "../../store";

const EmployeeList = (props:any) => {
    useWebservice(true, loadEmployees);
    const employees = useSelector(selectEmployees)

    const dispatch = useDispatch()

    const debugLog = () => {
        console.log('Test')
    }

    const onSelectEmployee = (employee: Employee) => {
        dispatch(employeeActions.setSelectedEmployee(employee))
    }

    const filteredEmployee = employees.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.acronym.toLowerCase().includes(props.input)
        }
    })

    return (
        <div className="employee-view">
            <div className="employees">
                <ul className="list-group">

                    {filteredEmployee.map((item) =>

                        <li className="list-group-item" key={item.email} onClick={(() => onSelectEmployee(item))}>
                            <span>{item.fullName}</span>
                        </li>
                    )}

                </ul>

            </div>
            <EmployeeDetails/>
        </div>
    )
}

export default EmployeeList;
