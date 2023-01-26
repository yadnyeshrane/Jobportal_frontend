import React, { useEffect, useState } from "react";
import { getEmpByCategory } from "../appi";
import Header from "../Header";
import Topbar from "../Topbar";
import EmployeeCard from "./EmployeeCard";

function EmployeeList() {
    const [selectedSec, setSelectedSec] = useState("All");
    const [empData, setEmpData] = useState([]);

    useEffect(() => {
        async function getEmp() {
            let res = await getEmpByCategory(selectedSec);
            setEmpData(res.message.data);
        }
        getEmp();
    }, []);

    const getEmpByCat = async()=> {
        let res = await getEmpByCategory(selectedSec);
        setEmpData(res.message.data);
    }

    return (
        <>
            <div className="container">
                <div className="input-group mt-2">
                    <select
                        className="form-control"
                        name="job_sector"
                        id="job_sector"
                        onChange={(e) => setSelectedSec(e.target.value)}
                    >
                        <option value="" disabled>Choose...</option>
                        <option value="All" selected>All</option>
                        <option value="1">IT</option>
                        <option value="3">HR</option>
                        <option value="2">Marketing</option>
                    </select>
                    <div className="input-group-append">
                        <button
                            className="btn btn-primary bltn-block"
                            type="button"
                            onClick={getEmpByCat}
                        >
                            Submit
                        </button>
                    </div>
                </div>
                {empData.length > 0 ?
                    empData.map((item: any) => (
                        <div className="card my-2 job_card" key={item._id}>
                            <div className="card-body">
                                <EmployeeCard empData={item} />
                            </div>
                        </div>
                    )):
                        <h2 className="text-center mt-5">No Records Found</h2>
                }
            </div>
        </>
    );
}

export default EmployeeList;