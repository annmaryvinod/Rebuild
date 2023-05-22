
import Navbar from "./header/Navbar";
import Logo from "./header/Logo";
import { useState } from "react";






const Header = () => {
   
    return (

        <header id="header" class="header fixed-top" style={{
            backgroundColor: "#fff",
            position: "sticky"
            }}>
            <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

                <Logo />
                <Navbar />




            </div>
        </header >
    );
}

export default Header;