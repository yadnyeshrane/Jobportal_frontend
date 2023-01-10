import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getJobdetails } from "../appi";
import Header from "../Header";
import Topbar from "../Topbar";

function Jobdetails() {
    const [searchParams] = useSearchParams();
    const [data, setData] = useState<any>();

    useEffect(() => {
        var code: any = searchParams.get("id"); // "1234"

        async function getjobdetailsData() {
            let res = await getJobdetails(code);
            console.log("Response", res);
            if (res.status === 200) {
                setData(res.message.data);
            }
        }
        getjobdetailsData();
    }, []);
    return (
        <>
            <Topbar />
            <Header />
            <div className="container">
                <div className="mt-2">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <p>
                                        <strong>
                                            Node.js Developer -
                                            Redis/Microservices Architecture
                                        </strong>
                                    </p>
                                    <span>{data?.compnayname}</span>
                                    <div>
                                        <p>
                                            <i className="bi bi-briefcase-fill" />
                                            &nbsp;&nbsp;{data?.min_exp}-
                                            {data?.max_exp} years
                                        </p>
                                        <p>
                                            <i className="bi bi-cash" />
                                            &nbsp;&nbsp;{data?.min_salary}-
                                            {data?.max_salary}
                                        </p>
                                        <p>
                                            <i className="bi bi-geo-alt-fill" />
                                            &nbsp;&nbsp; {data?.compnaylocation}
                                            ---{data?.country}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <div>
                                        <p>
                                            <strong>Job desceiption</strong>:
                                            &nbsp;&nbsp;
                                            <p>
                                                Mandatory :{" "}
                                                {data?.jobdescription}
                                            </p>
                                        </p>
                                        <p>
                                            <strong>Job Requirements</strong>:
                                            &nbsp;&nbsp;
                                            <p>
                                                Mandatory : -
                                                {data?.requiredSkills}
                                            </p>
                                        </p>
                                        <div id="education" className="mt-4">
                                            <strong>Education:</strong>
                                            <p>{data?.education}</p>
                                        </div>
                                        <div>
                                            <span style={{ color: "#999" }}>
                                                Role:
                                            </span>
                                            <p style={{ margin: "0px" }}>
                                                {data?.position}
                                            </p>
                                            <span style={{ color: "#999" }}>
                                                Industry Type:
                                            </span>
                                            <p style={{ margin: "0px" }}>
                                                software developer
                                            </p>
                                            <span style={{ color: "#999" }}>
                                                Employment Type:
                                            </span>
                                            <p style={{ margin: "0px" }}>
                                                {data?.jobnature}
                                            </p>
                                        </div>

                                        <div id="keyskills" className="mt-2">
                                            <p>
                                                <strong>Key Skills:</strong>
                                            </p>
                                            <span
                                                style={{
                                                    padding: "5px 10px",
                                                    border: "1px solid #ccc",
                                                    borderRadius: "15px",
                                                }}
                                            >
                                                <span>Mongo</span>
                                            </span>
                                            <a
                                                style={{
                                                    padding: "5px 10px",
                                                    border: "1px solid #ccc",
                                                    borderRadius: "15px",
                                                }}
                                            >
                                                <span>Node </span>
                                            </a>
                                            <a
                                                style={{
                                                    padding: "5px 10px",
                                                    border: "1px solid #ccc",
                                                    borderRadius: "15px",
                                                }}
                                            >
                                                <span>Redis</span>
                                            </a>
                                            <a
                                                style={{
                                                    padding: "5px 10px",
                                                    border: "1px solid #ccc",
                                                    borderRadius: "15px",
                                                }}
                                            >
                                                <span>Sql</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <p>
                                        <strong>Compony Info</strong>
                                    </p>
                                    <span>{data?.compnayname}</span>
                                    <div>
                                        <span style={{ color: "#999" }}>
                                            Adress:
                                        </span>
                                        <p style={{ margin: "0px" }}>
                                            {data?.compnayname}
                                        </p>
                                        <span style={{ color: "#999" }}>
                                            Email:
                                        </span>
                                        <p style={{ margin: "0px" }}>
                                            {data?.companyemail}
                                        </p>
                                        <span style={{ color: "#999" }}>
                                            Mobileno:
                                        </span>
                                        <p style={{ margin: "0px" }}>
                                            {data?.comapny_mob} /{" "}
                                            {data?.comapny_aletrmob}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Jobdetails;
