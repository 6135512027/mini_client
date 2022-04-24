import React from 'react';
import Navbar5 from '../components/navbar5';
import config from '../config/config'


const about = () => {
    return (
        <div>
            <Navbar5 />
            <span class="animate-bounce absolute inline-flex h-20 w-full rounded-full bg-teal-500 opacity-5"></span>
            <div className="h-screen w-full relative bg-[url('https://images.wallpaperscraft.com/image/single/space_planets_universe_134628_1366x768.jpg')]">
                <br/>
                <ul className='flex flex-row-4 space-x-40 ml-20 m-12 justify-center items-center'> 
                <div>
                    <img className='animate-spin' src='https://proofmart.com/wp-content/uploads/2021/06/548-1.png'/>
                    <div onClick={()=> window.open("https://th.wikipedia.org/wiki/%E0%B8%94%E0%B8%A7%E0%B8%87%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C", "_blank")}
                    className='text-white text-center text-xl hover:text-blue-500 '>WHERE IS THE MOON ?</div><br/> 
                    </div>
                


                    
                    <div onClick={()=> window.open("https://th.wikipedia.org/wiki/%E0%B8%99%E0%B8%B5%E0%B8%A5_%E0%B8%AD%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%A1%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B8%AD%E0%B8%87", "_blank")}> 
                    <img className='animate-bounce' src='https://www.picng.com/upload/astronaut/png_astronaut_35871.png'/>
                    <div className='text-white text-center text-xl hover:text-blue-500'>WHO IS  NEW ARMSTORNG ?</div>
                    </div>
                    
                    <div onClick={()=> window.open("https://th.wikipedia.org/wiki/%E0%B8%AD%E0%B8%B0%E0%B8%9E%E0%B8%AD%E0%B8%A5%E0%B9%82%E0%B8%A5_11", "_blank")}> 
                    <img className='animate-pulse' src='https://www.maxpixel.net/static/photo/640/Rocket-Atlantis-Space-Travel-Space-Shuttle-Nasa-156012.png'/>
                    <div className='text-white text-center text-xl hover:text-blue-500'>WHAT IS APOLLO 11 ?</div>
                    </div>  

                </ul>
            </div>
        </div>
    );

};

export default about;

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}

