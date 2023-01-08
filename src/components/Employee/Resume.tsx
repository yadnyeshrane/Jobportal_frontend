function Resume() {
    const data = {
        certification_Details:
            '[{"certificate_title":"Photography","certification_date":"2022-07-15"}]',
        education_Details: [
            {
                cur_enrolled: true,
                edu_time_from: "2019-01-04",
                edu_time_to: "2023-01-08",
                education_level: "Doctorate",
                field_of_study: "Bio-Chemistry",
                grade: "98%",
                school: "Empire State University",
                school_location: "New York",
            },
        ],
        email: "spiderman@marvels.com",
        headline: "SPIDER-MAN",
        job_exp: "12",
        language_known: "English, Spanish, Italian",
        lookingJob: "Yes",
        mobileno: "9876543210",
        name: "Peter Parker",
        objective:
            "Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books.",
        online_profile:
            "https://www.marvel.com/characters/spider-man-peter-parker",
        prefered_job_sector: "1",
        project_Details:
            '[{"project_title":"Photographer","project_link":"https://www.marvel.com/movies/the-marvels","project_details":"Peter Parker worked for the Daily Bugle as a photographer before he resigned after Spider-Man was blamed for a killing spree perpetrated by Electro and became Dr. Otto Octavius\' research assistant at Octavius Industries some years prior to the events of the game."}]',
        relocateFlag: "Yes",
        skills: 'Superhuman Strength, Superhuman Speed, Superhuman Reflexes, Superhuman Durability, Healing Factor, "Spider-Sense" Alert, x Heightened Senses, Wallcrawling',
        work_Details:
            '[{"job_title":"Photographer","company_name":"The Daily Bugle","company_location":"New York","cur_working":true,"job_from_date":"2022-01-08","job_to_date":"2023-01-08","work_description":"Peter Parker worked for the Daily Bugle as a photographer before he resigned after Spider-Man was blamed for a killing spree perpetrated by Electro and became Dr. Otto Octavius\' research assistant at Octavius Industries some years prior to the events of the game.\\n\\n"}]',
    };

    const work_Details = JSON.parse(data.work_Details);
    const project_Details = JSON.parse(data.project_Details);
    const certification_Details = JSON.parse(data.certification_Details);

    console.log(work_Details);

    return (
        <>
            <div className="mt-2">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex">
                            <img
                                alt=""
                                className="rounded-circle"
                                width="200px"
                                height="250px"
                                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                            />
                            <div className="col p-3">
                                {data.headline && (
                                    <p className="resume_title">
                                        {data.headline}
                                    </p>
                                )}
                                <p> { data.online_profile} </p>
                                <p>
                                    <strong>Name:</strong>
                                    &nbsp;&nbsp;{data.name}
                                </p>
                                <p>
                                    <strong>Email:</strong>
                                    &nbsp;&nbsp;{data.email}
                                </p>
                                <p>
                                    <strong>Mobile No:</strong>
                                    &nbsp;&nbsp;{data.mobileno}
                                </p>
                                {data.job_exp && (
                                    <p>
                                        <strong>Experience:</strong>
                                        &nbsp;&nbsp;{data.job_exp}
                                    </p>
                                )}
                            </div>
                        </div>
                        {data.objective && <div>{data.objective}</div>}
                        <hr />
                        <div>
                            <div className="d-flex">
                                <p className="col-md-6">
                                    <strong>Looking for Job:</strong>
                                    &nbsp;&nbsp;{data.lookingJob}
                                </p>
                                <p className="col-md-6">
                                    <strong>Willing to Relocate:</strong>
                                    &nbsp;&nbsp;{data.relocateFlag}
                                </p>
                            </div>
                            <p className="col-md-6">
                                <strong>Prefered Job Section:</strong>
                                &nbsp;&nbsp;{data.prefered_job_sector}
                            </p>
                        </div>
                        <hr />
                        <div className="d-flex">
                            <div className="col-md-6">
                                <strong>Skills:</strong>
                                <ul>
                                    <li key={0}>Superhuman Strength.</li>
                                    <li key={1}>Superhuman Speed. </li>
                                    <li key={2}>Superhuman Reflexes.</li>
                                    <li key={3}>Superhuman Durability.</li>
                                    <li key={4}>Healing Factor.</li>
                                    <li key={5}>"Spider-Sense" Alert.</li>
                                    <li key={6}>x Heightened Senses.</li>
                                    <li key={7}>Wallcrawling.</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <strong>Languages Known:</strong>
                                <ul>
                                    <li key={0}>English</li>
                                    <li key={1}>Spanish</li>
                                    <li key={2}>Italian</li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div id="educational_details">
                            <h2 className="section_title">
                                Educational Details
                            </h2>
                            <ul>
                                {data.education_Details.map((data) => (
                                    <li>
                                        <p className="secondary_txt">
                                            {data.education_level}(
                                            {data.field_of_study})<br />
                                            {data.edu_time_from}-
                                            {data.edu_time_to}
                                            <br />
                                            {data.school},{data.school_location}
                                        </p>
                                        <p>
                                            <strong>
                                                Grade / Percentage :
                                            </strong>
                                            &nbsp;&nbsp;
                                            {data.grade}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <hr />
                        <div id="work_details">
                            <h2 className="section_title">Work Experience</h2>
                            {work_Details.map((data: any) => (
                                <ul>
                                    <li>
                                        <p className="secondary_txt">
                                            {data.job_title} <br />
                                            {data.job_from_date}-
                                            {data.job_to_date}
                                            <br />
                                            {data.company_name} ,{" "}
                                            {data.company_location}
                                        </p>
                                        <p>{data.work_description} </p>
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <hr />
                        <div id="certficates">
                            <h2 className="section_title">Certificates</h2>
                            {certification_Details.map((data: any) => (
                                <ul>
                                    <li>
                                        <p className="secondary_txt">
                                            {data.certificate_title}
                                            <br />
                                            Dated: {data.certification_date}
                                        </p>
                                    </li>
                                </ul>
                            ))}
                        </div>
                        <hr />
                        <div id="project_details">
                            <h2 className="section_title">
                                Projects / Paper Presented
                            </h2>
                            {project_Details.map((data: any) => (
                                <ul>
                                    <li>
                                        <p className="secondary_txt">
                                            {data.project_title}
                                            <br />
                                            <a href={data.project_link}>
                                                {data.project_link}
                                            </a>
                                        </p>
                                        <p>{data.project_details} </p>
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="d-grid col-md-7 my-4 m-auto">
                    <a
                        href="/update_resume"
                        className="btn btn-primary"
                        type="button"
                    >
                        Edit Resume
                    </a>
                </div>
            </div>
        </>
    );
}

export default Resume;
