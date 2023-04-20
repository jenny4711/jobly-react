import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
const BASE_URL = process.env.REACT_APP_BASE_URL || "https://joblyr.herokuapp.com";
/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    console.log(this.token)
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */



  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }
  static async getCompanies(name) {
    let res = await this.request("companies", { name });
    return res.companies;
  }

  static async getJobs(title){
    let res=await this.request("jobs",{title});
    return res.jobs;
  }

  static async signUp(data){
    let res=await this.request(`auth/register`,data,"post")
    return res.token;
  }

  static async login(data){
    let res=await this.request(`auth/token`,data,"post")
    return res.token;
  }

  static async getInfoUser(username){
    let res=await this.request(`users/${username}`);
    return res.user
  }

  static async profile(username,data){
    let res=await this.request(`users/${username}`,data,"patch")
    console.log(res)
    return res.user;
  }

  static async applyJob(username,id){
    await this.request(`users/${username}/jobs/${id}`,{},"post")
  }
  
  
  // obviously, you'll add a lot here ...
}



// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QxMjM0IiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY4MTc2MTE3OX0.OniuJcIVSVlR8kpKBznhjlTCn93dlDAswILO1fn7bqk"

    export default JoblyApi

    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    // "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    // "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";


    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QxMjM0IiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY4MTQ5Njg3OX0.4_fa_6RVYrcjoHVQygCYQSvddjyKbRxpkDe3MM_cKqY"