import { useState } from "react";
import EmployeeList from "./EmployeeList";
import { TextField } from "@mui/material";

const EmployeePage = () => {
    const [inputText, setInputText] = useState("")
    let inputHandler = (e:any) => {
        var lowerCase = e.target.value.toLowerCase()
        setInputText(lowerCase)
    }
    return (
        <div>
            <TextField
                id="outlined-basic"
                onChange={inputHandler}
                variant="outlined"
                fullWidth
                label="Search"
            />
            <EmployeeList input={inputText} />
        </div>
    )
}

export default EmployeePage;

