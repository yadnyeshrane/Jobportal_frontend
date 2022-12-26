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