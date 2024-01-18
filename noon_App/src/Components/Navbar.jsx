import React from "react";
import "../App.css"
import Navbar_Banner from "../Images/Navbar_Banner.svg"

import Header_Banner from "../Images/Header_Banner.svg"


const Header = () => {


    return (
        <>
            <header className="Main_Header">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-3">
                                <img className="Header-brand  me-2" src={Navbar_Banner} alt="" />
                                <a className="Navbar-brand me-2" href="#"><img src={Header_Banner} alt="" /></a>
                                <span className="me-2">Deliver to Dubai</span>
                            </div>
                            <div className="col-sm-6">
                                <form className="d-flex" role="search">
                                    <input className="form-control " size={100} type="search" placeholder="Search" aria-label="Search" />
                                </form>
                            </div>
                            <div className="col-sm-3 collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav ">
                                    <li className="">
                                        <a className="nav-link active " aria-current="page" href="#">العربية</a>
                                    </li>
                                    <li className="">
                                        <a className="nav-link active" href="#">Login</a>
                                    </li>
                                    <li className="">
                                        <a className="nav-link active" aria-current="page" href="#">Wishlist</a>
                                    </li>
                                    <li className="">
                                        <a className="nav-link active" aria-current="page" href="#">Cart</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export { Header }