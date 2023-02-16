import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

function Navbar() {
    const [navOpen, setNavOpen] = useState(false);
    
    const openNav = ()=>{
        setNavOpen(!navOpen)
    }
    
  return (
    <> 
      <nav className="flex justify-between p-10 relative">
        <Link href="/" className="justify-start">
          <Image
            src="/logo.png"
            alt="blessing-peters-logo"
            width={120}
            height={40}
            priority
          />
        </Link>
        <div className="space-x-4 hidden p-0 m-0 mb-2 ml-8 md:flex">
          <Link href="/#about">About</Link>
          <Link href="/project">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
        {!navOpen && (
        <article onClick={openNav} className="relative flex-grow block pt-3 text-right md:hidden">
            <button className="inline-block w-6 bg-transparent border-none outline-none cursor-pointer md:hidden focus:outline-none">
                <span className="block w-full mb-1.5 border-t-2 border-solid leading-1 border-gray-700 rounded-lg"></span>
                <span className="block w-full mb-1.5 border-t-2 border-solid leading-1 border-gray-700 rounded-lg"></span>
                <span className="block w-full mb-1.5 border-t-2 border-solid leading-1 border-gray-700 rounded-lg"></span>
            </button>
        </article>
       
        )}
            {navOpen ? 
                <article className="flex-grow block pt-3 text-right md:hidden">
                    <button className="inline-block w-6 bg-transparent border-none outline-none cursor-pointer md:hidden focus:outline-none">
                        <span onClick={openNav} className="block text-3xl leading-3">×</span>
                    </button>
                    <div className="flex-col flex mobile-menu absolute right-6 top-24 w-11/12 text-white text-center bg-primary-darkViolet rounded-lg bg-white md:hidden true">
                        <Link className="p-2 mx-0 my-2 text-gray-800 font-bold no-underline cursor-pointer hover:underline" href="/about">About</Link>
                        <Link className="p-2 mx-0 my-2 text-gray-800 font-bold no-underline cursor-pointer hover:underline" href="/project">Projects</Link>
                        <Link className="p-2 mx-0 my-2 text-gray-800 font-bold no-underline cursor-pointer hover:underline" href="/contact">Contact</Link>
                    </div>
                </article>
             : null}
        </nav>
    </>
  );
}

export default Navbar;
