import React from "react";
import "./header.css"
import { Link } from 'react-router-dom';
import Image from "../logo.svg"

export default function Header(){
    return(
        <div>
            <Link to='/'>
      <nav className="navBar"><img src={Image} className="navImage" /> </nav></Link>
        </div>
    )
}