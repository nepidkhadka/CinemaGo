import "./Register.css"
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div>
    <section className="container forms">
          <div className="form login">
              <div className="form-content">
                  <header>Register</header>
                  <form action="#">
                      <div className="field input-field">
                          <input type="email" placeholder="Email" className="input"/>
                      </div>
                      <div className="field input-field">
                          <input type="password" placeholder="Password" className="password"/>
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
