import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react';
import { selectEmployees } from "../../store/employee/employeeSelectors";
import './Employee.css'
import EmployeeDetails from "./EmployeeDetails";
import { useWebservice } from "../../hooks/useWebservice";
import { loadEmployees } from "../../store/employee/employeeActions";
import { Employee } from "../../store/employee/employeeModels";
import { employeeActions } from "../../store";
import { ListItemButton, ListItemText, TextField } from "@mui/material";

const EmployeeList = (props: any) => {
    useWebservice(true, loadEmployees);
    const employees = useSelector(selectEmployees)

    const dispatch = useDispatch()

    const onSelectEmployee = (employee: Employee) => {
        dispatch(employeeActions.setSelectedEmployee(employee))
    }

    const [inputText, setInputText] = useState("")
    let inputHandler = (e:any) => {
        var lowerCase = e.target.value.toLowerCase()
        setInputText(lowerCase)
    }

    const filteredEmployee = employees.filter((el) => {
        if (inputText === '') {
            return el;
        } else {
            return el.acronym.toLowerCase().includes(inputText)
                || el.fullName?.toLowerCase().includes(inputText)
                || el.email?.toLowerCase().includes(inputText)
        }
    })

    return (
        <div className="employee-view">
            <div className="employees">
                <ul className="list-group">
                    <TextField
                        id="outlined-basic"
                        onChange={inputHandler}
                        variant="outlined"
                        fullWidth
                        label="Search Employee"
                        size="small"
                    />
                    {filteredEmployee.map((item) =>
                        <ListItemButton key={item.email} onClick={(() => onSelectEmployee(item))} component="a">
                            <ListItemText primary={item.fullName} />
                        </ListItemButton>
                    )}
                </ul>
            </div>
            <EmployeeDetails />
        </div>
    )
}

export default EmployeeList;
