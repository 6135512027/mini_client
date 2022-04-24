import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useSWR, { mutate } from 'swr'
import Navbar3 from '../components/navbar3'
import withAuth from '../components/withAuth'
import config from '../config/config'
const URL = `http://localhost/api/student`
const fetcher = (url) => axios.get(url).then(res => res.data)

const Profile1 = ({ token }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        profileUser()
    }, [])

    const profileUser = async () => {
        try {
            // console.log('token: ', token)
            const users = await axios.get(`${config.URL}/student`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            // console.log('user: ', users.data)
            setUser(users.data)
        }
        catch (e) {
            console.log(e)
        }

    }

    const [student, setStudent] = useState([])
    const [name, setname] = useState('')
    const [surname, setsurname] = useState('')

    function showToast() {
        const toast = document.querySelector('.toast');
        toast.classList.remove('hidden')
    }

    function hideToast() {
        const toast = document.querySelector('.toast');
        toast.classList.add('hidden')
    }

    const printStudents = (students) => {
        if (students && students.length)
            return (students.map((item, index) =>
            (
                <div class="bg-black bg-opacity-30 items-center justify-center  text-white border-2 border-white shadow-inner shadow-black mt-5 w-full max-w-md mx-auto p-8 md:p-6 rounded-xl font-sans hover:bg-green-700 hover:bg-opacity-30" key={index}>
                    <div className='text-center text-2xl text-black'>{item.surname}</div>
                    <div className=''>
                        {item.name}
                        <br />
                        <div className='flex flex-row justify-center items-center'>
                            <div onClick={() => deleteStudent(item.id)}
                                className='text-4xl text-white hover:text-red-700'>X</div>
                            <button onClick={showToast}
                            class='mt-1 ml-4 bg-transparent hover:bg-gray-300 text-white font-semibold hover:text-green-700 py-2 px-4 border border-white hover:border-transparent rounded'>ส่งสำเนาไปยังโลกของฉัน</button>
                        </div>
                    </div>
                </div>
            )
            ))
    }


    const { data, error } = useSWR(URL, fetcher)
    if (!data) {
        return <div>Loading ...</div>
    }

    const getStudent = async (id) => {
        let student = await axios.get(`${URL}/${id}`)
        setStudent({
            name: student.data.name,
            surname: student.data.surname
        })
    }

    const updateStudent = async (id) => {
        let student = await axios.put(`${URL}/${id}`, { name, surname, major, GPA })
        mutate(URL)
    }

    const addStudent = async (name, surname, major, GPA) => {
        let student = await axios.post(URL, { name, surname, major, GPA })
        mutate(URL)
    }

    const deleteStudent = async (id) => {
        let student = await axios.delete(`${URL}/${id}`)
        mutate(URL)
    }

    return (
    <div>
        <Navbar3 />
        <span class="animate-bounce absolute inline-flex h-20 w-full rounded-full bg-teal-500 opacity-5"></span>
        <div className="h-screen  flex flex-col  items-center min w-full relative bg-[url('http://image.free.in.th/v/2013/ip/220424124037.jpg')]">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='max-w-md shadow-inner text-center text-2xl text-white bg-opacity-10 shadow-blue-500/50 rounded-lg border border-primaryBorder shadow-default py-10 px-16 hover:bg-teal-600 hover:bg-opacity-50'>
                ฝากความรำลึกถึงทีนี้
                <br></br>
                <div class="italic">
                    <input type='text'
                        className={`w-full text-black p-1 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 text-center`}
                        name="username"
                        placeholder="ความทรงจำของฉันที่นี้"
                        onChange={(e) => setname(e.target.value)}
                    />
                    <input type='text'
                        className={`w-full text-black p-1 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 text-center`}
                        name="username"
                        placeholder="ชื่อของฉัน"
                        onChange={(e) => setsurname(e.target.value)}
                    />
                </div>
                <button class="mt-1  text-white font-semibold rounded border border-green max-w-md mx-auto  w-full hover:bg-red-700 " onClick={() => addStudent(name, surname)}>AT-MOON</button>
            </div>
            <br />
            <br />
            <br />
            <div className='flex flex-col'>
            <div id="toast-success" class="flex items-center w-full max-w-xs p-4 mb-4  bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 toast hidden" role="alert">
                <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-700 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                </div>
                <div class="ml-3 text-sm text-white font-normal">ส่งสำเนาเรียบร้อยแล้ว</div>
                <button onClick={hideToast}
                type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-red-700 dark:bg-gray-800 dark:hover:bg-white" data-dismiss-target="#toast-success" aria-label="Close">
                    <span class="sr-only">Close</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
                {printStudents(data.list)}
            </div><br />
        </div>
    </div>
    )
}

export default withAuth(Profile1)


export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}


