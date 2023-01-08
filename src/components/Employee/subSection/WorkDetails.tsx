import { ReactNode } from "react";

interface Props {
    data?: ReactNode;
}

function WorkDetails({ data }: Props) {
    const {
        job_title,
        job_from_date,
        job_to_date,
        company_name,
        company_location,
        work_description,
    }: any = data;

    return (
        <>
            {job_title && <p className="secondary_txt">{job_title}</p>}
            {job_from_date && job_to_date && (
                <p className="secondary_txt">
                    {job_from_date}-{job_to_date}
                </p>
            )}
            {company_name && (
                <p className="secondary_txt">
                    {company_name}
                    {company_location && ` , ${company_location}`}
                </p>
            )}
            <p className="desc_box">{work_description}</p>
        </>
    );
}

export default WorkDetails;
