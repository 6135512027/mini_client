import React from 'react';


const Home = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
    };


    return (
        <div className='h-screen w-full relative bg-[#22243d]'>
            <div className='w-full h-full justify-center items-center absolute top-0 left-0 '>
                <div className='w-full h-full top-0 flex absolute justify-center '>
                    <div className='text-4xl font-bold  text-white'>WELCOME TO THE MOON</div>
                    <div>space-y-2</div>
                    <div><button onClick={() => {window.location.href = '/login';}}
            className={`bg-green-300 py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}>
            login
            </button></div>
                </div>
                <img src='https://i.pinimg.com/originals/c2/c1/18/c2c118ac6a581f04bb80a8fe5448584a.gif'></img>
                
            </div>
        </div>
    );


    /*return (
        <div className='h-screen w-full flex bg-sky-900'>
            <div className='w-full max-w-md m-auto bg-black rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-white text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Welcome
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div className='flex justify-center items-center mt-6'>
                        <button onClick={() => {window.location.href = '/student';}}
                            className={`bg-green-300 py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            student
                        </button>
                        space-y-2
                        <button onClick={() => {window.location.href = '/register';}}
                            className={`bg-red-300 py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Register
                        </button>
                        space-y-2
                        <button onClick={() => {window.location.href = '/login';}}
                            className={`bg-red-300 py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );*/
};

export default Home;