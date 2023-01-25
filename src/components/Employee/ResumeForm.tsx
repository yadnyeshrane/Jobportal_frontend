import { useFormik } from "formik";
import Header from "../Header";
import Topbar from "../Topbar";
import * as Yup from "yup";
import InputError from "../../common/InputError";
import moment from "moment";
import { editResume } from "../appi";
import { useLocation} from "react-router-dom";

const ResumeSchema = Yup.object().shape({
    id: Yup.string(),
    firstname: Yup.string(),
    lastname: Yup.string(),
    mobileno: Yup.string(),
    email: Yup.string(),
    headline: Yup.string().required("Headline should not be empty!"),
    job_exp: Yup.string().required("Job Experience should not be empty!"),
    objective: Yup.string(),
    relocateFlag: Yup.string().required("Please choose One!"),
    lookingJob: Yup.string().required("Please choose One!"),
    prefered_job_sector: Yup.string().required(
        "Please choose Prefered Job Sector!"
    ),
    job_title: Yup.string(),
    company_name: Yup.string(),
    company_location: Yup.string(),
    cur_working: Yup.boolean(),
    job_from_date: Yup.string(),
    job_to_date: Yup.string(),
    work_description: Yup.string(),
    education_level: Yup.string().required("Education should not be empty!"),
    field_of_study: Yup.string(),
    school: Yup.string(),
    school_location: Yup.string(),
    cur_enrolled: Yup.boolean(),
    edu_time_from: Yup.string(),
    edu_time_to: Yup.string(),
    grade: Yup.string(),
    skills: Yup.string().required("Skills should not be empty!"),
    language_known: Yup.string().required(
        "Language Known should not be empty!"
    ),
    online_profile: Yup.string(),
    certificate_title: Yup.string(),
    certificate_link: Yup.string(),
    certification_date: Yup.string(),
    project_title: Yup.string(),
    project_link: Yup.string(),
    project_details: Yup.string(),
});

