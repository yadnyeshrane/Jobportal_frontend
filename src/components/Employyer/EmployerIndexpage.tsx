import React, { useState } from "react";
import Header from "../Header";
import Topbar from "../Topbar";
import CreateJob from "./CreateJob";
import EmployeeList from "./EmployeeList";

const tabsList = [
    {
        id: "jobs-tab",
        tabTitle: "Jobs",
        targetId: "jobs",
        tabContent: "JOBS",
    },
    {
        id: "emp-list-tab",
        tabTitle: "Employee List",
        targetId: "emp-list",
        tabContent: <EmployeeList />,
    },
    {
        id: "create-job-tab",
        tabTitle: "Create Job",
        targetId: "create-job",
        tabContent: <CreateJob />,
    },
];

function EmployerIndexpage() {
    const [selectedTab, setSelectedTabs] = useState("jobs-tab");
    return (
        <>
            <Topbar />
            <Header />
            <div className="container">
                <div className="card my-2">
                    <div className="card-header">
                        <ul
                            className="nav nav-tabs card-header-tabs"
                            id="myTab"
                            role="tablist"
                        >
                            {tabsList.map(({ tabTitle, id, targetId }) => (
                                <li className="nav-item" role="presentation">
                                    <button
                                        className={`nav-link ${
                                            id == selectedTab && "active"
                                        }`}
                                        id={id}
                                        data-bs-toggle="tab"
                                        data-bs-target={`#${targetId}`}
                                        type="button"
                                        role="tab"
                                        aria-controls={targetId}
                                        aria-selected="true"
                                    >
                                        {tabTitle}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="card-body">
                        <div className="tab-content" id="myTabContent">
                            <div
                                className="tab-pane fade show active"
                                id="jobs"
                                role="tabpanel"
                                aria-labelledby="jobs-tab"
                            >
                                Jobs
                            </div>
                            <div
                                className="tab-pane fade"
                                id="emp-list"
                                role="tabpanel"
                                aria-labelledby="emp-list-tab"
                            >
                                <EmployeeList />
                            </div>
                            <div
                                className="tab-pane fade"
                                id="create-job"
                                role="tabpanel"
                                aria-labelledby="create-job-tab"
                            >
                                <CreateJob />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmployerIndexpage;

{/* 
<li className="nav-item" role="presentation">
    <button
        className="nav-link active"
        id="jobs-tab"
        data-bs-toggle="tab"
        data-bs-target="#jobs"
        type="button"
        role="tab"
        aria-controls="jobs"
        aria-selected="true"
    >
        Jobs
    </button>
</li>
<li className="nav-item" role="presentation">
    <button
        className="nav-link"
        id="emp-list-tab"
        data-bs-toggle="tab"
        data-bs-target="#emp-list"
        type="button"
        role="tab"
        aria-controls="emp-list"
        aria-selected="false"
    >
        Employee List
    </button>
</li>
<li className="nav-item" role="presentation">
    <button
        className="nav-link"
        id="create-job-tab"
        data-bs-toggle="tab"
        data-bs-target="#create-job"
        type="button"
        role="tab"
        aria-controls="create-job"
        aria-selected="false"
    >
        Create Job
    </button>
</li> 
*/}
