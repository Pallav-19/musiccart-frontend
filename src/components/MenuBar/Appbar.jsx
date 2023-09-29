import { FaHome } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import "./MenuBar.css";
import { useState } from "react";

export default function Appbar() {
  const [active, setActive] = useState(1);
  return (
    <div className="appbar">
      <div
        className="appbox"
        style={{
          borderTop: active == 1 ? "4px solid black" : "0",
        }}
        onClick={()=>setActive(1)}
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
          borderTop: active == 2 ? "4px solid black" : "0",
        }}
        onClick={()=>setActive(2)}
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
          borderTop: active == 3 ? "4px solid black" : "0",
        }}
        onClick={()=>setActive(3)}
      >
        <BsPerson
          style={{
            fontSize: "28px",
            marginTop: "4px",
          }}
        />
        <p>Account</p>
      </div>
    </div>
  );
}
