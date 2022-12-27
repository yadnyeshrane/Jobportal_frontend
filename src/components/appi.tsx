import axios from 'axios';


export  async function fecthUserDeatils(userid:any)
{
const profileresponse=await axios.get("http://localhost:5000/api/user/9920471835").then((response)=>{
    console.log("Response",response.data)
    return response.data
}).catch((err)=>{
    console.log("Error",err)
})
return profileresponse;
}


export  async function editProfileDetails(userData:any)
{
    console.log("userData",userData)
    var bodyFormData = new FormData();
    bodyFormData.append("name",userData.name)
    bodyFormData.append("image",userData.image)

const response=await axios({
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
