import { useEffect, useState } from "react";
import { getJobByCreator } from "../appi";
import CategoryCard from "../Category/CategoryCard";

function CreatedJobList() {
    const [jobsData, setJobsData] = useState([]);
    useEffect(() => {
        async function getJob() {
            let creator_id = localStorage.getItem("loggedInUser");
            let res = await getJobByCreator(creator_id);
            setJobsData(res.message.data);
        }
        getJob();
    }, []);

    return (
        <>
            <div className="container">
                {jobsData &&
                    jobsData.map((data: any) => (
                        <div className="card my-2 job_card" key={data._id}>
                            <div className="card-body">
                                <CategoryCard cardData={data} isEdit={true} />
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default CreatedJobList;
