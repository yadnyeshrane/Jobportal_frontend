import { ReactNode, useEffect, useState } from "react";
import { getJobByCategory } from "../appi";


interface Props {
    prefered_sec?: ReactNode
}

function Category({prefered_sec}:Props) {
    const [selectedSec, setSelectedSec] = useState(prefered_sec)
    const [jobsData,setJobsData] = useState([])

    useEffect(() => {
        async function getJob() {
            let res = await getJobByCategory(selectedSec);
            setJobsData(res.message.data)            
        }
        getJob()
    }, [selectedSec]);

    return (
        <>
            <div className="container">
                <div className="input-group mt-2">
                    <select
                        className="form-control"
                        name="job_sector"
                        id="job_sector"
                        // defaultValue="0"
                        // value={selectedSec}
                        onChange={(e)=>setSelectedSec(e.target.value)}
                    
                    >
                        <option value="">Choose...</option>
                        <option value="0">All</option>
                        <option value="1">IT</option>
                        <option value="3">HR</option>
                        <option value="2">Marketing</option>
                    </select>
                    <div className="input-group-append">
                        <button
                            className="btn btn-primary bltn-block"
                            type="button"
                        >
                            Submit
                        </button>
                    </div>
                </div>
                {jobsData &&
                    jobsData.map((data: any) => (
                        <div className="card my-2 job_card" key={data._id}>
                            <div className="card-body">
                                <h5 className="card-title">{data.position}</h5>
                                <h6 className="card-title">
                                    {data.compnayname}
                                </h6>
                                <div className="d-flex">
                                    <p className="exp_range">
                                        <i className="bi bi-briefcase-fill"/>
                                        {data.min_exp}-{data.max_exp} 
                                    </p>
                                    <p>
                                        |&nbsp;&nbsp;<i className="bi bi-cash"/>
                                        {data.min_salary}-{data.max_salary} 
                                    </p>
                                    <p>
                                        |&nbsp;&nbsp;<i className="bi bi-geo-alt-fill"/>
                                        {data.adressline_2}
                                    </p>
                                </div>
                                <div className="d-flex">
                                    <p>
                                        <i className="bi bi-people-fill"/>
                                        {data.vacany} 
                                    </p>
                                    <p>
                                        |&nbsp;&nbsp;<i className="bi bi-envelope-at-fill"/>
                                        {data.companyemail}
                                    </p>
                                </div>

                                <p className="card-text">{data.requiredSkills}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Category;
