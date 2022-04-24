import React from 'react';
import Navbar from '../components/navbar';
import config from '../config/config'


const Home = () => {
    return (
        <div>
        <Navbar/>
        <span class="animate-bounce absolute inline-flex h-20 w-full rounded-full bg-teal-500 opacity-5"></span>
        <div className="h-screen w-full relative bg-[url('https://images.wallpaperscraft.com/image/single/astronaut_space_outer_space_159684_1366x768.jpg')]">
            <div className='w-full h-full justify-center items-center absolute top-0 left-0 '>
                <div className='shadow-2xl w-full h-full top-0 flex flex-col gap-4 absolute justify-center items-center'>
                    <div className='text-4xl font-bold  text-white'>WELCOME TO THE MOON</div>
                    <div className='text-2xl font-bold  text-white'>เราจะสร้างความทรงจำไว้ทีนี้</div>
                    <div className='flex felx-row gap-4'>
                    <div><button onClick={() => {window.location.href = '/login';}}
                     className={`hover:bg-teal-600  bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}>
                    JOIN NOW 
                    </button></div>
                    <div><button onClick={() => {window.location.href = '/about';}}
                     className={`hover:bg-teal-600 bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}>
                    LEARNING
                    </button></div>
                    </div>
                    </div>
            </div>
        </div>
        </div>
    );

};

export default Home;

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
  
