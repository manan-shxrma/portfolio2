import Navigation from "../navigation/index";
import Footer from "../footer"
import Lottie from "react-lottie-player";
import cube from "../lotties/cube.json";
import blockchain from "../lotties/blockchain.json"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faTrophy,faCheckCircle,faLink} from "@fortawesome/free-solid-svg-icons";

const contact = () => {
  return (<>
    <main className="dark:bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 font-mono bg-white relative  ">
      <Navigation />
      <div className="flex relative z-20 items-center">
        <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
        <h2 className="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
          My works
          </h2>
          <div className="w-full md:w-1/2">
                  {/* <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
            <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" />
          </div> */}
                  <Lottie
                    className=" md:ml-[0%] md:[width:100] md:[height:20rem]"
                    loop
                    animationData={cube}
                    play
                  />
                </div>
              

<section className="py-10 ">
  <div className="container items-center px-10 max-w-6xl sm:px-20 md:px-32 lg:px-16  mx-auto ">
    <div className="flex flex-wrap items-center -mx-3">
      <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
        <div className="w-full lg:max-w-md">
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Blockchain based web dapp</h2>
          <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">project aims at cracking the code of conducting elections in India which lacks security and cost-effectiveness which is a big problem in a country like India.</p>
          <ul>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <FontAwesomeIcon icon={faTrophy}/>
              <span className="font-medium text-gray-500">Winner: Best web3 based project at Mozohack hackathon</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <FontAwesomeIcon icon={faCheckCircle}/>
              <span className="font-medium text-gray-500">Among top 2 projects in hackathon</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
              <a href="https://github.com/emharsha1812/Ethereum-Voting-Machine">
              <span className="text-4xl text-gray-500"><FontAwesomeIcon icon={faGithub}/></span>
              </a>
              <a href="https://youtu.be/b6jGU4jjc4E">
              <span className="text-4xl text-gray-500"><FontAwesomeIcon icon={faLink}/></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full px-3  mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
      
       <img className="mx-auto sm:max-w-sm lg:max-w-full" src="images/election.png" alt="feature image" />
        </div>
    </div>
  </div>
</section>
<section className="py-20 ">
  <div className="container items-center max-w-6xl  px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
    <div className="flex flex-wrap items-center -mx-3">
      <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
        <div className="w-full lg:max-w-md">
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Brain Controlled Interfacing (BCI) Drone</h2>
          <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6"> One of its kind, a dream project, wherein Brain waves are mapped to control UAV movements. Project is midway and drone is fully assembled.</p>
          <ul>
            {/* <li className="flex items-center py-2 space-x-4 xl:py-3">
            <FontAwesomeIcon icon={faTrophy}/>
              <span className="font-medium text-gray-500">Faster Processing and Delivery</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <FontAwesomeIcon icon={faCheckCircle}/>
              <span className="font-medium text-gray-500">Out of the Box Tracking and Monitoring</span>
            </li> */}
            <li className="flex items-center py-2 space-x-4 xl:py-3">
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7055404008647077888/">
              <span className="text-4xl text-gray-500"><FontAwesomeIcon icon={faLinkedin}/></span>
              </a>
              
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
        <img className="mx-auto sm:max-w-sm lg:max-w-full" src="images/bcd.jpg" alt="feature image" />
        </div>
    </div>
  </div>
</section>
<section className="py-20 ">
  <div className="container items-center max-w-6xl  px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
    <div className="flex flex-wrap items-center -mx-3">
      <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
        <div className="w-full lg:max-w-md">
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Blockchain Based land registry</h2>
          <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6"> Provides you with a distributed database where anyone can record and update information. Buying and selling land is also made hassle free.</p>
          <ul>
            {/* <li className="flex items-center py-2 space-x-4 xl:py-3">
            <FontAwesomeIcon icon={faTrophy}/>
              <span className="font-medium text-gray-500">Faster Processing and Delivery</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <FontAwesomeIcon icon={faCheckCircle}/>
              <span className="font-medium text-gray-500">Out of the Box Tracking and Monitoring</span>
            </li> */}
            <li className="flex items-center py-2 space-x-4 xl:py-3">
              <a href="https://github.com/emharsha1812/Land-Registry-Hackathon">
              <span className="text-4xl text-gray-500"><FontAwesomeIcon icon={faGithub}/></span>
              </a>
              <a href="https://youtu.be/JQ3r7AtLHuM">
              <span className="text-4xl text-gray-500"><FontAwesomeIcon icon={faLink}/></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
        <img className="mx-auto sm:max-w-sm lg:max-w-full" src="images/land_registry.png" alt="feature image" />
        </div>
    </div>
  </div>
</section>
<section className="py-20 ">
  <div className="container items-center max-w-6xl  px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
    <div className="flex flex-wrap items-center -mx-3">
      <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
        <div className="w-full lg:max-w-md">
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Sumowars Bot</h2>
          <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">In this robotics competition, two robots compete against each other in a circular ring,
           trying to push their opponent out of the ring or immobilize them. The bot was completely built from scrap and weighed around 4.5 Kgs</p>
          <ul>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <FontAwesomeIcon icon={faTrophy}/>
              <span className="font-medium text-gray-500">Winner, Xpecto IIT Mandi</span>
            </li>
            
            {/* <li className="flex items-center py-2 space-x-4 xl:py-3">
            <FontAwesomeIcon icon={faCheckCircle}/>
              <span className="font-medium text-gray-500">Out of the Box Tracking and Monitoring</span>
            </li> */}
            <li className="flex items-center py-2 space-x-4 xl:py-3">
              {/* <a href="http://github.com">
              <span className="text-4xl text-gray-500"><FontAwesomeIcon icon={faGithub}/></span>
              </a> */}
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7038953752636080129/">
              <span className="text-4xl text-gray-500"><FontAwesomeIcon icon={faLinkedin}/></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
        <img className="mx-auto sm:max-w-sm lg:max-w-full" src="images/iitmandi.jpg" alt="feature image" />
        </div>
    </div>
  </div>
</section>
<section className="py-20 ">
  <div className="container items-center max-w-6xl  px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
    <div className="flex flex-wrap items-center -mx-3">
      <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
        <div className="w-full lg:max-w-md">
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">NRF based Pick n Place Bot</h2>
          <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">The NRF module is commonly used in 
          Internet of Things (IoT) applications, This allows for wireless communication using the NRF protocol.
           It is known for its low power consumption and long-range capabilities.</p>
          <ul>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <FontAwesomeIcon icon={faCheckCircle}/>
              <span className="font-medium text-gray-500">Top 20 teams Techkriti, IIT Kanpur (2023)</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <FontAwesomeIcon icon={faCheckCircle}/>
              <span className="font-medium text-gray-500">Completely coded from scratch, first of its kind bot, 
               completely controlled by radio frequency</span>
            </li>
            {/* <li className="flex items-center py-2 space-x-4 xl:py-3">
            <FontAwesomeIcon icon={faCheckCircle}/>
              <span className="font-medium text-gray-500">Out of the Box Tracking and Monitoring</span>
            </li> */}
            <li className="flex items-center py-2 space-x-4 xl:py-3">
              {/* <a href="http://github.com">
              <span className="text-4xl text-gray-500"><FontAwesomeIcon icon={faGithub}/></span>
              </a> */}
              <a href="https://drive.google.com/file/d/1w66I-JvKOvl4BVrUh3zbe_iNXincLrgA/view?usp=drive_link">
              <span className="text-4xl text-gray-500"><FontAwesomeIcon icon={faLink}/></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
        <img className="mx-auto sm:max-w-sm lg:max-w-full" src="images/Techkriti.jpg" alt="feature image" />
        </div>
    </div>
  </div>
</section>
<section className="py-20 ">
  <div className="container items-center max-w-6xl  px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
    <div className="flex flex-wrap items-center -mx-3">
      <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
        <div className="w-full lg:max-w-md">
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Portfolio Website</h2>
          <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">A database of one's projects, works, skills and achievements. Also seves as a medium of communicating with clients</p>
          <ul>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <FontAwesomeIcon icon={faCheckCircle}/>
              <span className="font-medium text-gray-500">Made with Next.js with Tailwind css and DaisyUI</span>
            </li>
            {/* <li className="flex items-center py-2 space-x-4 xl:py-3">
            <FontAwesomeIcon icon={faCheckCircle}/>
              <span className="font-medium text-gray-500">Out of the Box Tracking and Monitoring</span>
            </li> */}
            <li className="flex items-center py-2 space-x-4 xl:py-3">
              {/* <a href="http://github.com">
              <span className="text-4xl text-gray-500"><FontAwesomeIcon icon={faGithub}/></span>
              </a> */}
              <a href="http://manansharma.netlify.app">
              <span className="text-4xl text-gray-500"><FontAwesomeIcon icon={faLink}/></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
        <img className="mx-auto sm:max-w-sm lg:max-w-full" src="images/portfolio.png" alt="feature image" />
        </div>
    </div>
  </div>
</section>
<section className="py-20 ">
  <div className="container items-center max-w-6xl  px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
    <div className="flex flex-wrap items-center -mx-3">
      <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
        <div className="w-full lg:max-w-md">
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Roboweek Website</h2>
          <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">Made a website on react for conduction of Roboweek, a national level event.</p>
          <ul>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <FontAwesomeIcon icon={faCheckCircle}/>
              <span className="font-medium text-gray-500">Made on React.js with live traffic monitoring</span>
            </li>
            {/* <li className="flex items-center py-2 space-x-4 xl:py-3">
            <FontAwesomeIcon icon={faCheckCircle}/>
              <span className="font-medium text-gray-500">Out of the Box Tracking and Monitoring</span>
            </li> */}
            <li className="flex items-center py-2 space-x-4 xl:py-3">
              {/* <a href="http://github.com">
              <span className="text-4xl text-gray-500"><FontAwesomeIcon icon={faGithub}/></span>
              </a> */}
              <a href="https://roboweek-robosocnith.com/">
              <span className="text-4xl text-gray-500"><FontAwesomeIcon icon={faLink}/></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
        <img className="mx-auto sm:max-w-sm lg:max-w-full" src="images/Roboweek.png" alt="feature image" />
        </div>
    </div>
  </div>
</section>

<section className="py-20 ">
  <div className="container items-center max-w-6xl  px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
    <div className="flex flex-wrap items-center -mx-3">
      <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
        <div className="w-full lg:max-w-md">
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Blogging app</h2>
          <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">Made a website on react for writing personal bloggs.</p>
          <ul>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <FontAwesomeIcon icon={faCheckCircle}/>
              <span className="font-medium text-gray-500">Made on React.js with three.js integrations</span>
            </li>
            {/* <li className="flex items-center py-2 space-x-4 xl:py-3">
            <FontAwesomeIcon icon={faCheckCircle}/>
              <span className="font-medium text-gray-500">Out of the Box Tracking and Monitoring</span>
            </li> */}
            <li className="flex items-center py-2 space-x-4 xl:py-3">
              {/* <a href="http://github.com">
              <span className="text-4xl text-gray-500"><FontAwesomeIcon icon={faGithub}/></span>
              </a> */}
              <a href="https://monsterblog.netlify.app/">
              <span className="text-4xl text-gray-500"><FontAwesomeIcon icon={faLink}/></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
        <img className="mx-auto sm:max-w-sm lg:max-w-full" src="images/monsterblog.png" alt="feature image" />
        </div>
    </div>
  </div>
</section>

<section className="py-20 ">
  <div className="container items-center max-w-6xl  px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
    <div className="flex flex-wrap items-center -mx-3">
      <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
        <div className="w-full lg:max-w-md">
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Portfolio 1.0</h2>
          <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">This used to be my previous portfolio application.</p>
          <ul>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <FontAwesomeIcon icon={faCheckCircle}/>
              <span className="font-medium text-gray-500">Made on React.js</span>
            </li>
            {/* <li className="flex items-center py-2 space-x-4 xl:py-3">
            <FontAwesomeIcon icon={faCheckCircle}/>
              <span className="font-medium text-gray-500">Out of the Box Tracking and Monitoring</span>
            </li> */}
            <li className="flex items-center py-2 space-x-4 xl:py-3">
              {/* <a href="http://github.com">
              <span className="text-4xl text-gray-500"><FontAwesomeIcon icon={faGithub}/></span>
              </a> */}
              <a href="https://alsomanan.netlify.app/">
              <span className="text-4xl text-gray-500"><FontAwesomeIcon icon={faLink}/></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
        <img className="mx-auto sm:max-w-sm lg:max-w-full" src="images/alsomanan.png" alt="feature image" />
        </div>
    </div>
  </div>
</section>


        </div>
      </div>
    </main>
    <Footer />
</>
  );
};
export default contact;
