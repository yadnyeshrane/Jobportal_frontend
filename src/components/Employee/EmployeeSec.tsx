import { useEffect, useState } from "react";
import { getResume } from "../appi";
import Category from "../Category/Category";
import Header from "../Header";
import Topbar from "../Topbar";
import Resume from "./Resume";

function EmployeeSec() {
    const [resumeData, setResumeData] = useState<any>(null);

    useEffect(() => {
        async function getEmployee() {
            const userId = localStorage.getItem("loggedInUser")
            const res = await getResume(userId);
            if(res.status === 200){
                localStorage.setItem('userId',res.message.data._id)
                setResumeData(res.message.data);
            }
        }
        getEmployee();
    }, []);

    let lookingJob = resumeData?.lookingJob;
    let prefered_job_sector = resumeData?.prefered_job_sector;

    return (
        <>
            <Topbar />
            <Header />
            {resumeData && (
                <div className="container">
                    {lookingJob == 'Yes' && prefered_job_sector ? (
                        <div className="row p-0">
                            <div className="col-md-6 m-0" >
                                <Resume data={resumeData} />
                            </div>
                            <div className="col-md-6 m-0">
                                <Category prefered_sec={prefered_job_sector} />
                            </div>
                        </div>
                    ) : (
                        <Resume data={resumeData} />
                    )}
                </div>
            )}
        </>
    );
}

export default EmployeeSec;
