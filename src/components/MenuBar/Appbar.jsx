import { FaHome } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import "./MenuBar.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentToken } from "../../features/auth/authSlice";
import { useLogoutMutation } from "../../api/auth/authApiSlice";
import { logout as clearCredentials } from "../../features/auth/authSlice";
export default function Appbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const token = useSelector(currentToken)
  const [logout] = useLogoutMutation()
  const [active] = useState(1);
  const dispatch = useDispatch()
  const handleLogout = async () => {
    try {
      await logout()
      dispatch(clearCredentials())
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="appbar">
      <div
        className="appbox"
        style={{
          borderTop: location.pathname === "/" ? "4px solid black" : "0",
        }}
        onClick={() => navigate('/')}
      >
        <FaHome
          style={{
            fontSize: "28px",
            marginTop: "4px",
          }}
        />
        <p>Home</p>
      </div>
      <div
        className="appbox"
        style={{
          borderTop: location.pathname === "/cart" ? "4px solid black" : "0",
        }}
        onClick={() => navigate("/cart")}
      >
        <BsCartPlus
          style={{
            fontSize: "28px",
            marginTop: "4px",
          }}
        />
        <p>Cart</p>
      </div>
      <div
        className="appbox"
        style={{
          borderTop: active === 3 ? "4px solid black" : "0",
        }}
        onClick={() => {
          !token ? navigate("/login") : handleLogout()

        }}
      >
        <BsPerson
          style={{
            fontSize: "28px",
            marginTop: "4px",
          }}
        />
        <p>
          {
            token ? 'Logout' : 'Login'
          }
        </p>
      </div>
    </div>
  );
}
