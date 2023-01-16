import React, { ReactNode } from "react";
import { useNavigate } from "react-router";

interface Props {
    cardData?: ReactNode;
    isEdit?: ReactNode;
}

function CategoryCard({ cardData, isEdit = false}: Props) {
    const navigate = useNavigate();
    const {
        _id,
        position,
        compnayname,
        min_exp,
        max_exp,
        min_salary,
        max_salary,
        adressline_2,
        vacany,
        companyemail,
        requiredSkills,
    }: any = cardData;

    function showjobdetails(id: string) {
        console.log("Id", id);
        navigate({
            pathname: "/jobdetails",
            search: `?id=${id}`,
        });
    }

    return (
        <>
            <div onClick={() => showjobdetails(_id)}>
                <div className="d-flex justify-content-between">
                <h5 className="card-title">{position}</h5> 
                    {isEdit && <i className="bi bi-pen"  onClick={()=>alert('clicked')}></i>}
                </div>
                <h6 className="card-title">{compnayname}</h6>
                <div className="d-flex">
                    <p className="exp_range">
                        <i className="bi bi-briefcase-fill" />
                        {min_exp}-{max_exp}
                    </p>
                    <p>
                        |&nbsp;&nbsp;
                        <i className="bi bi-cash" />
                        {min_salary}-{max_salary}
                    </p>
                    <p>
                        |&nbsp;&nbsp;
                        <i className="bi bi-geo-alt-fill" />
                        {adressline_2}
                    </p>
                </div>
                <div className="d-flex">
                    <p>
                        <i className="bi bi-people-fill" />
                        {vacany}
                    </p>
                    <p>
                        |&nbsp;&nbsp;
                        <i className="bi bi-envelope-at-fill" />
                        {companyemail}
                    </p>
                </div>

                <p className="card-text">{requiredSkills}</p>
            </div>
        </>
    );
}

export default CategoryCard;
