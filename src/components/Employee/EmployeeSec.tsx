// import { getResume } from "../appi";
import Category from "../Category/Category";
import Header from "../Header";
import Topbar from "../Topbar";
import Resume from "./Resume";

function EmployeeSec() {
    // async function getEmployee() {
    //     const res = await getResume('9920471835')
    //     console.log("........first",res)
    // }
    // getEmployee();

    const lookingJob = "true";
    const prefered_job_sector = "";

    return (
        <>
            <Topbar />
            <Header />
            <div className="container">
                {lookingJob && prefered_job_sector ? (
                    <div className="d-flex">
                        <Resume />
                        <Category prefered_sec={prefered_job_sector} />
                    </div>
                ) : (
                    <Resume />
                )}
            </div>
        </>
    );
}

export default EmployeeSec;
