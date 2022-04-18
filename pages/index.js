/*import React from 'react';
const Login = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
    };
    return (
        <div className=' flex justify-center items-center min-h-screen flex-col bg-sky-900'>
            <div className='flex justify-center h-5 w-96 m-8 max-w-md items-center bg-black rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
            <h1 className='text-white text-2xl '>Welcome To My World</h1>
            </div>
            <div className=' max-w-md  bg-black rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-white text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    กรุณาเข้าสู่ระบบ
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div className='text-white'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full text-black p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div className='text-white'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full text-black p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button onClick={() => {window.location.href = '/student';}}
                            className={`bg-green-700 w-24 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Login
                            
                        </button>
                        space-y-1
                        <button

                            className={`bg-red-700 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

export function getServerSideProps({ req, res }) {
    // console.log("token from cookie: ",cookie.get("token")) 
    // console.log('req: ', req.headers)
    return { props: { token: req.cookies.token || "" } };
  }*/

import { useState } from 'react'
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
            setStatus("Login Success")
        }
        catch (e) {
            console.log('error: ', JSON.stringify(e.response))
            setStatus(JSON.stringify(e.response).substring(0, 80) + "...")
        }
    }

    

    const loginForm = () => (
        <div 
        className={`bg-green-700 w-24 py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}>
            Login
            <div>
                Username:
            </div>
            <div>
                <input type="text"
                    name="username"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                Password:
            </div>
            <div>
                <input type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
        </div>
    )

    const copyText = () => {
        navigator.clipboard.writeText(token)
    }

    return (
        <div className=' flex justify-center items-center min-h-screen flex-col bg-sky-900'>
            <div>
            <button onClick={() => {window.location.href = '/register';}}>register</button>
                <h1>Login</h1>
                <br />
                <div>
                    Status:  {status}
                </div>
                <br />
                {loginForm()}
                <div>
                    <button onClick={login}>Login</button>
                </div>
            </div>
        </div>
    )
}

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
