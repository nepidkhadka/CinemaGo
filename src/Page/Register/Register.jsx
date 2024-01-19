import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css"
import { UserAuth } from "../../Context/AuthContext";


const Register = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const {user, signup} = UserAuth()
    const nav = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault()

      try{
        await signup(email, password)
        alert("Register Success")
        nav("/")
      }
      catch(err){
        alert(err)
      }
    }

  return (
    <div>
    <section className="container forms">
          <div className="form login">
              <div className="form-content">
                  <header>Register</header>
                  <form onSubmit={handleSubmit}>
                      <div className="field input-field">
                      <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email" name="email" className="input"/>
                      </div>
                      <div className="field input-field">
                      <input type="password" minLength={8} value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Password" name="password" className="password"/>
                          <i className='bx bx-hide eye-icon'></i>
                      </div>
                      <div className="field button-field">
                          <button>Register</button>
                      </div>
                  </form>
                  <div className="form-link">
                      <span>Don't have an account? <Link to="/login" className="link signup-link">Login</Link></span>
                  </div>
              </div>
              {/* <div className="line"></div> */}
              {/* <div className="media-options">
                  <a href="#" className="field facebook">
                      <i className='bx bxl-facebook facebook-icon'></i>
                      <span>Login with Facebook</span>
                  </a>
              </div>
              <div className="media-options">
                  <a href="#" className="field google">
                      <img src="#" alt="" className="google-img"/>
                      <span>Login with Google</span>
                  </a>
              </div> */}
          </div>
          </section>
  </div>
  );
};

export default Register;
