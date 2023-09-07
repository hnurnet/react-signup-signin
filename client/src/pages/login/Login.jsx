import { useState } from "react";
import "./login.css";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [inputs,setInputs] = useState({
    username:"",password:""
  });
  const [err,setError] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prev)=>({...prev, [e.target.name]: e.target.value}));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
   try{
    await axios.post("http://localhost:8800/api/auth/login", inputs)
    navigate("/dashboard");
    

   }
   catch(err){
    setError(err.response.data)

   }

  }
    return (
        <div className="container">
           <form>
<div className="header text-center">
<h1>Login</h1>
</div>
    
<div className="form-group row">
    <label className="col-sm-2 col-form-label">User Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control mb-3" placeholder="User 
      name" name="username" onChange={handleChange}/>
    </div>
  </div>
  
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" placeholder="Password" 
      name="password"  onChange={handleChange}/>
    </div>
  </div>
  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary mt-4" 
      onClick={handleSubmit}>Login</button>
      {err &&  <p className="error">{err}</p>}
      <p><Link className="sign-up" to="/">not registered sign up</Link></p>
    </div>
  </div>
</form>
        </div>
    );
};

export default Login;