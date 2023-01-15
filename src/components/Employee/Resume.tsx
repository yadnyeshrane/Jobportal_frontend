import { ReactNode, useState } from "react";
import EducationDetails from "./subSection/EducationDetails";
import CertiificateDetails from "./subSection/CertiificateDetails";
import ProjectDetails from "./subSection/ProjectDetails";
import WorkDetails from "./subSection/WorkDetails";
import { Category_list } from "../../common/StaticData";

interface Props {
    data?: ReactNode;
}

function Resume({ data }: Props) {
    const resumeData: any = data;


    
    const {
        certification_Details,
        education_Details,
        email,
        firstname,
        headline,
        job_exp,
        language_known,
        lastname,
        lookingJob,
        mobileno,
        objective,
        online_profile,
        prefered_job_sector,
        project_Details,
        relocateFlag,
        skills,
        updatedAt,
        work_Details,
        _id,
    }: any = resumeData;


    const skillArr = skills?.split(",")
    const languageArr = language_known?.split(",")
    const workDetails = work_Details && JSON.parse(work_Details);
    const projectDetails =
        project_Details && JSON.parse(project_Details);
    const certificationDetails =
        certification_Details &&
        JSON.parse(certification_Details);



    return (
        <>
            <div className="mt-2 resume">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <input
                                type="text"
                                defaultValue={_id}
                                hidden
                            />
                            <div className="col-md-5">
                            <img
                                alt=""
                                className="rounded-circle m-auto"
                                width="200px"
                                height="250px"
                                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                            />
                            </div>
                            <div className="col-md-7 m-auto p-3">
                                {headline && (
                                    <p className="resume_title">
                                        {headline}
                                    </p>
                                )}
                                <p> {online_profile} </p>
                                <p>
                                    <strong>Name:</strong>
                                    &nbsp;&nbsp;{firstname}&nbsp;
                                    {lastname}
                                </p>
                                <p>
                                    <strong>Email:</strong>
                                    &nbsp;&nbsp;{email}
                                </p>
                                <p>
                                    <strong>Mobile No:</strong>
                                    &nbsp;&nbsp;{mobileno}
                                </p>
                                {job_exp && (
                                    <p>
                                        <strong>Experience:</strong>
                                        &nbsp;&nbsp;{job_exp}
                                    </p>
                                )}
                            </div>
                        </div>
                        {objective && (
                            <div>{objective}</div>
                        )}

                        {(lookingJob || prefered_job_sector ||
                            relocateFlag) && (
                            <>
                                <hr />
                                <div>
                                    <div className="row">
                                        {lookingJob && (
                                            <p className="col-md-6">
                                                <strong>
                                                    Looking for Job:
                                                </strong>
                                                &nbsp;&nbsp;
                                                {lookingJob}
                                            </p>
                                        )}
                                        {relocateFlag && (
                                            <p className="col-md-6">
                                                <strong>
                                                    Willing to Relocate:
                                                </strong>
                                                &nbsp;&nbsp;
                                                {relocateFlag}
                                            </p>
                                        )}
                                    </div>
                                    {prefered_job_sector && (
                                        <p className="col-md-6">
                                            <strong>
                                                Prefered Job Section:
                                            </strong>
                                            &nbsp;&nbsp;
                                            {Category_list(prefered_job_sector)}
                                        </p>
                                    )}
                                </div>
                            </>
                        )}

                        {(skills || language_known) && (
                            <>
                                <hr />
                                <div className="row">
                                    <div className="col-md-6">
                                        <strong>Skills:</strong>
                                        <ul>
                                            {skillArr.map(
                                                (data: any, i: any) => (
                                                    <li key={i}>{data} </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <strong>Languages Known:</strong>
                                        <ul>
                                            {languageArr.map(
                                                (data: any, i: any) => (
                                                    <li key={i}>{data} </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )}

                        {education_Details?.length > 0 && (
                            <>
                                <hr />
                                <div id="educational_details">
                                    <h2 className="section_title">
                                        Educational Details
                                    </h2>
                                    <ul>
                                        {education_Details?.map(
                                            (data: any, index: any) => (
                                                <li key={index}>
                                                    <EducationDetails
                                                        data={data}
                                                    />
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </>
                        )}

                        {workDetails.length > 0 && (
                            <>
                                <hr />
                                <div id="work_details">
                                    <h2 className="section_title">
                                        Work Experience
                                    </h2>
                                    <ul>
                                        {workDetails.map(
                                            (data: any, i: any) => (
                                                <li key={i}>
                                                    <WorkDetails data={data} />
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </>
                        )}
                        {certificationDetails.length > 0 && (
                            <>
                                <hr />
                                <div id="certficates">
                                    <h2 className="section_title">
                                        Certificates
                                    </h2>
                                    <ul>
                                        {certificationDetails.map(
                                            (data: any, i: any) => (
                                                <li key={i}>
                                                    <CertiificateDetails
                                                        data={data}
                                                    />
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </>
                        )}

                        {projectDetails?.length > 0 && (
                            <>
                                <hr />
                                <div id="projects">
                                    <h2 className="section_title">
                                        Projects / Paper Presented
                                    </h2>
                                    <ul>
                                        {projectDetails.map(
                                            (data: any, i: any) => (
                                                <li key={i}>
                                                    <ProjectDetails
                                                        data={data}
                                                    />
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </div>          
            </div>
        </>
    );
}

export default Resume;
