import React from "react";
import Header from "../Header";
import Topbar from "../Topbar";
import CreateJob from "./CreateJob";
import EmployeeList from "./EmployeeList";

function EmployerIndexpage() {
    return (
        <>
            <Topbar />
            <Header />
            <div className="container">
                <CreateJob />
                <EmployeeList />
            </div>
        </>
    );
}

export default EmployerIndexpage;
