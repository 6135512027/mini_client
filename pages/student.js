import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useSWR, { mutate } from 'swr'
const URL = `http://localhost/api/students`
const fetcher = (url) => axios.get(url).then(res => res.data)

export default function Home() {

    const [student, setStudent] = useState([])
    const [name, setname] = useState('')
    const [surname, setsurname] = useState('')
    const [major, setmajor] = useState('')
    const [GPA, setGPA] = useState(0)

    const { data, error } = useSWR(URL, fetcher)
    if (!data) {
        return <div>Loading ...</div>
    }
    const getStudents = async () => {
        let student = await axios.get(URL)
        setStudents(student.data)
    }

    const getStudent = async (id) => {
        let student = await axios.get(`${URL}/${id}`)
        setStudent({
            name: student.data.name,
            surname: student.data.surname,
            major: student.data.major,
            GPA: student.data.GPA
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

    const printStudents = (students) => {
        if (students && students.length)
            return (students.map((item, index) =>
            (
                <div class="italic text-white border-2 border-white shadow-lg shadow-yellow-500/50 mt-5 w-full max-w-md mx-auto p-8 md:p-6 bg-yellow-500 rounded-xl font-sans" key={index}>
                    <div>
                        Id      : {item.id} <br/>
                        Name    : {item.name} <br />
                        Surname : {item.surname} <br />
                        Major   : {item.major} <br />
                        GPA     : {item.GPA}
                        <div className=''>
                            <button class='mt-1 bg-transparent hover:bg-gray-300 text-red-800 font-semibold hover:text-red-800 py-2 px-4 border border-white hover:border-transparent rounded' onClick={() => getStudent(item.id)}>GET</button>
                            <button class='mt-1 ml-4 bg-transparent hover:bg-gray-300 text-red-800 font-semibold hover:text-red-800 py-2 px-4 border border-white hover:border-transparent rounded' onClick={() => updateStudent(item.id)}>UPDATE</button>
                            <button class='mt-1 ml-4 bg-transparent hover:bg-gray-300 text-red-800 font-semibold hover:text-red-800 py-2 px-4 border border-white hover:border-transparent rounded' onClick={() => deleteStudent(item.id)}>DELETE</button>
                        </div>
                    </div>
                </div>
            )
            ))
    }
    return (
        <div className='flex justify-center flex-col items-center'>
            <div class="text-5xl font-extrabold ...">
  <span class="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-800">
    ADD STUDENTS
  </span>
</div><br />
            <div >
                <div class="italic">
                    Name : <input type="text" onChange={(e) => setname(e.target.value)}></input><br/>
                    Surname : <input type="text" onChange={(e) => setsurname(e.target.value)}></input><br/>
                    Major : <input type="text" onChange={(e) => setmajor(e.target.value)}></input><br/>
                    GPA : <input type="number" onChange={(e) => setGPA(e.target.value)}></input><br />
                </div> 
                <button class="mt-1 bg-transparent hover:bg-white text-white font-semibold hover:text-red-800 py-2 px-4  hover:border-transparent rounded bg-red-800 shadow-lg shadow-red-500/50 max-w-md mx-auto  w-full" onClick={() => addStudent(name, surname, major, GPA)}>ADD</button><br />
            </div>
             <div>
                    {printStudents(data.list)}
            </div><br />
            



            <h1 class="italic">Show  Student</h1>
            <div>
                <div class="italic">
                    Name    : {student.name} <br />
                    Surname : {student.surname} <br />
                    Major   : {student.major} <br />
                    GPA     : {student.GPA} <br />
                </div>
            </div>
        </div>

    )
}