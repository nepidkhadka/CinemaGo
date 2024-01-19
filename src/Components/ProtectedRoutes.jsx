import { UserAuth } from "../Context/AuthContext"

const ProtectedRoutes = ({children}) => {

const {user} = UserAuth()

  return (
    <div>{children}</div>
  )
}

export default ProtectedRoutes