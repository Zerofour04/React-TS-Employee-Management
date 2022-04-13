import { useState } from "react";
import EmployeeList from "./EmployeeList";

const EmployeePage = () => {
    const [inputText, setInputText] = useState("")
    let inputHandler = (e:any) => {
        var lowerCase = e.target.value.toLowerCase()
        setInputText(lowerCase)
    }
    return (
        <div className="employee-page">
            <EmployeeList input={inputText} />
        </div>
    )
}

export default EmployeePage;

