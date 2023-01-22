import React, { useEffect, useState } from "react";
import { getEmpByCategory } from "../appi";
import EmployeeCard from "../Employyer/EmployeeCard";


function CivilServicesList() {
    const [empData, setEmpData] = useState([]);

    useEffect(() => {
        async function getEmp() {
            let res = await getEmpByCategory("All");
            setEmpData(res.message.data);
        }
        getEmp();
    }, []);
  return (<>
    <div>CivilServicesList</div>
    <div className="container">
                {empData &&
                    empData.map((item: any) => (
                        <div className="card my-2 job_card" key={item._id}>
                            <div className="card-body">
                                <EmployeeCard empData={item} />
                            </div>
                        </div>
                    ))}
            </div>
  </>
  )
}

export default CivilServicesList