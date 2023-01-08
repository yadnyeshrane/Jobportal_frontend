import React, { ReactNode } from "react";
import moment from "moment";

interface Props {
    data?: ReactNode;
}

function EducationDetails({ data }: Props) {
    const {
        cur_enrolled,
        edu_time_from,
        edu_time_to,
        education_level,
        field_of_study,
        grade,
        school,
        school_location,
    }: any = data;

    let fromDate: any = moment(edu_time_from).format("YYYY");
    let toDate = cur_enrolled ? "Present" : moment(edu_time_to).format("YYYY");

    // console.log(fromDate,toDate)

    return (
        <>
            {education_level == "None" ? (
                <>
                    <p className="secondary_txt">NIL</p>
                </>
            ) : (
                <>
                    <p className="secondary_txt">
                        {education_level}
                        {field_of_study && ` ( ${field_of_study})`}
                    </p>
                    <p>{`${fromDate} - ${toDate}`}</p>
                    {school && (
                        <p>
                            {school}
                            {school_location && `, ${school_location}`}
                        </p>
                    )}
                    <p className="desc_box">
                        <strong>Grade / Percentage :</strong>
                        &nbsp;&nbsp;
                        {grade}
                    </p>
                </>
            )}
        </>
    );
}

export default EducationDetails;
