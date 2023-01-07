function Resume() {
    const headline = "SPIDER-MAN";
    const job_exp = "12 Months";
    const objective =
        "Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books.";

    return (
        <>
            <div className="col-md-6 mt-2">
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
                                {headline && (
                                    <p className="resume_title">{headline}</p>
                                )}
                                <p>
                                    <strong>Name:</strong>
                                    &nbsp;&nbsp;Peter Parker
                                </p>
                                <p>
                                    <strong>Email:</strong>
                                    &nbsp;&nbsp;Peter Parker
                                </p>
                                <p>
                                    <strong>Mobile No:</strong>
                                    &nbsp;&nbsp;Peter Parker
                                </p>
                                {job_exp && (
                                    <p>
                                        <strong>Experience:</strong>
                                        &nbsp;&nbsp;{job_exp}
                                    </p>
                                )}
                            </div>
                        </div>
                        {objective && <div>{objective}</div>}{" "}
                        ---------------------------------------------------------------------------------
                        <div>
                            <div className="d-flex">
                                <p className="col-md-6">
                                    <strong>Looking for Job:</strong>
                                    &nbsp;&nbsp;No
                                </p>
                                <p className="col-md-6">
                                    <strong>Willing to Relocate:</strong>
                                    &nbsp;&nbsp;Yes
                                </p>
                            </div>
                            <p className="col-md-6">
                                <strong>Prefered Job Section:</strong>
                                &nbsp;&nbsp;Marketing
                            </p>
                        </div>
                        ---------------------------------------------------------------------------------
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
                        ---------------------------------------------------------------------------------
                        <div id="educational_details">
                            <h2 className="section_title">
                                Educational Details
                            </h2>
                            <ul>
                                <li>
                                    <p className="secondary_txt">
                                        Doctorate in Bio-Chemistry <br />
                                        2017-Present
                                        <br />
                                        Empire State University, New York
                                    </p>
                                    <p>
                                        <strong>Grade / Percentage :</strong>
                                        &nbsp;&nbsp;97%
                                    </p>
                                </li>
                            </ul>
                        </div>
                        ---------------------------------------------------------------------------------
                        <div id="work_details">
                            <h2 className="section_title">Work Experience</h2>
                            <ul>
                                <li>
                                    <p className="secondary_txt">
                                        Photographer <br />
                                        2021-Present
                                        <br />
                                        The Daily Bugle , New York
                                    </p>
                                    <p>
                                        Peter Parker worked for the Daily Bugle
                                        as a photographer before he resigned
                                        after Spider-Man was blamed for a
                                        killing spree perpetrated by Electro and
                                        became Dr. Otto Octavius' research
                                        assistant at Octavius Industries some
                                        years prior to the events of the game.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        ---------------------------------------------------------------------------------
                        <div id="certficates">
                            <h2 className="section_title">Certificates</h2>
                            <ul>
                                <li>
                                    <p className="secondary_txt">
                                        Photography
                                        <br />
                                        Dated: 20-12-2021
                                    </p>
                                </li>
                            </ul>
                        </div>
                        ---------------------------------------------------------------------------------
                        <div id="project_details">
                            <h2 className="section_title">
                                Projects / Paper Presented
                            </h2>
                            <ul>
                                <li>
                                    <p className="secondary_txt">
                                        Photographer
                                        <br />
                                        <a href="https://www.marvel.com/movies/the-marvels">
                                            https://www.marvel.com/movies/the-marvels
                                        </a>
                                    </p>
                                    <p>
                                        Peter Parker worked for the Daily Bugle
                                        as a photographer before he resigned
                                        after Spider-Man was blamed for a
                                        killing spree perpetrated by Electro and
                                        became Dr. Otto Octavius' research
                                        assistant at Octavius Industries some
                                        years prior to the events of the game.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="d-grid col-md-7 my-4 m-auto">
                    <a href="/update_resume" className="btn btn-primary" type="button">
                        Edit Resume
                    </a>
                </div>
            </div>
        </>
    );
}

export default Resume;
