import { Link } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const ProtectedRoutes = ({ children }) => {
  const { user } = UserAuth();

  return user && user.email ? (
    <>{children}</>
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height:"20rem",
        gap: "2rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Not Logged In
      </p>
      <Link style={{ fontSize: "1.5rem", fontWeight: "bold", color:"#fbb536" }} to="/login">
        Login Here
      </Link>
    </div>
  );
};
export default ProtectedRoutes;
