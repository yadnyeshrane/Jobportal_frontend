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
              <span className="font-weight-bold">{userdata.name}</span>
              <span className="text-black-50">{userdata.email}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    value={userdata.name}
                    style={{ pointerEvents: "none" }}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Surname</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="surname"
                    style={{ pointerEvents: "none" }}
                    value={userdata.surname}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter phone number"
                    style={{ pointerEvents: "none" }}
                    value={userdata.mobileno}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter email id"
                    style={{ pointerEvents: "none" }}
                    value={userdata.email}
                  />
                </div>

                <div className="col-md-12">
                  <label className="labels">Address Line 1</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 1"
                    style={{ pointerEvents: "none" }}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Address Line 2</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 2"
                    style={{ pointerEvents: "none" }}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Pincode</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter address line 2"
                    style={{ pointerEvents: "none" }}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="country"
                    style={{ pointerEvents: "none" }}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">State/Region</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="state"
                    style={{ pointerEvents: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center experience">
                <h4>Native Place adress</h4>
                <span
                  className="border px-3 p-1 add-experience"
                  onClick={editProfile}
                >
                  <i className="fa fa-plus" />
                  &nbsp;Edit
                </span>
              </div>
              <br />
              <div className="col-md-12">
                <label className="labels">Address Line 1</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter address line 1"
                  style={{ pointerEvents: "none" }}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Address Line 2</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter address line 2"
                  style={{ pointerEvents: "none" }}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Pincode</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="enter pincode"
                  style={{ pointerEvents: "none" }}
                />
              </div>
              <div className="col-md-12 py-4">
                <label className="labels">Adhar Card</label>
                <div className="col-md-12">
                  <img
                    alt=""
                    style={{ height: "300px" }}
                    src={"http://localhost:7000/" + userdata.image}
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

export default Profile;
