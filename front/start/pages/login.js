import React, { useState, useEffect } from 'react'  
import axios from 'axios'
import { useRouter } from "next/router"
import Navbar1 from '../components/navbar1'
import config from '../config/config'

export default function Login({ token }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    const login = async (req, res) => {
        try {
            let result = await axios.post(`${config.URL}/login`,
                { username, password },
                { withCredentials: true })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus("การเข้าสู่ระบบเสร็จสมบูรณ์")
        }
        catch (e) {
            <div className='text-white'>error</div>
            console.log('error: ')
            setStatus("ไม่สามารถเข้าสู่ระบบได้")
        }
    }

    
    const loginForm = () => (
        <div><Navbar1/>
        <span class="animate-bounce absolute inline-flex h-20 w-full rounded-full bg-teal-500 opacity-5"></span>
        <div className="h-screen flex flex-col justify-center items-center min w-full relative bg-[url('https://images.wallpaperscraft.com/image/single/planets_space_stars_radiation_light_59621_1366x768.jpg')]">
            <div className='max-w-md hover:bg-teal-900 hover:bg-opacity-50 shadow-blue-500/50 shadow-inner rounded-lg border border-primaryBorder  py-10 px-16'>
                <h1 className='text-white text-bold text-2xl font-medium text-primary  text-center'>
                    ยืนยันตัวตนก่อนเข้าสู่ดวงจันทร์
                </h1><br></br>
                <div className='row-span-4 text-white'>
                        <h1 className='text-2xl text-center text-green-500'>{status}</h1>
                    </div>
                <br></br>
                    <div className='text-white'>
                        <label>Email</label>
                        <input type='text'
                                className={`w-full text-sky-700 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                name="username"
                                placeholder="username"
                                onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='text-white'>
                        <label>Password</label>
                        <input type='password'
                                className={`w-full text-sky-700 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                name="password"
                                placeholder="password"
                                onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-center items-center mt-6'>
                        <button onClick={login}
                        className={`w-24 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark hover:bg-green-500`}>
                            Login   
                        </button>
                    </div> 
            </div>
        </div>
        </div>
    )

    return (
            <div>
                {loginForm()}
            </div>
        
    )
}

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
