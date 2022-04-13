import * as React from 'react';
import Header from "../component/Header/Header";
import { Route, Routes } from 'react-router';
import Sidebar from "../component/Sidebar/Sidebar";
import { useLoggedInUser } from "../hooks/useLoggedInUser";
import EmployeePage from "../component/Employees/EmployeePage";


interface PageProps {
}

const Page: React.FC<PageProps> = (props) => {
    /*     useLoggedInUser();*/
    return (
        <React.Fragment>
            <Header />
            <main>
                <Sidebar isOpen={false} />
                <Routes>
                    <Route path="/employees" element={<EmployeePage />} />
                </Routes>
            </main>
        </React.Fragment>
    );
};

export default Page;
