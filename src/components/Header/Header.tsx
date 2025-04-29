"use client";
import "./style.css";
import React from "react";

export interface HeaderProps {
    loggedIn: boolean; 
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = (
    {loggedIn, setLoggedIn} : HeaderProps
) => {

    return (
        <header>
            <h1>Navigator</h1>
        </header>
    );
}
export default Header;