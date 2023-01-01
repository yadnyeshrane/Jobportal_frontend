import { useState } from "react";
import { userRegister } from "../appi";
import Header from "../Header";
import Topbar from "../Topbar";
import { useFormik } from "formik";
import * as Yup from "yup";

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SignupSchema = Yup.object().shape({
    name: Yup.string().required("FirstName should not be empty!"),
    surname: Yup.string().required("Lastname should not be empty!"),
    mobileno: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .length(10, "mobile number should be 10 charecters long")
        .required("Mobile Number should not be empty!"),
    email: Yup.string()
        .email("Invalid email format!")
        .required("Email should not be empty!"),
    password: Yup.string()
        .min(8, "Password should be atleast 8 characters long!")
        .required("Password should not be empty!"),
    confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match!")
        .required("Required!"),
});

const Register = () => {
    const [signupError, setSignupError] = useState<any>(null);

    const handleSignup = async (values: any) => {
        let userData = {
            name: values.name,
            surname: values.surname,
            mobileno: values.mobileno,
            email: values.email,
            password: values.password,
        };
        const res = await userRegister(userData);
        if (res.status === 200) {
            console.log(res.message);
            window.location.replace("/login");
        } else {
            setSignupError(res.message);
        }
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            mobileno: "",
            email: "",
            password: "",
            confirm_password: "",
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            handleSignup(values);
        },
    });

    return (
        <>
            <Topbar />
            <Header />
            <div className="container rounded bg-white mb-5">
                <div className="row">
                    {/* <div className="col-md-1" />
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img
                                alt=""
                                className="rounded-circle mt-5"
                                width="150px"
                                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                            />
                        </div>
                    </div> */}
                    {signupError &&
                        (console.log("signupError", signupError),
                        (
                            <div
                                className="alert alert-danger alert-dismissible fade show mt-2 mb-0"
                                role="alert"
                            >
                                <strong>Sorry!</strong>&nbsp;{signupError}
                            </div>
                        ))}

                    <div className="m-auto col-md-6 border-right">
                        <div className="p-3">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="m-auto">Sign Up</h4>
                            </div>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels required">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            className="form-control"
                                            placeholder="Firstname"
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.name &&
                                            formik.touched.name && (
                                                <p className="error-msg">
                                                    {formik.errors.name}
                                                </p>
                                            )}
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels required">
                                            Surname
                                        </label>
                                        <input
                                            id="surname"
                                            name="surname"
                                            type="text"
                                            className="form-control"
                                            placeholder="Surname"
                                            value={formik.values.surname}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.surname &&
                                            formik.touched.surname && (
                                                <p className="error-msg">
                                                    {formik.errors.surname}
                                                </p>
                                            )}
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        <label className="labels required">
                                            Mobile Number
                                        </label>
                                        <div className="input-group">
                                            <span
                                                className="input-group-text"
                                                id="inputGroupMobile"
                                            >
                                                +91
                                            </span>
                                            <input
                                                id="mobileno"
                                                name="mobileno"
                                                type="text"
                                                className="form-control"
                                                maxLength={10}
                                                placeholder="Enter Mobile Number"
                                                value={formik.values.mobileno}
                                                onChange={formik.handleChange}
                                            />
                                        </div>
                                        {formik.errors.mobileno &&
                                            formik.touched.mobileno && (
                                                <p className="error-msg">
                                                    {formik.errors.mobileno}
                                                </p>
                                            )}
                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <label className="labels required">
                                            Email ID
                                        </label>
                                        <div className="input-group">
                                            <span
                                                className="input-group-text"
                                                id="inputGroupEmail"
                                            >
                                                @
                                            </span>

                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                className="form-control"
                                                placeholder="enter email id"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                            />
                                        </div>
                                        {formik.errors.email &&
                                            formik.touched.email && (
                                                <p className="error-msg">
                                                    {formik.errors.email}
                                                </p>
                                            )}
                                    </div>

                                    <div className="col-md-12 mt-2">
                                        <label className="labels required">
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            className="form-control"
                                            placeholder="Enter Password"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.password &&
                                            formik.touched.password && (
                                                <p className="error-msg">
                                                    {formik.errors.password}
                                                </p>
                                            )}
                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <label className="labels required">
                                            Confirm Password
                                        </label>
                                        <input
                                            id="confirm_password"
                                            name="confirm_password"
                                            type="password"
                                            className="form-control"
                                            placeholder="Re-enter Password"
                                            value={
                                                formik.values.confirm_password
                                            }
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.confirm_password &&
                                            formik.touched.confirm_password && (
                                                <p className="error-msg">
                                                    {
                                                        formik.errors
                                                            .confirm_password
                                                    }
                                                </p>
                                            )}
                                    </div>
                                    <div className="d-grid col-md-8 mt-4 m-auto">
                                        <button
                                            className="btn btn-primary"
                                            type="submit"
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="text-center mt-0 m-auto">
                            <a href="/login">Already a User..! Login here.</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
