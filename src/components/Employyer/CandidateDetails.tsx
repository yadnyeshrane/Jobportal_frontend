import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getCandidateData } from "../appi";
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
            const res = await getCandidateData(candidate_id);
            if (res.status === 200) {
                setCandidateData(res.message.data);
            }
        }
        getEmployee();
    }, []);

    console.log(candidateData);

    const contact_details = candidateData?.filed[0];
    console.log(contact_details);

    return (
        <>
            <Topbar />
            <Header />
            <div className="container">
                {candidateData && <Resume data={candidateData} />}
                {contact_details && (
                    <div className="my-2">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div>
                                        <h2 className="section_title">
                                            Contact Details
                                        </h2>
                                        <div>
                                            <p>
                                                <i className="bi bi-envelope-at-fill" />
                                                &nbsp;
                                                {`Email : ${contact_details.email}`}
                                            </p>
                                            <p>
                                                <i className="bi bi-telephone-fill" />
                                                &nbsp;
                                                {`Contact No.: ${contact_details.mobileno}`}
                                            </p>
                                            {contact_details?.city && (
                                                <p>
                                                    <i className="bi bi-geo-alt-fill" />
                                                    &nbsp;
                                                    {`Address : ${contact_details.city}${contact_details.state && ", "+ contact_details.state}`}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default CandidateDetails;
