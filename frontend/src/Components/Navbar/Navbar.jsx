import React, { useState } from "react"
import './Navbar.css'
import logo from '../Assets/logo2.png'

const Navbar = () => {

    const [menu, setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt ="" />
                <p>AutoDream</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}> Shop {menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("vehicles")}}> Vehicle {menu==="vehicles"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("parts")}}> Parts {menu==="parts"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar