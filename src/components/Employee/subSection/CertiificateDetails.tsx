import React, { ReactNode } from "react";
import moment from "moment";

interface Props {
    data?: ReactNode;
}

function CertiificateDetails({ data }: Props) {
    const { certificate_title, certification_date, certificate_link }: any = data;

    const certDate = moment(certification_date).format("DD MMM, YYYY");

    return (
        <>
            <p className="secondary_txt">{certificate_title}</p>
            {certDate && (
                <p>
                    <strong>Dated :</strong>&nbsp;
                    <em>{certDate}</em>
                </p>
            )}
            {certificate_link && (
                <>
                    <p className="desc_box">
                        <strong>Link : </strong>&nbsp;
                        <a className="secondary_txt" href={certificate_link}>{certificate_link}</a>
                    </p>
                </>
            )}
        </>
    );
}

export default CertiificateDetails;
