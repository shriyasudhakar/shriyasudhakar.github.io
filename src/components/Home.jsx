import React from 'react'
import image from "../../public/image.jpg"
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin, BiLogoMailchimp } from 'react-icons/bi'

const Home = () => {
  return (
    <div id='home' className='flex min-h-screen w-full items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-8 p-5 text-center'>
        <img src={image} alt="" className='w-[250px] sm:w-[300px] rounded-full'></img>

        <div className="space-y-1 sm:space-y-3">
          <h1 className='bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl'>Shriya Sudhakar</h1>
          <h3 className='bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-xl font-semibold text-transparent md:text-2xl lg:text-3xl'>Computer Science @ Cornell University</h3>
          <p className='max-w-[500px] text-center text-sm text-gray-500'>Lorem ipsum odor amet, consectetuer adipiscing elit. Pulvinar nostra tristique vivamus eros inceptos. Lectus aliquet platea dapibus cras varius sed.</p>
        </div>
        <div className="flex gap-3">
          <BiLogoGithub className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-indigo-600 hover:bg-white hover:text-indigo-600 md:h-12 md:w-12' />
          <BiLogoLinkedin className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-indigo-600 hover:bg-white hover:text-indigo-600 md:h-12 md:w-12' />
          <BiLogoGmail className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-indigo-600 hover:bg-white hover:text-indigo-600 md:h-12 md:w-12' />
        </div>
      </div>
    </div>
  )
}

export default Home