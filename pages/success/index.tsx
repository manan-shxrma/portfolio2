import Navigation from "../navigation/index";
import Lottie from "react-lottie-player";
import success from "../lotties/success.json";

const About = () => {
  return (
    

<section className="px-2 pt-32 dark:bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 font-mono  relative  h-screen">
    <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-left text-gray-500 sm:text-5xl md:text-6xl md:text-center">
            <span className="block">Success <span className="block mt-1 text-purple-500 lg:inline lg:mt-0">200</span></span>
        </h1>
        <p className="w-full mx-auto text-base text-left text-gray-500  sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
            I will try to reply asap!
        </p>
 <div className="w-full mt-10">
                  {/* <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
            <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" />
          </div> */}
                  <Lottie
                    className=" md:[width:100] md:[height:10rem]"
                    loop
                    animationData={success}
                    play
                  />
                </div>


        <div className="flex items-center justify-center mt-4">
        <a href="/" className="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent bg-gray-600 text-white hover:bg-gray-700 text-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                       Back to Home
                    </a>
                    </div>
    </div>
   
</section>

  );
};
export default About;
