
import Button from "../Button";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';

import "./styles.css"
import { useState } from "react";

const Form = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [success, setSuccess] = useState("");
  const [warning, setWarning] = useState("");
  const [visible, setVisible] = useState(true);
  const [visible2, setVisible2] = useState(true);

  const handleSignup = (e) => {
    e.preventDefault();
    if (name!=="" && email!=="" && password!=="" && confirm!=="") {
      if (password !== confirm) {
        setWarning('Error: Please Make sure your passwords and confirm passwords match!');
        setSuccess("");
      }else{
        setSuccess("Successfully Created");
        setWarning("");
        setName("");
        setEmail("");
        setPassword("")
        setConfirm("");
      }      
    }
    else{
      setWarning('Error: Please fill all the fields!');
      setSuccess("");
    }
    
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (document.querySelector(".password").type === "password") {
      document.querySelector(".password").type = "text";
      setVisible(!visible);
    }
    else {
      document.querySelector(".password").type = "password";
      setVisible(!visible);
    }
  }

  const handleClickConfirm = (e) => {
    e.preventDefault();
    if (document.querySelector(".confirm").type === "password") {
      document.querySelector(".confirm").type = "text";
      setVisible2(!visible2);
    }
    else {
      document.querySelector(".confirm").type = "password";
      setVisible2(!visible2);
    }
  }

  return (
    <div className="form">
      <h1>Create Account</h1>
      <div className="signup-buttons">
        <Button
          logo={<GoogleIcon
            style={{ color: "orange" }}
          />}
          text={"Sign up with Google"}
        />
        <Button
          logo={<FacebookRoundedIcon
            style={{ color: "blue" }}
          />}
          text={"Sign up with Facebook"}
        />
      </div>
      <div className="or">-OR-</div>
      <form>
        <input type="text" value={name} placeholder="Full Name" onChange={e => setName(e.target.value)} />
        <input type="email" value={email} placeholder="Email Address" onChange={e => setEmail(e.target.value)} />
        <div className="pass">
          <input className="password" type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
          {
            visible ? <RemoveRedEyeRoundedIcon
              style={{ 
                position: "absolute", 
                marginLeft: "-50px", 
                marginTop: "10px", 
                zIndex: "10000", 
                fontSize: "28px", 
                color: "#A0A0A0", 
                cursor: "pointer" 
              }}
              onClick={handleClick}
            /> : <VisibilityOffRoundedIcon
              style={{ 
                position: "absolute", 
                marginLeft: "-50px", 
                marginTop: "10px", 
                zIndex: "10000", 
                fontSize: "28px", 
                color: "#A0A0A0", 
                cursor: "pointer" 
              }}
              onClick={handleClick}
            />
          }


        </div>
        <div className="confPass">
          <input className="confirm" type="password" value={confirm} placeholder="Confirm Password" onChange={e => setConfirm(e.target.value)} />
          {
            visible2 ? <RemoveRedEyeRoundedIcon
              style={{ 
                position: "absolute", 
                marginLeft: "-50px", 
                marginTop: "10px", 
                zIndex: "10000", 
                fontSize: "28px", 
                color: "#A0A0A0", 
                cursor: "pointer" 
              }}
              onClick={handleClickConfirm}
            /> : <VisibilityOffRoundedIcon
              style={{ 
                position: "absolute", 
                marginLeft: "-50px", 
                marginTop: "10px", 
                zIndex: "10000", 
                fontSize: "28px", 
                color: "#A0A0A0", 
                cursor: "pointer" 
              }}
              onClick={handleClickConfirm}
            />
          }
        </div>

        <button onClick={handleSignup}>Create Account</button>
      </form>
      <p style={{ textAlign: "center", color: "#7CD2D7" }}>{success}</p>
      <p style={{ textAlign: "center", color: "#FE597B" }}>{warning}</p>
    </div>
  )
}

export default Form