function ResumeForm() {
    const location = useLocation();

    let data = location.state.resumeData;
console.log("Data",data);
    const work_Details =  data.work_Details && JSON.parse(data.work_Details);
    const project_Details = data.project_Details && JSON.parse(data.project_Details);
    const certification_Details =data.certification_Details && JSON.parse(data.certification_Details);
    const education_Details = data.education_Details;

    const today_date = moment().format("YYYY-MM-DD");

    const formik = useFormik({
        initialValues: {
            id: data?._id,
            firstname: data?.firstname,
            lastname: data?.lastname,
            mobileno: data?.mobileno,
            email: data?.email,
            headline: data?.headline || "",
            job_exp: data?.job_exp || "",
            objective: data?.objective || "",
            relocateFlag: data?.relocateFlag || "",
            lookingJob: data?.lookingJob || "",
            prefered_job_sector: data?.prefered_job_sector || "",
            job_title: work_Details[0]?.job_title || "",
            company_name: work_Details[0]?.company_name || "",
            company_location: work_Details[0]?.company_location || "",
            cur_working: work_Details[0]?.cur_working || "",
            job_from_date: work_Details[0]?.job_from_date || "",
            job_to_date: work_Details[0]?.job_to_date || "",
            work_description: work_Details[0]?.work_description || "",
            education_level: education_Details[0]?.education_level || "",
            field_of_study: education_Details[0]?.field_of_study || "",
            school: education_Details[0]?.school || "",
            school_location: education_Details[0]?.school_location || "",
            cur_enrolled: education_Details[0]?.cur_enrolled || false,
            edu_time_from: education_Details[0]?.edu_time_from || "",
            edu_time_to: education_Details[0]?.edu_time_to || "",
            grade: education_Details[0]?.grade || "",
            skills: data?.skills || "",
            language_known: data?.language_known || "",
            online_profile: data?.online_profile || "",
            certificate_title: certification_Details[0]?.certificate_title || "",
            certificate_link: certification_Details[0]?.certificate_link || "",
            certification_date: certification_Details[0]?.certification_date ||  "",
            project_title: project_Details[0]?.project_title || "",
            project_link: project_Details[0]?.project_link || "",
            project_details: project_Details[0]?.project_details ||"",
        },
        validationSchema: ResumeSchema,
        onSubmit: async (values) => {
            const resume = {
                id: values.id,
                name: values.firstname + " " + values.lastname,
                mobileno: values.mobileno,
                email: values.email,
                headline: values.headline,
                job_exp: values.job_exp,
                objective: values.objective,
                relocateFlag: values.relocateFlag,
                lookingJob: values.lookingJob,
                prefered_job_sector: values.prefered_job_sector,
                work_Details:  JSON.stringify(values.job_title ? [
                    {
                        job_title: values.job_title,
                        company_name: values.company_name,
                        company_location: values.company_location,
                        cur_working: values.cur_working,
                        job_from_date: values.job_from_date,
                        job_to_date: values.job_to_date,
                        work_description: values.work_description,
                    },
                ] : [] ),
                education_Details: values.education_level ? [
                    {
                        education_level: values.education_level,
                        field_of_study: values.field_of_study,
                        school: values.school,
                        school_location: values.school_location,
                        cur_enrolled: values.cur_enrolled,
                        edu_time_from: values.edu_time_from,
                        edu_time_to: values.edu_time_to,
                        grade: values.grade,
                    },
                ] : [],
                skills: values.skills,
                language_known: values.language_known,
                online_profile: values.online_profile,
                certification_Details:  JSON.stringify(values.certificate_title ? [
                    {
                        certificate_title: values.certificate_title,
                        certificate_link: values.certificate_link,
                        certification_date: values.certification_date,
                    },
                ]: []) ,
                project_Details:  JSON.stringify(values.project_title ? [
                    {
                        project_title: values.project_title,
                        project_link: values.project_link,
                        project_details: values.project_details,
                    },
                ] : [] ),
            };

            const res = await editResume(resume);
            console.log("...........res", res);
            if (res.status === 200) {
                window.location.replace("/employee");
            }
        },
    });

    return (
        <>
            <Topbar></Topbar>
            <Header></Header>

            <div className="container mt-3">
                <form onSubmit={formik.handleSubmit}>
                    <div className="row jumbotron box8">
                        <input hidden className="" value={formik.values.id} />
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-6">
                                    <label htmlFor="firstname">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="firstname"
                                        id="firstname"
                                        disabled
                                        value={formik.values.firstname}
                                        onChange={formik.handleChange}
                                    />
                                    <InputError
                                        error={formik.errors.firstname}
                                        touched={formik.touched.firstname}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="lastname"
                                        id="lastname"
                                        disabled
                                        value={formik.values.lastname}
                                        onChange={formik.handleChange}
                                    />
                                    <InputError
                                        error={formik.errors.lastname}
                                        touched={formik.touched.lastname}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6" />

                        <div className="col-sm-6 form-group mt-4">
                            <label htmlFor="mobileno">Mobile No.</label>
                            <input
                                type="text"
                                className="form-control"
                                name="mobileno"
                                id="mobileno"
                                disabled
                                value={formik.values.mobileno}
                                onChange={formik.handleChange}
                            />
                            <InputError
                                error={formik.errors.mobileno}
                                touched={formik.touched.mobileno}
                            />
                        </div>

                        <div className="col-sm-6" />

                        <div className="col-sm-6 form-group mt-4">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                id="email"
                                disabled
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                            <InputError
                                error={formik.errors.email}
                                touched={formik.touched.email}
                            />
                        </div>

                        <div className="col-sm-6" />

                        <div className="col-sm-6 form-group mt-4">
                            <label htmlFor="headline">Headline</label>
                            <input
                                type="text"
                                className="form-control"
                                name="headline"
                                id="headline"
                                placeholder=""
                                value={formik.values.headline}
                                onChange={formik.handleChange}
                            />
                            <InputError
                                error={formik.errors.headline}
                                touched={formik.touched.headline}
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
                                value={formik.values.job_exp}
                                onChange={formik.handleChange}
                            />
                            <InputError
                                error={formik.errors.job_exp}
                                touched={formik.touched.job_exp}
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
                                    value={formik.values.objective}
                                    onChange={formik.handleChange}
                                />
                                <InputError
                                    error={formik.errors.objective}
                                    touched={formik.touched.objective}
                                />
                            </div>
                        </div>

                        <div className="col-sm-6" />

                        <div className="col-sm-6 form-group">
                            <label htmlFor="relocateFlag">
                                Are you willing to relocate
                            </label>
                            <div
                                className="d-flex"
                                // role="group"
                                // aria-label="Basic radio toggle button group"
                            >
                                <div className="col-sm-6">
                                    <input
                                        className="form-check-input mx-2 "
                                        type="radio"
                                        name="relocateFlag"
                                        id="relocateFlagNo"
                                        value="No"
                                        checked={
                                            formik.values.relocateFlag === "No"
                                        }
                                        onChange={() =>
                                            formik.setFieldValue(
                                                "relocateFlag",
                                                "No"
                                            )
                                        }
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="relocateFlagNo"
                                    >
                                        No
                                    </label>
                                </div>
                                <div className="col-sm-6">
                                    <input
                                        className="form-check-input mx-2 "
                                        type="radio"
                                        name="relocateFlag"
                                        id="relocateFlagYes"
                                        value="Yes"
                                        checked={
                                            formik.values.relocateFlag === "Yes"
                                        }
                                        onChange={() =>
                                            formik.setFieldValue(
                                                "relocateFlag",
                                                "Yes"
                                            )
                                        }
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="relocateFlagYes"
                                    >
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <InputError
                                error={formik.errors.relocateFlag}
                                touched={formik.touched.relocateFlag}
                            />
                        </div>

                        <div className="col-sm-6" />

                        <div className="col-sm-6 form-group">
                            <label htmlFor="lookingJob">
                                Looking for a Job
                            </label>
                            <div
                                className="d-flex"
                                // role="group"
                                // aria-label="Basic radio toggle button group"
                            >
                                <div className="col-sm-6">
                                    <input
                                        className="form-check-input mx-2 "
                                        type="radio"
                                        name="lookingJob"
                                        id="lookingJobNo"
                                        value="No"
                                        checked={
                                            formik.values.lookingJob === "No"
                                        }
                                        onChange={() =>
                                            formik.setFieldValue(
                                                "lookingJob",
                                                "No"
                                            )
                                        }
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="lookingJobNo"
                                    >
                                        No
                                    </label>
                                </div>
                                <div className="col-sm-6">
                                    <input
                                        className="form-check-input mx-2 "
                                        type="radio"
                                        name="lookingJob"
                                        id="lookingJobYes"
                                        value="Yes"
                                        checked={
                                            formik.values.lookingJob === "Yes"
                                        }
                                        onChange={() =>
                                            formik.setFieldValue(
                                                "lookingJob",
                                                "Yes"
                                            )
                                        }
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="lookingJobYes"
                                    >
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <InputError
                                error={formik.errors.lookingJob}
                                touched={formik.touched.lookingJob}
                            />
                        </div>

                        <div className="col-sm-6" />

                        <div className="col-sm-6 form-group mt-2">
                            <label htmlFor="prefered_job_sector">
                                Prefered Job Sector
                            </label>
                            <select
                                className="form-control"
                                id="prefered_job_sector"
                                name="prefered_job_sector"
                                value={formik.values.prefered_job_sector}
                                onChange={formik.handleChange}
                            >
                                <option value="">Select an option</option>
                                <option value="0">All</option>
                                <option value="1">IT</option>
                                <option value="3">HR </option>
                                <option value="2">Marketing</option>
                            </select>
                            <InputError
                                error={formik.errors.prefered_job_sector}
                                touched={formik.touched.prefered_job_sector}
                            />
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
                                    value={formik.values.job_title}
                                    onChange={formik.handleChange}
                                />
                                <InputError
                                    error={formik.errors.job_title}
                                    touched={formik.touched.job_title}
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
                                    value={formik.values.company_name}
                                    onChange={formik.handleChange}
                                />
                                <InputError
                                    error={formik.errors.company_name}
                                    touched={formik.touched.company_name}
                                />
                            </div>
                            <div className="col-sm-6 form-group mt-2">
                                <label htmlFor="company_location">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="company_location"
                                    id="company_location"
                                    placeholder=""
                                    value={formik.values.company_location}
                                    onChange={formik.handleChange}
                                />
                                <InputError
                                    error={formik.errors.company_location}
                                    touched={formik.touched.company_location}
                                />
                            </div>
                            <div className="col-sm-6 form-group mt-2">
                                <label htmlFor="time_period">Time period</label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="cur_working"
                                        id="cur_working"
                                        checked={formik.values.cur_working}
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                "cur_working",
                                                e.target.checked
                                            )
                                        }
                                    />
                                    <label className="form-check-label">
                                        I currently work here
                                    </label>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label htmlFor="job_from_date">
                                            From
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="job_from_date"
                                            id="job_from_date"
                                            placeholder=""
                                            value={formik.values.job_from_date}
                                            onChange={formik.handleChange}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="job_to_date">To </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="job_to_date"
                                            id="job_to_date"
                                            disabled={
                                                formik.values.cur_working ===
                                                true
                                                    ? true
                                                    : false
                                            }
                                            value={
                                                formik.values.cur_working
                                                    ? (formik.values.job_to_date =
                                                          today_date)
                                                    : formik.values.job_to_date
                                            }
                                            onChange={formik.handleChange}
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
                                        name="work_description"
                                        rows={3}
                                        value={formik.values.work_description}
                                        onChange={formik.handleChange}
                                    />
                                    <InputError
                                        error={formik.errors.work_description}
                                        touched={
                                            formik.touched.work_description
                                        }
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
                                    id="education_level"
                                    name="education_level"
                                    value={formik.values.education_level}
                                    onChange={formik.handleChange}
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
                                <InputError
                                    error={formik.errors.education_level}
                                    touched={formik.touched.education_level}
                                />
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
                                    disabled={
                                        formik.values.education_level === "None"
                                            ? true
                                            : false
                                    }
                                    value={formik.values.field_of_study}
                                    onChange={formik.handleChange}
                                />
                                <InputError
                                    error={formik.errors.field_of_study}
                                    touched={formik.touched.field_of_study}
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
                                    disabled={
                                        formik.values.education_level === "None"
                                            ? true
                                            : false
                                    }
                                    value={formik.values.school}
                                    onChange={formik.handleChange}
                                />
                                <InputError
                                    error={formik.errors.school}
                                    touched={formik.touched.school}
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
                                    disabled={
                                        formik.values.education_level === "None"
                                            ? true
                                            : false
                                    }
                                    value={formik.values.school_location}
                                    onChange={formik.handleChange}
                                />
                                <InputError
                                    error={formik.errors.school_location}
                                    touched={formik.touched.school_location}
                                />
                            </div>
                            <div className="col-sm-6 form-group mt-2">
                                <label htmlFor="edu_time">Time period</label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="cur_enrolled"
                                        id="cur_enrolled"
                                        checked={formik.values.cur_enrolled}
                                        disabled={
                                            formik.values.education_level ===
                                            "None"
                                                ? true
                                                : false
                                        }
                                        onChange={(e) =>
                                            formik.setFieldValue(
                                                "cur_enrolled",
                                                e.target.checked
                                            )
                                        }
                                    />
                                    <label className="form-check-label">
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
                                            name="edu_time_from"
                                            id="edu_time_from"
                                            placeholder=""
                                            disabled={
                                                formik.values
                                                    .education_level === "None"
                                                    ? true
                                                    : false
                                            }
                                            value={formik.values.edu_time_from}
                                            onChange={formik.handleChange}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="edu_time_to">To </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="edu_time_to"
                                            id="edu_time_to"
                                            disabled={
                                                formik.values.cur_enrolled ===
                                                    true ||
                                                formik.values
                                                    .education_level === "None"
                                                    ? true
                                                    : false
                                            }
                                            value={
                                                formik.values.cur_enrolled
                                                    ? (formik.values.edu_time_to =
                                                          today_date)
                                                    : formik.values.edu_time_to
                                            }
                                            onChange={formik.handleChange}
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
                                    disabled={
                                        formik.values.education_level === "None"
                                            ? true
                                            : false
                                    }
                                    placeholder=""
                                    value={formik.values.grade}
                                    onChange={formik.handleChange}
                                />
                                <InputError
                                    error={formik.errors.grade}
                                    touched={formik.touched.grade}
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
                                    value={formik.values.skills}
                                    onChange={formik.handleChange}
                                />
                                <InputError
                                    error={formik.errors.skills}
                                    touched={formik.touched.skills}
                                />
                            </div>
                            <div className="col-sm-6 form-group">
                                <label htmlFor="language_known">
                                    Languages Known
                                </label>
                                <input
                                    type="text"
                                    name="language_known"
                                    id="language_known"
                                    className="form-control"
                                    value={formik.values.language_known}
                                    onChange={formik.handleChange}
                                />
                                <InputError
                                    error={formik.errors.language_known}
                                    touched={formik.touched.language_known}
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
                                    value={formik.values.online_profile}
                                    onChange={formik.handleChange}
                                />
                                <InputError
                                    error={formik.errors.online_profile}
                                    touched={formik.touched.online_profile}
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
                                    value={formik.values.certificate_title}
                                    onChange={formik.handleChange}
                                />
                                <InputError
                                    error={formik.errors.certificate_title}
                                    touched={formik.touched.certificate_title}
                                />
                            </div>

                            <div className="col-sm-6 form-group mt-2">
                                <label htmlFor="certificate_link">
                                    certification Link
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="certificate_link"
                                    id="certificate_link"
                                    placeholder=""
                                    value={formik.values.certificate_link}
                                    onChange={formik.handleChange}
                                />
                                <InputError
                                    error={formik.errors.certificate_link}
                                    touched={formik.touched.certificate_link}
                                />
                            </div>

                            <div className="col-sm-6 form-group mt-2">
                                <label htmlFor="certification_date">
                                    Date Issued
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="certification_date"
                                    id="certification_date"
                                    placeholder=""
                                    value={formik.values.certification_date}
                                    onChange={formik.handleChange}
                                />
                                <InputError
                                    error={formik.errors.certification_date}
                                    touched={formik.touched.certification_date}
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
                                    value={formik.values.project_title}
                                    onChange={formik.handleChange}
                                />
                                <InputError
                                    error={formik.errors.project_title}
                                    touched={formik.touched.project_title}
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
                                    value={formik.values.project_link}
                                    onChange={formik.handleChange}
                                />
                                <InputError
                                    error={formik.errors.project_link}
                                    touched={formik.touched.project_link}
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
                                        name="project_details"
                                        rows={3}
                                        value={formik.values.project_details}
                                        onChange={formik.handleChange}
                                    />
                                    <InputError
                                        error={formik.errors.project_details}
                                        touched={formik.touched.project_details}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-grid col-md-7 my-4 m-auto">
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
