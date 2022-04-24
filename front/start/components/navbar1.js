import React, { useState } from 'react'
function Navbar1() {
    return (
        <div className=" top-0 relative shadow-sm  w-full h-14 bg-black text-white flex flex-row justify-between items-center ">
            <div className="text-4xl brand-logo  text-red-700 font-bold px-2"><a href="/">AtMoon</a></div>
            <ul className="hidden menu-list lg:flex gap-y-32 lg:flex-row  font-bold">
                <li className="menu-list-item px-10 text-lg text-sky-700"><a href="/login">Login</a></li>
                <li className="menu-list-item px-10 text-bold ">|</li>
                <li className="menu-list-item text-4xl px-10  hover:text-sky-700"><a href="student">MOON</a></li>
                <li className="menu-list-item px-10 text-bold ">|</li>
                <li className="menu-list-item px-10 text-lg hover:text-sky-700"><a href="register">Register</a></li>
            </ul>
            <button onClick={() => window.location.href ="/logout"}
            className='py-2 px-4 text-bold hover:text-red-500'>
                LOGOUT
            </button>
        </div>
    )
}
export default Navbar1
