import React from 'react'
import Header from './Header'
import Topbar from './Topbar'

function Profile() {
  return (
   <>
    <Topbar/>
      <Header />
    <div className="container rounded bg-white mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name"  /></div>
                <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control"  placeholder="surname" /></div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number"  /></div>
                <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id"  /></div>
                
                <div className="col-md-12"><label className="labels">Address Line 1</label><input type="text" className="form-control" placeholder="enter address line 1"  /></div>
                <div className="col-md-12"><label className="labels">Address Line 2</label><input type="text" className="form-control" placeholder="enter address line 2"  /></div>
                <div className="col-md-12"><label className="labels">Pincode</label><input type="text" className="form-control" placeholder="enter address line 2"  /></div>
                
              
                
              </div>
              <div className="row mt-3">
                <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country"  /></div>
                <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control"  placeholder="state" /></div>
              </div>
              <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center experience"><h4>Native Place adress</h4><span className="border px-3 p-1 add-experience"><i className="fa fa-plus" />&nbsp;Edit</span></div><br />
              <div className="col-md-12"><label className="labels">Address Line 1</label><input type="text" className="form-control" placeholder="enter address line 1"  /></div>
              <div className="col-md-12"><label className="labels">Address Line 2</label><input type="text" className="form-control" placeholder="enter address line 2"  /></div>
              <div className="col-md-12"><label className="labels">Pincode</label><input type="number" className="form-control" placeholder="enter pincode"  /></div>
              <div className="col-md-12 py-4"><label className="labels">Adhar Card</label>
              <div className='col-md-12'>
              <img style={{height:'300px'}}src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Profile