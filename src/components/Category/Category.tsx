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
                        <option value="" disabled>Choose...</option>
                        <option value="0" selected={prefered_sec == "0" && true}>All</option>
                        <option value="1" selected={prefered_sec == "1" && true}>IT</option>
                        <option value="3" selected={prefered_sec == "3" && true}>HR</option>
                        <option value="2" selected={prefered_sec == "2" && true}>Marketing</option>
                    </select>
                    <span
                        className="input-group-text"
                        id="inputGroupEmail"
                    >
                        <i className="bi bi-search"></i>
                    </span>                       
                </div>
                {jobsData && jobsData.length > 0 ?
                    jobsData.map((data: any) => (
                        <div className="card my-2 job_card" key={data._id}>
                            <div className="card-body">
                                <CategoryCard cardData={data} />
                            </div>
                        </div>
                    ))
                    :
                    <h2 className="text-center mt-5">No Records Found</h2>
                }
            </div>
        </>
    );
}

export default Category;
