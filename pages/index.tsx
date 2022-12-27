import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";
import {FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Main section */}
      <div id="main" className="h-screen w-full text-center text-white">
        <div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2">
          <div>
            <h1 className="py-4 uppercase">Home</h1>
            <p className="m-auto py-4 md:max-w-[70%]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              quisquam explicabo nulla voluptate cupiditate doloremque eos est
              aliquid eius. Excepturi ipsa ea ipsum iste beatae placeat quam
              earum neque maxime!
            </p>
          </div>
        </div>
      </div>

      {/* Albums section */}
      <div id="albums" className="w-full">
        <div className="mx-auto max-w-[1240px] px-2 py-16">
          <h2 className="p-5 text-center text-xl uppercase">Photo Albums</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Link href="/Gallery">
              <div className="flex h-auto w-full cursor-pointer items-center justify-center rounded-xl p-4 shadow-xl shadow-gray-400 duration-150 hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="rounded-xl"
                />
              </div>
            </Link>
            <Link href="/Gallery">
              <div className="flex h-auto w-full cursor-pointer items-center justify-center rounded-xl p-4 shadow-xl shadow-gray-400 duration-150 hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="rounded-xl"
                />
              </div>
            </Link>
            <Link href="/Gallery">
              <div className="flex h-auto w-full cursor-pointer items-center justify-center rounded-xl p-4 shadow-xl shadow-gray-400 duration-150 hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="rounded-xl"
                />
              </div>
            </Link>
            <Link href="/Gallery">
              <div className="flex h-auto w-full cursor-pointer items-center justify-center rounded-xl p-4 shadow-xl shadow-gray-400 duration-150 hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1599732494971-a6110ea1ad20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="rounded-xl"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div
        id="contact"
        className="h-80 w-full bg-[#282c34] text-center text-white"
      >
        <div className="m-auto flex max-w-[600px] flex-col">
          <div>
            <h2 className="py-20 uppercase">Connect with me</h2>
          </div>
          <div className="flex justify-evenly">
            <div className="cursor-pointer rounded-full bg-white p-5 duration-300 ease-in hover:scale-110">
              <a target="_blank" href="https://www.linkedin.com">
                <FaLinkedinIn className="text-[#0072b1]" />
              </a>
            </div>
            <div className="cursor-pointer rounded-full bg-white p-5 duration-300 ease-in hover:scale-110">
              <a target="_blank" href="https://www.facebook.com">
                <FaFacebookF className="text-[#0072b1]" />
              </a>
            </div>
            <div className="cursor-pointer rounded-full bg-white p-5 duration-300 ease-in hover:scale-110">
              <a target="_blank" href="https://www.instagram.com">
                <FaInstagram className="text-[#0072b1]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
