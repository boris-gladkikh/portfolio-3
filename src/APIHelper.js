import axios from 'axios';
const BASEURL = "https://gladkill-backend.herokuapp.com";


export async function getAllProjects(){
  try {
    let response = await axios.get(`${BASEURL}/projects`);
    return response.data;
  }
  catch(err){
    console.error("Error with API call", err);
  }
}

export async function postEmail(email) {
  try{
    let response = await axios.post(`${BASEURL}/emails`, email);
    return response.data;
    
  }
  catch(err){
    console.log(err);
  }
}