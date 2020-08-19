import axios from 'axios';
const BASEURL = "https://gladkill-backend.herokuapp.com";

//posts email to backend server

export async function postEmail(email) {
  try{
    let response = await axios.post(`${BASEURL}/emails`, email);
    return response.data;
    
  }
  catch(err){
    console.error("API Error:", err);
    if(err.response){
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
    throw new Error("Something went wrong", err);
  }
}