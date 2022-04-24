import React, { useState, useEffect } from 'react'
import Navbar4 from '../components/navbar4';
import axios from 'axios'
import config from '../config/config'

export default function Logout({ token }) {

    const [status, setStatus] = useState('')

    useEffect(() => {
        logout()
    }, [])

    const logout = async () => {
        console.log('remove token: ', token)
        let result = await axios.get(`${config.URL}/logout`, { withCredentials: true })
    }
    return (
        <div>
            <Navbar4 />
            <span class="animate-bounce absolute inline-flex h-20 w-full rounded-full bg-teal-500 opacity-5"></span>
            <div className="h-screen w-full relative bg-[url('https://images.alphacoders.com/119/thumb-1920-1193279.jpg')]">
                <div className='w-full h-full justify-center items-center absolute top-0 left-0 '>
                    <div className='shadow-2xl w-full h-full top-0 flex flex-col gap-4 absolute justify-center items-center'>
                        <div className='text-4xl font-bold  text-white'>GOOD BYE GOOD LUCK</div>
                        <div className='text-2xl font-bold  text-white'>ขอบคุณที่มาหาเรา</div>
                        <div><button onClick={() => { window.location.href = '/login'; }}
                            className={`hover:bg-teal-600 bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}>
                            JOIN AGAIN
                        </button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

