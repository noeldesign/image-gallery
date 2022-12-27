import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="main" className="w-full h-screen text-center text-white">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 uppercase">Home</h1>
          <p className="py-4 md:max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            quisquam explicabo nulla voluptate cupiditate doloremque eos est
            aliquid eius. Excepturi ipsa ea ipsum iste beatae placeat quam earum
            neque maxime!
          </p>
        </div>
      </div>
    </div>        
    </>
  )
}

export default Home