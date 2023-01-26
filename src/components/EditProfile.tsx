import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { editProfileDetails, fecthUserDeatils } from "./appi";
import Header from "./Header";
import Topbar from "./Topbar";
import * as Yup from "yup";
import { useFormik } from "formik";
function EditProfile() {
    const navigate = useNavigate();
    const SignupSchema = Yup.object().shape({
        name: Yup.string().required("FirstName should not be empty!"),
        surname: Yup.string().required("FirstName should not be empty!"),
        email: Yup.string().email("Invalid email format!"),
        addresLine_1: Yup.string(),
        addresLine_2: Yup.string(),
        pincode: Yup.string(),
        country: Yup.string(),
        nativeaddresLine_1: Yup.string(),
        nativeaddresLine_2: Yup.string(),
        nativepincode: Yup.string(),
        educationdetails:Yup.string().required("Education details are required"),
        occupation:Yup.string().required("occupation field cannot be empty")
    });
    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            email: "",
            addresLine_1: "",
            addresLine_2: "",
            pincode: "",
            country: "",
            state: "",
            nativeaddresLine_1: "",
            nativeaddresLine_2: "",
            nativepincode: "",
            educationdetails:'',
            occupation:'',
            id:""
        },
        validationSchema: SignupSchema,
        onSubmit: async(values) => {
            const tempobject = {
                ...values,
                image: userdata.image,
            };
           // console.log("Updated value", tempobject);
           console.log("TempObject",tempobject)
            await editProfileDetails(tempobject);
            navigate("/profile");
            // handleSignup(values);
        },
    });
    const [userdata, setUserData] = useState<any>({});
    useEffect(() => {
        getDetails();

        return () => {};
    }, []);

    async function getDetails() {
        const data = await fecthUserDeatils("name");
        // setUserData(data.data);
        formik.setValues({
            name: data.data.name,
            surname: data.data.surname,
            email: data.data.email,
            addresLine_1: data.data.addresLine_1,
            addresLine_2: data.data.addresLine_2,
            pincode: data.data.pincode,
            country: data.data.country,
            state: data.data.state,
            nativeaddresLine_1: data.data.nativeaddresLine_1,
            nativeaddresLine_2: data.data.nativeaddresLine_2,
            nativepincode: data.data.nativepincode,
            educationdetails:data.data.educationdetails,
            occupation:data.data.occupation,
            id:data.data._id
        });
        console.log("Data", data);
    }
    const handleChange = (e: any, type = 1) => {
        if (type == 1) {
            setUserData({ ...userdata, [e.target.name]: e.target.value });
        } else {
            setUserData({ ...userdata, [e.target.name]: e.target.files[0] });
        }
    };

    const handleClick = async () => {
        console.log("FOrmData", userdata);
        await editProfileDetails(userdata);
        navigate("/profile");
    };
    return (
        <>
            <Topbar />
            <Header />
            <div className="container rounded bg-white mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img
                                className="rounded-circle mt-5"
                                width="150px"
                                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                            />
                            <span className="font-weight-bold">Edogaru</span>
                            <span className="text-black-50">
                                edogaru@mail.com.my
                            </span>
                            <span> </span>
                        </div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">
                                    Profile Edit Settings
                                </h4>
                            </div>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="labels">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="first name"
                                            name="name"
                                            id="name"
                                            // onChange={(e)=>handleChange(e)}
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
                                        <label className="labels">
                                            Surname
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="surname"
                                            name="surname"
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
                                <div className="row mt-3">
                                    {/* <div className="col-md-12">
                                        <label className="labels">
                                            Mobile Number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="enter phone number"
                                            value={userdata.mobileno}
                                        />
                                    </div> */}
                                    <div className="col-md-12">
                                        <label className="labels">
                                            Email ID
                                        </label>
                                        <input
                                            type="text"
                                            name="email"
                                            className="form-control"
                                            placeholder="enter email id"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            // value={userdata.email}
                                        />
                                        {formik.errors.email &&
                                            formik.touched.email && (
                                                <p className="error-msg">
                                                    {formik.errors.email}
                                                </p>
                                            )}
                                    </div>

                                    <div className="col-md-12">
                                        <label className="labels">
                                            Address Line 1
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="addresLine_1"
                                            value={formik.values.addresLine_1}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.addresLine_1 &&
                                            formik.touched.addresLine_1 && (
                                                <p className="error-msg">
                                                    {formik.errors.addresLine_1}
                                                </p>
                                            )}
                                    </div>
                                    <div className="col-md-12">
                                        <label className="labels">
                                            Address Line 2
                                        </label>
                                        <input
                                            type="text"
                                            name="addresLine_2"
                                            className="form-control"
                                            placeholder="enter address line 2"
                                            value={formik.values.addresLine_2}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.addresLine_2 &&
                                            formik.touched.addresLine_2 && (
                                                <p className="error-msg">
                                                    {formik.errors.addresLine_2}
                                                </p>
                                            )}
                                    </div>
                                    <div className="col-md-12">
                                        <label className="labels">
                                            Pincode
                                        </label>
                                        <input
                                            type="text"
                                            name="pincode"
                                            className="form-control"
                                            placeholder="enter pincode"
                                            value={formik.values.pincode}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.pincode &&
                                            formik.touched.pincode && (
                                                <p className="error-msg">
                                                    {formik.errors.pincode}
                                                </p>
                                            )}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <label className="labels">
                                            Country
                                        </label>
                                        <input
                                            type="text"
                                            name="country"
                                            className="form-control"
                                            placeholder="country"
                                            value={formik.values.country}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.country &&
                                            formik.touched.country && (
                                                <p className="error-msg">
                                                    {formik.errors.country}
                                                </p>
                                            )}
                                    </div>
                                    <div className="col-md-6">
                                        <label className="labels">
                                            State/Region
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="state"
                                            name="state"
                                            value={formik.values.state}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.state &&
                                            formik.touched.state && (
                                                <p className="error-msg">
                                                    {formik.errors.state}
                                                </p>
                                            )}
                                    </div>
                                </div>
                                <div className="mt-5 text-center">
                                    <button
                                        className="btn btn-primary profile-button"
                                        type="submit"
                                        // onClick={handleClick}
                                    >
                                        Save Profile
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center experience">
                                <h4>Native Place adress</h4>
                            </div>
                            <br />
                            <div className="col-md-12">
                                <label className="labels">Address Line 1</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="enter address line 1"
                                    name="nativeaddresLine_1"
                                    value={formik.values.nativeaddresLine_1}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.nativeaddresLine_1 &&
                                    formik.touched.nativeaddresLine_1 && (
                                        <p className="error-msg">
                                            {formik.errors.nativeaddresLine_1}
                                        </p>
                                    )}
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Address Line 2</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="enter address line 2"
                                    name="nativeaddresLine_2"
                                    value={formik.values.nativeaddresLine_2}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.nativeaddresLine_2 &&
                                    formik.touched.nativeaddresLine_2 && (
                                        <p className="error-msg">
                                            {formik.errors.nativeaddresLine_2}
                                        </p>
                                    )}
                            </div>
                            <div className="col-md-12">
                                <label className="labels">Pincode</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="enter pincode"
                                    name="nativepincode"
                                    value={formik.values.nativepincode}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.nativepincode &&
                                    formik.touched.nativepincode && (
                                        <p className="error-msg">
                                            {formik.errors.nativepincode}
                                        </p>
                                    )}
                            </div>
                            <div className="col-md-12 py-1">
                                <label className="labels">
                                    Eductaion Detials
                                </label>
                                <div className="col-md-12">
                                    <textarea
                                        className="form-control"
                                        placeholder="Enter Basic Education Detials"
                                        name="educationdetails"
                                        value={formik.values.educationdetails}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.educationdetails &&
                                        formik.touched.educationdetails && (
                                            <p className="error-msg">
                                                {formik.errors.educationdetails}
                                            </p>
                                        )}
                                </div>
                            </div>
                            <div className="col-md-12 py-2">
                                <label className="labels">Occupation</label>
                                <div className="col-md-12">
                                    <select
                                        className="form-control"
                                        id="exampleFormControlSelect2"
                                        placeholder="type of occupation"
                                        name="occupation"
                                        value={formik.values.occupation}
                                        onChange={formik.handleChange}
                                    >
                                        <option value="0">Civil Services</option>
                                        <option value="1">Doctor</option>
                                        <option value="2">Business</option>
                                        <option value="3">Carrer guidance</option>
                                        <option value="4">Other</option>
                                    </select>
                                </div>
                            </div>
                            {/* <div className="col-md-12">
                                <label className="labels">Type of service provided</label>
                                <div className="col-md-12">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="enter pincode"
                                    name="nativepincode"
                                    value={formik.values.nativepincode}
                                    onChange={formik.handleChange}
                                />
                                </div>
                            </div> */}
                            <div className="col-md-12 py-4">
                                <label className="labels">Document proof</label>
                                <div className="col-md-12">
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="image"
                                        name="image"
                                        onChange={(e) => handleChange(e, 2)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditProfile;
