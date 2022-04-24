import { useState } from 'react'
import axios from 'axios'
import Navbar2 from '../components/navbar2'
import config from '../config/config'
export default function Register({ token }) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    const profileUser = async () => {
        console.log('token: ', token)
        const users = await axios.get(`${config.URL}/student`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log('user: ', users.data)
    }

    const register = async (req, res) => {
        try {
            let result = await axios.post(`${config.URL}/register`,
                { username, email, password })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus(result.data.message)
        }
        catch (e) {
            console.log(e)
        }

    }

    const registerForm = () => (
        <div><Navbar2 />
            <span class="animate-bounce absolute inline-flex h-20 w-full rounded-full bg-teal-500 opacity-5"></span>
            <div className="h-screen flex flex-col justify-center items-center min w-full relative bg-[url('https://images.wallpaperscraft.com/image/single/planet_satellite_open_space_138520_1366x768.jpg')]">
                <div className=' max-w-md shadow-inner hover:bg-teal-900 hover:bg-opacity-50 shadow-blue-500/50 rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                    <h1 className='text-white text-2xl font-medium text-primary  text-center'>
                        ลงทะเบียน
                    </h1>
                    <br></br>
                    <div className='row-span-4 text-white'>
                        <h1 className='text-2xl'></h1>
                        <h1 className='text-2xl text-center text-red-500'>{status}</h1>
                    </div>
                    <br></br>
                    <div className='text-white'>
                        <label>Email</label>
                        <input type='email'
                            className={`w-full text-black p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            name="email"
                            placeholder="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='text-white'>
                        <label>Username</label>
                        <input type='text'
                            className={`w-full text-black p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            name="username"
                            placeholder="username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='text-white'>
                        <label>Password</label>
                        <input type='password'
                            className={`w-full text-black p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            name="password"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-center items-center mt-6'>
                        <button onClick={register}
                            className={`hover:bg-red-700 py-2 px-4 text-sm  text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Register
                        </button></div>
                </div>
            </div>
        </div>
    )


    return (
        <div>
            {registerForm()}
        </div>
    )
}

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
