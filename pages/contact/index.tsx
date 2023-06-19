import Navigation from "../navigation/index";
import Footer from "../footer"
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
import { useRouter } from "next/router";
import {useState} from 'react'
init('9O87dvSsOBT1PIlo7');



const contact = () => {

  const router = useRouter()
    const [route, setRoute] = useState()
    
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data:any) => {
    // console.log(data);
   
    sendForm('portfolio_id', 'template_y0ztj5s', '#contact-form')
     .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
      router.push("/success");
  }



  return (<>
    <main className="dark:bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 font-mono h-screen md:overflow-hidden  relative">
      <Navigation />
      <div className="flex relative z-20 items-center">
        <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">

                  

<section className="w-full px-8 py-16  xl:px-8">
    <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center md:flex-row">

            <div className="w-full space-y-5 md:w-3/5 md:pr-16">
                
                <h2 className="text-2xl font-extrabold leading-none text-gray-500 dark:text-gray-400 sm:text-3xl md:text-5xl">
                    Let's have a coffee
                </h2>
                <p className="text-xl text-gray-500 dark:text-gray-300 md:pr-16">Having a question or project idea in mind? Or wish to collab? 
                Drop me a text and I will try to contact you as soon as possible.</p>
            </div>

            <div className="w-full mt-16 md:mt-0 md:w-2/5">
                <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-gray-700 border-b-2 border-gray-700 rounded-lg shadow-2xl px-7">
                    <h3 className="mb-6 text-2xl text-gray-400 font-medium text-center">What's the gossip?</h3>


                    <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" required className="block w-full px-4 py-3 mb-4 text-black border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="name" {...register("name")}  />
                    <input type="email" required className="block w-full px-4 py-3 mb-4 text-black  border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Email address" {...register("email")}  />
                    <textarea  className="block w-full px-4 py-3 mb-4  border-2 text-black  border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Your masterplan" maxLength={1500} {...register("message")} />
                    <div className="block">
                        <button id="letdo" type="submit" className="w-full px-3 py-4 font-medium  bg-gray-200 rounded-lg">Let's do it!</button>
                    </div>
                    </form>
                    
                </div>
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
