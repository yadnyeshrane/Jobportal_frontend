import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getResume } from "../appi";
import Resume from "../Employee/Resume";
import Header from "../Header";
import Topbar from "../Topbar";

function CandidateDetails() {
    const location = useLocation();
    let candidate_id = location.state.mobileno;
    console.log(candidate_id);

    const [candidateData, setCandidateData] = useState<any>(null);

    useEffect(() => {
        async function getEmployee() {
            const res = await getResume(candidate_id);
            if (res.status === 200) {
                setCandidateData(res.message.data);
            }
        }
        getEmployee();
    }, []);

    console.log(candidateData);
    return (
        <>
            <Topbar />
            <Header />
            <div className="container">
                {candidateData && <Resume data={candidateData} />}
            </div>
        </>
    );
}

export default CandidateDetails;
