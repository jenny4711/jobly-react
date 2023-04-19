import {useState,useEffect} from 'react';
import Alert from "react-bootstrap/Alert";

const useMsg =(value)=>{
  const [msg,setMsg]=useState(value)
  const getMsg =()=>{
    setMsg(value)

    if(msg && msg.length >0){
      msg.map((e)=>(
        <Alert
                className={msg ? "" : "hide"}
                key="danger"
                variant="danger"
              >
                {e}
              </Alert>
      ))
  
    }else if (msg && msg.length ===1){
      <Alert  className={msg ? "" : "hide"}
      key="danger"
      variant="danger" >{msg[0]}</Alert>
    }


  }
  
  return [msg]
}

export default useMsg;