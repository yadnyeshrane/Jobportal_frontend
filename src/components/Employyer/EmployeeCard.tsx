import React, { ReactNode } from "react";
import { useNavigate } from "react-router";

interface Props {
    empData?: ReactNode;
}

function EmployeeCard({ empData }: Props) {
    const navigate = useNavigate();
    const {
        _id,
        firstname,
        lastname,
        headline,
        job_exp,
        objective,
        relocateFlag,
        prefered_job_sector,
        mobileno
    }: any = empData;

    function employeeDetails(id: string) {
        console.log("Id", id);
        navigate("/candidate-details", {
            state: {
                mobileno,
            },
        });
    }

    return (
        <div onClick={() => employeeDetails(_id)}>
            <h5 className="card-title">
                {firstname}&nbsp;{lastname}
            </h5>
            <h6 className="card-title">{headline}</h6>
            <div className="d-flex">
                <p className="exp_range">
                    <i className="bi bi-briefcase-fill" />
                    {job_exp}
                </p>
                <p>
                    |&nbsp;&nbsp;
                    <i className="bi bi-geo-alt-fill" />
                    {"Employee City"}
                </p>
                <p>
                    |&nbsp;&nbsp;
                    <i className="bi bi-geo-alt-fill" />
                    {`Willing to Relocate : ${relocateFlag}`}
                </p>
            </div>
            <p className="card-text">{objective}</p>
        </div>
    );
}

export default EmployeeCard;
