import React from "react";
import EmployeeList from "../components/Employyer/EmployeeCard";
import Header from "../components/Header";
import Topbar from "../components/Topbar";
import { ReactNode } from "react";

interface Props {
    data?: ReactNode;
}

function CardList({data}:Props) {
    return (
        <>
            <Topbar />
            <Header />
            <div className="container">
                <div
                    className="card my-2 job_card"
                    key={1}
                >
                    <div className="card-body">
                        <EmployeeList />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardList;
