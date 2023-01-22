import React from "react";
import EmployeeList from "../Employyer/EmployeeList";
import Header from "../Header";
import Topbar from "../Topbar";
import CivilServicesList from "./CivilServicesList";

function CivilServicesIndex() {
    return (
        <>
            <Topbar />
            <Header />
            <div className="container">
                <div className="card my-2">
                    <div className="card-body">
                        <CivilServicesList />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CivilServicesIndex;
