import { Link, useNavigate } from "react-router-dom";
import "./Login.css"
import { useState } from "react";
import { UserAuth } from "../../Context/AuthContext";

const Login = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const {user, login} = UserAuth()
    const nav = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault()

      try{
        await login(email, password)
        alert("Login Success")
        nav("/")
      }
      catch(err){
        console.log(err);
        alert(err.message)
      }
    }

  return (
    <div>
      <div className="container">
            <div className="form login">
                <div className="form-content">
                    <header>Login</header>
                    <form onSubmit={handleSubmit}>
                        <div className="field input-field">
                            <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email" name="email" className="input"/>
                        </div>
                        <div className="field input-field">
                            <input type="password" minLength={8} value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Password" name="password" className="password"/>
                        </div>
                        <div className="form-link">
                            <a href="#" className="forgot-pass">Forgot password?</a>
                        </div>
                        <div className="field button-field">
                            <button>Login</button>
                        </div>
                    </form>
                    <div className="form-link">
                        <span>Don't have an account? <Link to="/register" className="link signup-link">Signup</Link></span>
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
            </div>
    </div>
  );
};

export default Login;
