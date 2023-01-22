import axios from "axios";

// const apiUrl = "http://localhost:5000";
const apiUrl = "https://jobportal-backend-ihl6f7n8h-yadnyeshrane.vercel.app"

export async function fecthUserDeatils(userid: any) {
    const usermobilenumber = localStorage.getItem("loggedInUser");
    const profileresponse = await axios
        .get(`${apiUrl}/api/user/${usermobilenumber}`)
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
    // name: "",
    // surname: "",
    // email: "",
    // addresLine_1: "",
    // addresLine_2: "",
    // pincode: "",
    // country: "",
    // state: "",
    // nativeaddresLine_1: "",
    // nativeaddresLine_2: "",
    // nativepincode: "",
    // educationdetails:'',
    // occupation
    console.log("userData", userData);
    var bodyFormData = new FormData();
    bodyFormData.append("name", userData.name);
    bodyFormData.append("image", userData.image);
    bodyFormData.append("email", userData.email);
    bodyFormData.append("addresLine_1", userData.addresLine_1);
    bodyFormData.append("addresLine_2", userData.addresLine_2);
    bodyFormData.append("pincode", userData.pincode);
    bodyFormData.append("country", userData.country);
    bodyFormData.append("state", userData.state);
    bodyFormData.append("nativeaddresLine_1", userData.nativeaddresLine_1);
    bodyFormData.append("nativeaddresLine_2", userData.nativeaddresLine_2);
    bodyFormData.append("nativepincode", userData.nativepincode);
    bodyFormData.append("educationdetails", userData.educationdetails);
    bodyFormData.append("occupation", userData.occupation);
    // bodyFormData.append("userData",userData)
    // console.log(bodyFormData)
    const response = await axios({
        method: "put",
        url: `${apiUrl}/api/user/${userData._id}`,
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
        url: `${apiUrl}/api/login`,
        data: userData,
        // headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {
            //handle success
            return {
                status: response.status,
                message: response.data.msg,
            };
        })
        .catch(function (error) {
            //handle error
            return {
                status: error.response.status,
                message: error.response.data.message,
            };
        });
    return response;
}

export async function userRegister(userData: any) {
    const response = await axios({
        method: "post",
        url: `${apiUrl}/api/register`,
        data: userData,
        // headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {
            //handle success
            return {
                status: response.status,
                message: response.data.msg,
            };
        })
        .catch(function (error) {
            //handle error
            return {
                status: error.response.status,
                message: error.response.data.message,
            };
        });
    return response;
}

export async function createJob(userData: any) {
    const response = await axios({
        method: "post",
        url: `${apiUrl}/api/postjob`,
        data: userData,
        // headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {
            //handle success
            return {
                status: response.status,
                message: response.data.msg,
            };
        })
        .catch(function (error) {
            //handle error
            return {
                status: error.response.status,
                message: error.response.data.message,
            };
        });
    return response;
}

export async function getJobByCategory(category_id: any) {
    const response = await axios({
        method: "get",
        url: `${apiUrl}/api/getjobsbycategory/${category_id}`,
        // headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {
            //handle success
            return {
                status: response.status,
                message: response.data,
            };
        })
        .catch(function (error) {
            //handle error
            return {
                status: error.response.status,
                message: error.response.data.message,
            };
        });
    return response;
}

export async function getResume(candidate_id: any) {
    const response = await axios({
        method: "get",
        url: `${apiUrl}/api/employee/${candidate_id}`,
        // headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {
            //handle success
            return {
                status: response.status,
                message: response.data,
            };
        })
        .catch(function (error) {
            //handle error
            return {
                status: error.response.status,
                message: error.response.data.message,
            };
        });
    return response;
}

export async function editResume(resumeData: any) {
    const response = await axios({
        method: "put",
        url: `${apiUrl}/api/employee/${resumeData.id}`,
        data: resumeData,
        // headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {
            //handle success
            return {
                status: response.status,
                message: response.data,
            };
        })
        .catch(function (error) {
            //handle error
            return {
                status: error.response.status,
                message: error.response.data.message,
            };
        });
    return response;
}

export async function getJobdetails(id: string) {
    const response = await axios({
        method: "get",
        url: `${apiUrl}/api/getJobDetails/${id}`,
        // headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {
            //handle success
            return {
                status: response.status,
                message: response.data,
            };
        })
        .catch(function (error) {
            //handle error
            return {
                status: error.response.status,
                message: error.response.data.message,
            };
        });
    return response;
}

export async function getEmpByCategory(category_id: any) {
    const response = await axios({
        method: "get",
        url: `${apiUrl}/api/get-emp-by-category/${category_id}`,
        // headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {
            //handle success
            return {
                status: response.status,
                message: response.data,
            };
        })
        .catch(function (error) {
            //handle error
            return {
                status: error.response.status,
                message: error.response.data.message,
            };
        });
    return response;
}

export async function getCandidateData(candidate_id: any) {
    const response = await axios({
        method: "get",
        url: `${apiUrl}/api/get-emp-all-details/${candidate_id}`,
        // headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {
            //handle success
            return {
                status: response.status,
                message: response.data,
            };
        })
        .catch(function (error) {
            //handle error
            return {
                status: error.response.status,
                message: error.response.data.message,
            };
        });
    return response;
}

export async function getJobByCreator(creator_id: any) {
    const response = await axios({
        method: "get",
        url: `${apiUrl}/api/get-joblist-posted-byuser/${creator_id}`,
        // headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {
            //handle success
            return {
                status: response.status,
                message: response.data,
            };
        })
        .catch(function (error) {
            //handle error
            return {
                status: error.response.status,
                message: error.response.data.message,
            };
        });
    return response;
}

export async function deleteSelectedJob(id: string) {
    const response = await axios({
        method: "delete",
        url: `${apiUrl}/api/jobposted-delete/${id}`,
        // headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {
            //handle success
            return {
                status: response.status,
                message: response.data,
            };
        })
        .catch(function (error) {
            //handle error
            return {
                status: error.response.status,
                message: error.response.data.message,
            };
        });
    return response;
}

export async function updateJobdetails(jobdata: any, id: string) {
    console.log("first");

    const response = await axios({
        method: "put",
        url: `${apiUrl}/api/jobposted-update`,
        data: jobdata,
        // headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {
            //handle success
            return {
                status: response.status,
                message: response.data,
            };
        })
        .catch(function (error) {
            //handle error
            return {
                status: error.response.status,
                message: error.response.data.message,
            };
        });
    return response;
}