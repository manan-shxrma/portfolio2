import Navigation from "../navigation/index";
import Image from "next/image";
// import mypic from "images/avatar.jpg";
import Lottie from "react-lottie-player";
import moviescards from "../lotties/moviescards.json";
import quoraanim from "../lotties/108930-abstract-pendulum.json"
import juggleanim from "../lotties/juggling.json"
import social from "../lotties/socialmedia.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faQuora } from "@fortawesome/free-brands-svg-icons";
import { faGlobe} from "@fortawesome/free-solid-svg-icons";
import { faFootball} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faPinterest} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <main className="dark:bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 font-mono bg-white relative ">
      <Navigation />
      <div className=" relative z-20 ">
        <div className="container  relative py-4">
        <h2 className="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
          About Me
          </h2>
          {/* <div className="avatar py-6 grid justify-items-center md:flex-col">
            <div className="w-24 mask mask-squircle">
              <Image
                src={mypic}
                alt="Picture of the author"
                width="350px"
                height="350px"
              />
            </div>
          </div> */}

          <section className="px-2  ">
            <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
              <div className="flex flex-wrap items-center sm:-mx-3">
                <div className="w-full md:w-1/2 md:px-3">
                  <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                    <h1 className="text-4xl font-extrabold justify-center tracking-tight text-gray-500 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                      <span className="justify-center xl:inline">
                        My work dwells  on{" "}
                      </span><a href="https://github.com/manan-shxrma" >
                      <span className="block text-blue-900 xl:inline">
                        Github <FontAwesomeIcon icon={faGithub} />
                      </span></a> 
                    </h1>
                    <div className="stats shadow md:ml-[0%] ml-[22%]">
                      <div className="stats stats-vertical lg:stats-horizontal shadow">
                        <div className="stat">
                          <div className="stat-title">Repositories</div>
                          <div className="stat-value">30+</div>
                          <div className="stat-desc">3 active</div>
                        </div>

                        <div className="stat">
                          <div className="stat-title">Total Commits</div>
                          <div className="stat-value">800+</div>
                          <div className="stat-desc">↗︎ 27 PR's</div>
                        </div>

                        <div className="stat">
                          <div className="stat-title">Longest streak</div>
                          <div className="stat-value">11</div>
                          <div className="stat-desc">Jan 28- Feb 7 (2022)</div>
                        </div>
                      </div>
                    </div>


                    
                  </div>
                </div>
                <div className="w-full md:w-1/2 ">
                  
                  <Lottie 
                    className="ml-[4%] md:ml-[30%] md:[width:400] md:[height:400] sm:visible"
                    loop
                    animationData={moviescards}
                    play
                  />
                </div>
              </div>
            </div>
          </section>


          <section className="px-2  pt-16">
            <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
              <div className="flex flex-wrap items-center sm:-mx-3">
                <div className="w-full md:w-1/2 md:px-3">
                  <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-500 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                      <span className="block xl:inline">
                        Blogger and contributor at{" "}
                      </span><a href="https://www.quora.com/profile/Manan-Sharma-252" >
                      <span className="block text-red-900 xl:inline">
                        Quora <FontAwesomeIcon icon={faQuora} />
                      </span></a> 
                    </h1>
                    <div className="stats shadow md:ml-[0%] ml-[24%]">
                      <div className="stats stats-vertical lg:stats-horizontal shadow">
                        <div className="stat">
                          <div className="stat-title">Answers</div>
                          <div className="stat-value">20+</div>
                          <div className="stat-desc">3 posts</div>
                        </div>

                        <div className="stat">
                          <div className="stat-title">Content Views</div>
                          <div className="stat-value">400k</div>
                          <div className="stat-desc">↗︎ 65k max streak</div>
                        </div>

                        <div className="stat">
                          <div className="stat-title">Spaces</div>
                          <div className="stat-value">1</div>
                          <div className="stat-desc">46 followers</div>
                        </div>
                      </div>
                    </div>


                    
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  {/* <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
            <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" />
          </div> */}
                  <Lottie
                    className=" md:ml-[30%] md:[width:400] md:[height:400]"
                    loop
                    animationData={quoraanim}
                    play
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="px-2  pt-16">
            <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
              <div className="flex flex-wrap items-center sm:-mx-3">
                <div className="w-full md:w-1/2 md:px-3">
                  <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-500 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                      <span className="block xl:inline">
                        A not so professional {" "}
                      </span>
                      <span className="block text-blue-200 xl:inline">
                        Footballer <FontAwesomeIcon icon={faFootball}/>
                      </span>
                    </h1>
                    <div className="stats shadow md:ml-[0%] ml-[28%]">
                      <div className="stats stats-vertical lg:stats-horizontal shadow">
                        <div className="stat">
                          <div className="stat-title">Leagues</div>
                          <div className="stat-value">4</div>
                          <div className="stat-desc">1 major</div>
                        </div>

                        <div className="stat">
                          <div className="stat-title">Position</div>
                          <div className="stat-value">DM</div>
                          <div className="stat-desc">alter CB, AM</div>
                        </div>

                        <div className="stat">
                          <div className="stat-title">Kit number</div>
                          <div className="stat-value">5</div>
                          <div className="stat-desc">Visca el Barça</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  {/* <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
            <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" />
          </div> */}
                  <Lottie
                    className=" md:ml-[30%] md:[width:400] md:[height:400]"
                    loop
                    animationData={juggleanim}
                    play
                  />
                </div>
              </div>
            </div>
          </section>
          

          <section className="px-2  pt-16">
            <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
              <div className="flex flex-wrap items-center sm:-mx-3">
                <div className="w-full md:w-1/2 md:px-3">
                  <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-500 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                      <span className="block xl:inline">
                        Check out my  {" "}
                      </span>
                      <span className="block text-pink-300 xl:inline">
                        Socials <FontAwesomeIcon icon={faGlobe}/>
                      </span>
                    </h1>
                    <div className="stats shadow md:ml-[0%] ml-[38%]">
                      <div className="stats stats-vertical lg:stats-horizontal shadow">
                        <div className="stat">
                         <a href="https://www.linkedin.com/in/manansharmaa">
                          <div className="stat-value"><FontAwesomeIcon icon={faLinkedin}/></div>
                         </a>
                        </div>

                        <div className="stat">
                          <a href="https://www.instagram.com/frail.brain/">
                          <div className="stat-value"><FontAwesomeIcon icon={faInstagram}/></div>
                         </a>
                        </div>

                        <div className="stat">
                         <a href="https://in.pinterest.com/manansharmams3/">
                          <div className="stat-value"><FontAwesomeIcon icon={faPinterest}/></div>
                         </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  {/* <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
            <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" />
          </div> */}
                  <Lottie
                    className=" md:ml-[30%] md:[width:100] md:[height:20rem]"
                    loop
                    animationData={social}
                    play
                  />
                </div>
              </div>
            </div>
          </section>




        </div>
      </div>
    </main>
  );
};
export default About;
