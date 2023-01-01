import { useState } from "react";
import { userLogin } from "../appi";
import Header from "../Header";
import Topbar from "../Topbar";
import { useFormik } from "formik";
import * as Yup from "yup";

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SignupSchema = Yup.object().shape({
    mobileno: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .length(10, "mobile number should be 10 charecters long")
        .required("Mobile Number should not be empty."),
    password: Yup.string()
        .min(8, "Password should be atleast 8 characters long!")
        .required("Password should not be empty."),
});

function Login() {
    const [loginError, setLoginError] = useState<any>(null);

    const handleLogin = async (values: any) => {
        console.log(values);
        const res = await userLogin(values);
        if (res.status === 200) {
            localStorage.setItem("loggedInUser", values.mobileno);
            window.location.href = "/";
        } else {
            setLoginError(res.message);
        }
    };

    const formik = useFormik({
        initialValues: {
            mobileno: "",
            password: "",
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            handleLogin(values);
        },
    });

    return (
        <>
            <Topbar />
            <Header />
            <div className="container rounded bg-white mb-5">
                <div className="row">
                    <div className="col-md-3 border-right"></div>
                    <div className="col-md-5 border-right">
                        {loginError &&
                            (console.log("loginError", loginError),
                            (
                                <div
                                    className="alert alert-danger alert-dismissible fade show mt-2"
                                    role="alert"
                                >
                                    <strong>Sorry!</strong>&nbsp;{loginError}
                                </div>
                            ))}

                        <div className="p-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="text-center m-auto">Login</h4>
                            </div>
                            <div className="row">
                                <div className="d-flex flex-column align-items-center text-center ">
                                    <img
                                        alt=""
                                        className="rounded-circle   "
                                        width="100px"
                                        src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                                    />
                                </div>

                                <form onSubmit={formik.handleSubmit}>
                                    <div className="col-md-12">
                                        <label
                                            htmlFor="mobileno"
                                            className="labels required"
                                        >
                                            Mobile Number
                                        </label>
                                        <input
                                            id="mobileno"
                                            name="mobileno"
                                            type="text"
                                            maxLength={10}
                                            className="form-control"
                                            placeholder="Enter mobile number"
                                            value={formik.values.mobileno}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.mobileno &&
                                            formik.touched.mobileno && (
                                                <p className="error-msg">
                                                    {formik.errors.mobileno}
                                                </p>
                                            )}
                                    </div>

                                    <div className="col-md-12 mt-3">
                                        <label
                                            htmlFor="password"
                                            className="labels required"
                                        >
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            type="password"
                                            name="password"
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
                                    <div className="d-grid col-md-8 mt-4 m-auto">
                                        <button
                                            className="btn btn-primary"
                                            type="submit"
                                        >
                                            Submit form
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="text-center mt-0 m-auto">
                            <a href="/signup">
                                New to Impact..! Register here.
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
