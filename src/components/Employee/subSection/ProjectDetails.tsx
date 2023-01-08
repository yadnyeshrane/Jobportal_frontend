import { ReactNode } from "react";

interface Props {
    data?: ReactNode;
}

function ProjectDetails({ data }: Props) {
    const { project_title, project_details, project_link }: any = data;

    return (
        <>
            <p className="secondary_txt">{project_title}</p>
            <a href={project_link}>{project_link}</a>
            <p className="desc_box">{project_details}</p>
        </>
    );
}

export default ProjectDetails;
