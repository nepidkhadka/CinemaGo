import { Link } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import "./ProtectedRoutes.css"

const ProtectedRoutes = ({ children }) => {
  const { user } = UserAuth();

  if(user=="")
  return(
    <div className="preloader">
      <div className="loader"></div>
    </div>
    )

  return user && user.email ? (
    <>{children}</>
  ) : (
    <div className="error">
      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Not Logged In
      </p>
      <Link className="login" to="/login">
        Login Here
      </Link>
    </div>
  );
};
export default ProtectedRoutes;
