import React, { useEffect, useState } from "react";
import { getCivilServents } from "../appi";
import CivilServiceCards from "./CivilServiceCards";

function CivilServicesList() {
    const [empData, setEmpData] = useState([]);

    useEffect(() => {
        async function getEmp() {
            let res = await getCivilServents();
            setEmpData(res.message.data);
        }
        getEmp();
    }, []);
    return (
        <>
            <div className="container">
                <h2 className="text-center mb-3">Civil Servents</h2>
                {empData &&
                    empData.map((item: any) => (
                        <div className="card my-2 job_card" key={item._id}>
                            <div className="card-body">
                                <CivilServiceCards empData={item} />
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default CivilServicesList;