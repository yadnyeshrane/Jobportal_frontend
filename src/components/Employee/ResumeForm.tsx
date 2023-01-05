import { useFormik } from "formik";
import React from "react";
import Header from "../Header";
import Topbar from "../Topbar";

import * as Yup from "yup";
const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SignupSchema = Yup.object().shape({
    // name: Yup.string().required("FirstName should not be empty!"),
    // surname: Yup.string().required("Lastname should not be empty!"),
    // mobileno: Yup.string()
    //     .matches(phoneRegExp, "Phone number is not valid")
    //     .length(10, "mobile number should be 10 charecters long")
    //     .required("Mobile Number should not be empty!"),
    // email: Yup.string()
    //     .email("Invalid email format!")
    //     .required("Email should not be empty!"),
    // password: Yup.string()
    //     .min(8, "Password should be atleast 8 characters long!")
    //     .required("Password should not be empty!"),
    // confirm_password: Yup.string()
    //     .oneOf([Yup.ref("password")], "Password's not match!")
    //     .required("Required!"),
});

function ResumeForm() {
    const formik = useFormik({
        initialValues: {
            // name: "",
            // surname: "",
            // mobileno: "",
            // email: "",
            // password: "",
            // confirm_password: "",
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            //  handleSignup(values);
        },
    });

    return (
        <>
            <Topbar></Topbar>
            <Header></Header>

            <div className="container mt-3">
                <form onSubmit={formik.handleSubmit}>
                    <div className="row jumbotron box8">
                        <div className="col-sm-6 form-group mt-4">
                            <label htmlFor="headline">Headline</label>
                            <input
                                type="text"
                                className="form-control"
                                name="headline"
                                id="headline"
                                placeholder=""
                            />
                        </div>

                        <div className="col-sm-6" />
                        <div className="col-sm-6 form-group ">
                            <label htmlFor="job_exp">Job Experience</label>
                            <input
                                type="text"
                                className="form-control"
                                name="job_exp"
                                id="job_exp"
                                placeholder=""
                            />
                        </div>
                        <div className="col-sm-6" />
                        <div className="col-sm-6 form-group">
                            <div className="form-group">
                                <label htmlFor="objective">Objective</label>
                                <textarea
                                    className="form-control"
                                    id="objective"
                                    rows={3}
                                    defaultValue={""}
                                />
                            </div>
                        </div>

                        <div className="col-sm-6 form-group" />

                        <div className="col-sm-6 form-group">
                            <label htmlFor="relocateFlag">
                                Are you willing to relocate
                            </label>
                            <div className="d-flex">
                                <div className="form-check col-md-6">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault2"
                                        defaultChecked
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexRadioDefault2"
                                    >
                                        No
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexRadioDefault1"
                                    >
                                        Yes
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5" id="work_experience">
                            <label htmlFor="work_exp">Work Experience</label>
                            <div className="col-sm-6 form-group mt-2">
                                <label htmlFor="job_title">Job title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="job_title"
                                    id="job_title"
                                    placeholder=""
                                />
                            </div>
                            <div className="col-sm-6 form-group mt-2">
                                <label htmlFor="company_name">Company</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="company_name"
                                    id="company_name"
                                    placeholder=""
                                />
                            </div>
                            <div className="col-sm-6 form-group mt-2">
                                <label htmlFor="work_location">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="work_location"
                                    id="work_location"
                                    placeholder=""
                                />
                            </div>
                            <div className="col-sm-6 form-group mt-2">
                                <label htmlFor="time_period">Time period</label>
                                <div className="col-md-6 form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault2"
                                        defaultChecked
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexRadioDefault2"
                                    >
                                        I currently work here
                                    </label>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label htmlFor="from_date">From</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="from_date"
                                            id="from_date"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="to_date">To </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="to_date"
                                            id="to_date"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 form-group">
                                <div className="form-group">
                                    <label htmlFor="work_description">
                                        Description
                                    </label>
                                    <br />
                                    <em style={{ fontSize: "12px" }}>
                                        In 30 or more words describe your
                                        professional responsibilities and
                                        accomplishments. (Eg: Maintained
                                        inventory of office supplies and ordered
                                        as and when needed)
                                    </em>
                                    <textarea
                                        className="form-control"
                                        id="work_description"
                                        rows={3}
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-5" id="education_section">
                            <label htmlFor="education_sec">Education</label>
                            <div className="col-sm-6 form-group mt-2">
                                <label htmlFor="education_level">
                                    Level of Education
                                </label>
                                <select
                                    className="form-control"
                                    id="select-15"
                                    name="degree"
                                >
                                    <option value="">Select an option</option>
                                    <option value="None">None</option>
                                    <option value="Secondary(10th Pass)">
                                        Secondary(10th Pass)
                                    </option>
                                    <option value="Higher Secondary(12th Pass)">
                                        Higher Secondary(12th Pass)
                                    </option>
                                    <option value="Diploma">Diploma</option>
                                    <option value="Bachelor's">
                                        Bachelor's
                                    </option>
                                    <option value="Master's">Master's</option>
                                    <option value="Doctorate">Doctorate</option>
                                    <option value="OTHER_KEY">Custom</option>
                                </select>
                            </div>

                            <div className="col-sm-6 form-group mt-2">
                                <label htmlFor="field_of_study">
                                    Field of study
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="field_of_study"
                                    id="field_of_study"
                                    placeholder=""
                                />
                            </div>
                            <div className="col-sm-6 form-group mt-2">
                                <label htmlFor="school">
                                    School/College Or University
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="school"
                                    id="school"
                                    placeholder=""
                                />
                            </div>
                            <div className="col-sm-6 form-group mt-2">
                                <label htmlFor="school_location">
                                    School/College City
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="school_location"
                                    id="school_location"
                                    placeholder=""
                                />
                            </div>
                            <div className="col-sm-6 form-group mt-2">
                                <label htmlFor="edu_time">Time period</label>
                                <div className="col-md-6 form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault2"
                                        defaultChecked
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="flexRadioDefault2"
                                    >
                                        Currently Enrolled
                                    </label>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label htmlFor="edu_time_from">
                                            From
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="min_salary"
                                            id="min_salary"
                                            placeholder="Number of min_salary"
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="edu_time_to">To </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="max_salary"
                                            id="max_salary"
                                            placeholder="Number of max_salary"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 form-group mt-2">
                                <label htmlFor="grade">
                                    Grade / Percentage
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="grade"
                                    id="grade"
                                    placeholder=""
                                />
                            </div>
                        </div>

                        <div className="mt-5">
                            <div className="col-sm-6 form-group">
                                <label htmlFor="skills">Skills</label>
                                <input
                                    type="text"
                                    name="skills"
                                    id="skills"
                                    className="form-control"
                                />
                            </div>
                            <div className="col-sm-6 form-group">
                                <label htmlFor="language">
                                    Languages Known
                                </label>
                                <input
                                    type="text"
                                    name="language"
                                    id="language"
                                    className="form-control"
                                />
                            </div>
                        </div>

                        <div className="mt-5">
                            <div className="col-sm-6 form-group">
                                <label htmlFor="online_profile">
                                    online Profile
                                </label>
                                <input
                                    type="text"
                                    name="online_profile"
                                    id="online_profile"
                                    className="form-control"
                                />
                            </div>
                        </div>

                        <div className="mt-5" id="certification_section">
                            <label htmlFor="certification_sec">
                                Certification
                            </label>
                            <div className="col-sm-6 form-group mt-2">
                                <label htmlFor="certificate_title">
                                    certification Title
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="certificate_title"
                                    id="certificate_title"
                                    placeholder=""
                                />
                            </div>

                            <div className="col-sm-6 form-group mt-2">
                                <label htmlFor="cert_date">Date Issued</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="cert_date"
                                    id="cert_date"
                                    placeholder=""
                                />
                            </div>
                        </div>

                        <div className="mt-5" id="project_section">
                            <label htmlFor="project_sec">
                                Project / Paper Presented
                            </label>
                            <div className="col-sm-6 form-group mt-2">
                                <label htmlFor="project_title">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="project_title"
                                    id="project_title"
                                    placeholder=""
                                />
                            </div>

                            <div className="col-sm-6 form-group mt-2">
                                <label htmlFor="project_link">Link</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="project_link"
                                    id="project_link"
                                    placeholder=""
                                />
                            </div>
                            <div className="col-sm-6 form-group">
                                <div className="form-group">
                                    <label htmlFor="project_details">
                                        Details
                                    </label>
                                    <br />
                                    <em style={{ fontSize: "12px" }}>
                                        In 30 or more words describe your
                                        project or paper.
                                    </em>
                                    <textarea
                                        className="form-control"
                                        id="project_details"
                                        rows={3}
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-grid col-md-7 mt-4 m-auto">
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ResumeForm;
