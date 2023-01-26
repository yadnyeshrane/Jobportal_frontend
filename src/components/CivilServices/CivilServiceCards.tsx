import React, { ReactNode } from "react";
import { civilServices_list } from "../../common/StaticData";

interface Props {
    empData?: ReactNode;
}

function CivilServiceCards({ empData }: Props) {
    const { _id, name, surname, occupation, addresLine_2, mobileno }: any =
        empData;

    return (
        <div>
            <h5 className="card-title">
                {name}&nbsp;{surname}
            </h5>
            <h6 className="card-title">{civilServices_list(occupation)}</h6>
            <div className="d-flex">
                <p className="exp_range">
                    <i className="bi bi-telephone-fill" />
                    {mobileno}
                </p>
                {addresLine_2 && (
                    <p>
                        |&nbsp;&nbsp;
                        <i className="bi bi-geo-alt-fill" />
                        {addresLine_2}
                    </p>
                )}
            </div>
        </div>
    );
}

export default CivilServiceCards;