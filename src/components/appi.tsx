import axios from "axios";

export async function fecthUserDeatils(userid: any) {
    const usermobilenumber=localStorage.getItem("loggedInUser");
    const profileresponse = await axios
        .get(`http://localhost:5000/api/user/${usermobilenumber}`)
        .then((response) => {
            console.log("Response", response.data);
            return response.data;
        })
        .catch((err) => {
            console.log("Error", err);
        });
    return profileresponse;
}

export async function editProfileDetails(userData: any) {
    console.log("userData", userData);
    var bodyFormData = new FormData();
    bodyFormData.append("name", userData.name);
    bodyFormData.append("image", userData.image);

    const response = await axios({
        method: "put",
        url: `http://localhost:5000/api/user/${userData._id}`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {
            //handle success
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}

export async function userLogin(userData: any) {
    const response = await axios({
        method: "post",
        url: `http://localhost:5000/api/login`,
        data: userData,
        // headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {
            //handle success 
			return {
				status : response.status,
				message: response.data.msg
			}
        })
        .catch(function (error) {
            //handle error
			return {
				status : error.response.status,
				message: error.response.data.message
			}	

        });
	return response
}


export async function userRegister(userData: any) {
    const response = await axios({
        method: "post",
        url: `http://localhost:5000/api/register`,
        data: userData,
        // headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {
            //handle success 
			return {
				status : response.status,
				message: response.data.msg
			}
        })
        .catch(function (error) {
            //handle error
			return {
				status : error.response.status,
				message: error.response.data.message
			}	

        });
	return response
}

export async function createJob(userData: any) {
    const response = await axios({
        method: "post",
        url: `http://localhost:5000/api/postjob`,
        data: userData,
        // headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {
            //handle success 
			return {
				status : response.status,
				message: response.data.msg
			}
        })
        .catch(function (error) {
            //handle error
			return {
				status : error.response.status,
				message: error.response.data.message
			}	

        });
	return response
}
