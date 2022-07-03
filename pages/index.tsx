import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Navigation from './navigation';
import Lottie from "react-lottie-player";
import anim from "./lotties/dazzbck.json";



const Home: NextPage = () => {
    
  return (<main className="dark:bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 font-mono bg-white relative overflow-hidden h-screen">
    <Navigation /> 
    <Lottie
                    className="absolute md:[width:100] md:[height:100] "
                    style={{marginLeft:"auto", marginRight:"auto", left:0, right:0, textAlign:"center", width:"90%", height:"90%",bottom:10, zIndex:0}}
                    loop
                    animationData={anim}
                    play
                  />
    

    <div className="flex relative z-20 items-center">
        <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
            <div className="flex flex-col">
                {/* <img src="/images/person/11.webp" className="rounded-full w-28 mx-auto"/> */}
                <p className="text-3xl my-6 text-center dark:text-white">
                    Hi, I'm Manan
                </p>
                <p className="text-3xl my-6 text-center dark:text-white">
                    A prefinal year <br /> Electrical engineering <br /> undergrad at NIT Hamirpur,
                </p>
                <h2 className="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
                <Typewriter
                              options={{
                                strings: ['A web dev enthusiast', 'Indie lover', 'A blogger', 
                                          'A footballer'],
                                autoStart: true,
                                loop: true,
                              }}
                            />
                </h2>
                <div className="flex items-center justify-center mt-24 md:mt-4">
                    <a href="/contact"  className="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent bg-gray-600 text-white hover:bg-gray-700 text-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                        CONNECT WITH ME
                    </a>
                </div>
            </div>
        </div>
    </div>
</main>

  )
}

export default Home
