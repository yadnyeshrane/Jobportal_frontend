import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fecthUserDeatils } from "./appi";
import Header from "./Header";
import Topbar from "./Topbar";

function Profile() {
    const navigate = useNavigate();
    const [userdata, setUserData] = useState<any>({});
    const editProfile = () => {
        navigate("/edit_profile");
    };
    useEffect(() => {
        getDetails();
        return () => {};
    }, []);

    async function getDetails() {
        const data = await fecthUserDeatils("name");
        setUserData(data.data);
        console.log("Data", data);
    }

    const civilServicesEnum=(value:any)=>{
  switch(value)
  {
    case "0":
        return "Civil Services"
    case "1":
        return "Doctor"
     case "2":
        return "Business"
    case "3":
        return "Carrer guidance";
    default:
        return "other"
  }
    }

    return (
        <>
            <Topbar />
            <Header />
            <div className="container rounded bg-white mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img
                                alt=""
                                className="rounded-circle mt-5"
                                width="150px"
                                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                            />
                            <span className="font-weight-bold">
                                {userdata.name}
                            </span>
                            <span className="text-black-50">
                                {userdata.email}
                            </span>
                            <span> </span>
                        </div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-12">
                                    <p>
                                        <strong>Name:</strong>
                                        &nbsp;&nbsp;{userdata.name}
                                    </p>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        <strong>Surname:</strong>
                                        &nbsp;&nbsp;{userdata.surname}
                                    </p>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    {/* <label className="labels">
                                        Mobile Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter phone number"
                                        style={{ pointerEvents: "none" }}
                                        value={userdata.mobileno}
                                    /> */}
                                     <p>
                                        <strong> Mobile Number:</strong>
                                        &nbsp;&nbsp;{userdata.mobileno}
                                    </p>
                                </div>
                                <div className="col-md-12">
                                    {/* <label className="labels">Email ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="enter email id"
                                        style={{ pointerEvents: "none" }}
                                        value={userdata.email}
                                    /> */}
                                     <p>
                                        <strong> Email:</strong>
                                        &nbsp;&nbsp;{userdata.email}
                                    </p>
                                </div>
                                <span>-----------------------------------------------------------------------------</span>
                                <h4 style={{paddingTop:"10px"}}>
                                    Current Adress
                                </h4>
                                <div>
                                    <div className="col-md-12">
                                        {/* <label className="labels">
                                            Address Line 1
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="enter address line 1"
                                            style={{ pointerEvents: "none" }}
                                        /> */}
                                         <p>
                                        <strong> Address Line 1:</strong>
                                        &nbsp;&nbsp;{userdata.addresLine_1}
                                    </p>
                                    </div>
                                    <div className="col-md-12">
                                        {/* <label className="labels">
                                            Address Line 2
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="enter address line 2"
                                            style={{ pointerEvents: "none" }}
                                        /> */}
                                         <p>
                                        <strong> Address Line 2:</strong>
                                        &nbsp;&nbsp;{userdata.addresLine_2}
                                    </p>
                                    </div>
                                    <div className="col-md-12">
                                        {/* <label className="labels">
                                            Pincode
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="enter address line 2"
                                            style={{ pointerEvents: "none" }}
                                        /> */}
                                        <p>
                                        <strong>  Pincode:</strong>
                                        &nbsp;&nbsp;{userdata.pincode}
                                    </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    {/* <label className="labels">Country</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="country"
                                        style={{ pointerEvents: "none" }}
                                    /> */}
                                      <p>
                                        <strong>  country:</strong>
                                        &nbsp;&nbsp;{userdata.country}
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    {/* <label className="labels">
                                        State/Region
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="state"
                                        style={{ pointerEvents: "none" }}
                                    /> */}
                                     <p>
                                        <strong>     State/Region:</strong>
                                        &nbsp;&nbsp;{userdata.state}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center experience">
                                <h4>Native Place adress</h4>
                                {/* <span
                                    className="border px-3 p-1 add-experience"
                                    onClick={editProfile}
                                >
                                    <i className="fa fa-plus" />
                                    &nbsp;Edit
                                </span> */}
                            </div>
                            <br />
                            <div className="col-md-12">
                                {/* <label className="labels">Address Line 1</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="enter address line 1"
                                    style={{ pointerEvents: "none" }}
                                /> */}
                                 <p>
                                        <strong>Address Line 1:</strong>
                                        &nbsp;&nbsp;{userdata.nativeaddresLine_1}
                                    </p>
                            </div>
                            <div className="col-md-12">
                                {/* <label className="labels">Address Line 2</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="enter address line 2"
                                    style={{ pointerEvents: "none" }}
                                /> */}
                                <p>
                                        <strong>Address Line 2:</strong>
                                        &nbsp;&nbsp;{userdata.nativeaddresLine_2}
                                    </p>
                            </div>
                            <div className="col-md-12">
                                {/* <label className="labels">Pincode</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="enter pincode"
                                    style={{ pointerEvents: "none" }}
                                /> */}
                                <p>
                                        <strong>Pincode:</strong>
                                        &nbsp;&nbsp;{userdata.nativepincode}
                                    </p>
                            </div>
                            <div className="col-md-12 py-4">
                                {/* <label className="labels">Adhar Card</label> */}
                                <p>
                                        <strong>Adhar Card:</strong>
                                        &nbsp;&nbsp;
                                        <img
                                        alt=""
                                        style={{ height: "auto" }}
                                        src={
                                            "http://localhost:5000/" +
                                            userdata.image
                                        }
                                    />
                                    </p>
                                <div className="col-md-12">
                                   
                                </div>


                            </div>
                            <div className="col-md-12">
                                {/* <label className="labels">Address Line 2</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="enter address line 2"
                                    style={{ pointerEvents: "none" }}
                                /> */}
                                <p>
                                        <strong>Education Details:</strong>
                                        &nbsp;&nbsp;{userdata.educationdetails}
                                    </p>
                            </div>
                            <div className="col-md-12">
                                {/* <label className="labels">Address Line 2</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="enter address line 2"
                                    style={{ pointerEvents: "none" }}
                                /> */}
                                <p>
                                        <strong>Civil Services:</strong>
                                        &nbsp;&nbsp;{civilServicesEnum(userdata.occupation)}
                                    </p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="row">
                <div className="d-grid col-md-4 mx-auto">
                        <button className="btn btn-primary" type="button"   onClick={editProfile}>Edit Profile</button></div>
                </div>

               
            </div>
        </>
    );
}

export default Profile;
