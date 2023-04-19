import React,{useState} from "react";
import "../CSS/JobCard.css";
import JoblyApi from "../api";

const JobCard = ({ id, title, salary, equity, companyName, dt, setErrMsg }) => {
  const [err,setErr]=useState(false)
  const jobApply = async (e) => {
    let username = dt.username;
 
    try {
      let res = await JoblyApi.applyJob(username, id);
      console.log(res);
      setErr(true)
      setErrMsg("");
    } catch (e) {
      console.error(e);
      setErr(false);
    }
      setErrMsg(e);
    
    console.log(err,'err');
  };

  return (
    <div className="JobCard">
      <div key={id} className="JobCard-ul">
        <h4>
          <bold>
            <strong>TITLE:</strong>Title:
          </bold>
          {title}
        </h4>
        <h6 className="JobCard-li">
          <bold>
            <strong>COMPANY:</strong>
          </bold>{" "}
          {companyName}
        </h6>
        <h6>
          <bold>
            <strong>SALARY: </strong>
          </bold>
          {!salary ? "" : `$ ${salary}`}
        </h6>
        <h6>
          <bold>
            <strong>EQUITY</strong>
          </bold>
          {equity}
        </h6>
      </div>
      <div className="JobCard-btn">
        <button onClick={jobApply}>{err === true?'SAVED':'APPLY'}</button>
      </div>
    </div>
  );
};

export default JobCard;
