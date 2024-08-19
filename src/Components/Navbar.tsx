"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const router = useRouter();
    const handleLoginClick = () => {
        router.push("/login");
    };
    return (
        <nav className="w-full flex justify-between items-center h-14 px-5 shadow">
            <h1>
            <img src="" alt="Logo" />
            Logo
            </h1>
            <div className="flex justify-between items-center gap-4">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contribute</a>
            </div>
            <button onClick={handleLoginClick}>Sign In</button>
        </nav>
    )
}

export default Navbar