import { ReactNode, useEffect, useState } from "react";
import { getJobByCategory } from "../appi";
import CategoryCard from "./CategoryCard";

interface Props {
    prefered_sec?: ReactNode;
}

function Category({ prefered_sec }: Props) {
    const [selectedSec, setSelectedSec] = useState(prefered_sec);
    const [jobsData, setJobsData] = useState([]);

    useEffect(() => {
        async function getJob() {
            let res = await getJobByCategory(selectedSec);
            setJobsData(res.message.data);
        }
        getJob();
    }, [selectedSec]);
    
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
                                <CategoryCard cardData={data} />
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default Category;
