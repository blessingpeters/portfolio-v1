import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blessing Peters</title>
        <meta
          name="description"
          content="Portfolio website for Blessing Peters"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
      <header className="px-6 sm:px-10 md:px-24 lg:px-28 md:py-24">
        <article className="md:grid md:gap-8 md:grid-cols-2 grid">
          <article className="self-center text-center md:text-left md:-mt-6 row-start-2 md:row-start-1 md:col-start-1 md:my-4">
            <h2 className="my-3.5 text-gray-600 tracking-wide font-semibold text-base">
              Hello, I’m Blessing Peters
            </h2>
            <h1 className="my-6 text-4xl md:text-5xl lg:text-6xl md:leading-tight">
              Frontend Developer
            </h1>
            <p className="font-semibold my-6">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
            <a href="agro.com" className="text-yellow-600 flex md:justify-start justify-center mb-6">
              <Image
                className="mr-1"
                width={30}
                height={30}
                src="/assets/Download.svg"
                alt="download icon"
              />
              <span className="text-2xl">Resume</span>
            </a>
          </article>

          <article className="self-center w-3/4 mx-auto sm:mt-4 md:mx-0 md:w-full">
            <Image
              className="rounded-full"
              width={500}
              height={500}
              src="/assets/blessing.jpeg"
              alt="image of Blessing peter"
              priority
            />
          </article>
        </article>
      </header>

      <section
        id="about"
        className="px-6 sm:px-10 lg:px-28 lg:py-14 pt-24 text-center md:pt-14"
      >
        <h2 className="mb-3.5 text-gray-600 tracking-wide uppercase font-semibold text-base">
          About Me
        </h2>
        <h4 className="mb-7 text-gray-800 text-2xl sm:text-3xl md:text-4xl tracking-wide font-semibold">
          Me, Myself & I
        </h4>

        <article className="pt-6 my-8 md:grid md:grid-cols-2 gap-x-8">
          <article className="self-center w-3/4 mx-auto mb-5 md:mb-0 md:mx-0 md:w-full">
            <Image
              width={500}
              height={500}
              src="/assets/blessing.jpeg"
              alt="about illustration"
              priority
            />
          </article>
          <article className="self-center text-left md:-mt-6">
            <p className="mb-4">
              I am a Front-end Developer currently located in Nigeria. I am
              fascinated with building user interfaces and creating intuitive,
              dynamic user experiences. I am interested in the front-end
              spectrum and working on projects with like-minded individuals.
            </p>
            <p>
              I have a keen eye for detail and I am motivated to use technology
              to produce effective and user-friendly solutions. I am eager to
              acquire new technologies and programming concepts that will help
              me sharpen my abilities as a developer, expand my knowledge and
              efficiency, and improve the quality of my projects. I also love
              new experiences and I am passionate about all that coding and tech
              in general.
            </p>
            <Link href="/contact">
              <Button text="Lets make something special" />
            </Link>
          </article>
        </article>
      </section>

      <section id="stack" className="px-6 sm:px-10 lg:px-0 py-10 text-center">
        <h2 className="mb-3.5 text-gray-600 tracking-wide uppercase font-semibold text-base">
          Skills
        </h2>
        {/* <h4 className="mb-7 text-gray-800 text-2xl sm:text-3xl md:text-4xl tracking-wide font-semibold">
        I have experience working with the following technologies
        </h4> */}

        <ul className="flex flex-wrap items-center justify-center">
          <li className="px-4 py-2 m-3 text-xs font-semibold rounded-md bg-[#FFF4D2] text-yellow-800 md:px-8 md:py-4 md:m-4 md:text-sm">
            HTML
          </li>

          <li className="px-4 py-2 m-3 text-xs font-semibold rounded-md bg-[#FFF4D2] text-yellow-800 md:px-8 md:py-4 md:m-4 md:text-sm">
            JavaScript
          </li>
          <li className="px-4 py-2 m-3 text-xs font-semibold  rounded-md bg-[#FFF4D2] text-yellow-800 md:px-8 md:py-4 md:m-4 md:text-sm">
            TypeScript
          </li>
          <li className="px-4 py-2 m-3 text-xs font-semibold rounded-md bg-[#FFF4D2] text-yellow-800 md:py-4 md:m-4 md:text-sm">
            React JS
          </li>

          <li className="px-4 py-2 m-3 text-xs font-semibold rounded-md  bg-[#FFF4D2] text-yellow-800 md:py-4 md:m-4 md:text-sm">
            Firebase
          </li>

          <li className="px-4 py-2 m-3 text-xs font-semibold  rounded-md bg-[#FFF4D2] text-yellow-800 md:py-4 md:m-4 md:text-sm">
            Netlify
          </li>
          <li className="px-4 py-2 m-3 text-xs font-semibold  rounded-md bg-[#FFF4D2] text-yellow-800 md:px-8 md:py-4 md:m-4 md:text-sm">
            Tailwind CSS
          </li>
          <li className="px-4 py-2 m-3 text-xs font-semibold  rounded-md bg-[#FFF4D2] text-yellow-800 md:px-8 md:py-4 md:m-4 md:text-sm">
            Next JS
          </li>
          <li className="px-4 py-2 m-3 text-xs font-semibold rounded-md bg-[#FFF4D2] text-yellow-800 md:px-8 md:py-4 md:m-4 md:text-sm">
            Git
          </li>
        </ul>
      </section>
      <section id="project" className="px-6 sm:px-10 md:px-24 lg:px-28 py-10">
        <h2 className="mb-3.5 text-gray-600 tracking-wide uppercase font-semibold text-base">
          Projects
        </h2>
        <h4 className="mb-7 text-gray-800 text-2xl sm:text-3xl md:text-4xl tracking-wide font-semibold">
          Featured Projects.
        </h4>
        <div className="grid grid-cols-1 mb-10 md:mb-6 gap-y-4 md:gap-y-16 gap-x-8 md:grid-cols-5">
          <a
            href="https://247comcare.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:-translate-y-1.5 flex rounded-lg md:mb-16 md:col-start-1 md:col-end-4"
          >
            <Image
              width={600}
              height={500}
              alt="image of 247comcare landing page"
              src="/assets/247comcare.png"
              priority
            />
          </a>
          <div className="md:col-start-4 md:col-end-6">
            <a
              href="https://247comcare.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 no-underline hover:underline"
            >
              <h4 className="mb-2 text-lg font-semibold text-gray-800 uppercase sm:text-xl md:text-2xl">
                247COMCARE
              </h4>
            </a>
            <p className="mb-4 text-base leading-6 text-gray-700">
              247 Comcare provides customized customer service and back office
              for industry leading startups and modern companies.
            </p>
            <div className="flex flex-wrap items-center justify-start mb-4 text-gray-500">
              <span className="mr-4 text-sm">React JS</span>
              <span className="mr-4 text-sm">Tailwind CSS</span>
            </div>
            <a href="https://github.com/ble-syn/247comcare">
              <Button text="View on Github" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 mb-10 md:mb-6 gap-y-4 md:gap-y-16 gap-x-8 md:grid-cols-5">
          <a
            href="https://altschool-project-board.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:-translate-y-1.5 flex rounded-lg md:mb-16 md:col-start-1 md:col-end-4 css-qnqp8n e1uzzknm0"
          >
            <Image
              width={600}
              height={500}
              alt="image of altschool landing page"
              src="/assets/altschool-project-board.png"
              priority
            />
          </a>
          <div className="md:col-start-4 md:col-end-6">
            <a
              href="http://altschool-project-board.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 no-underline hover:underline"
            >
              <h4 className="mb-2 text-lg font-semibold text-gray-800 uppercase sm:text-xl md:text-2xl">
                AltSchool Project Board
              </h4>
            </a>
            <p className="mb-4 text-base leading-6 text-gray-700">
              Altschool Project Board ia a web application that helps students
              of Altschool Africa upload and showcase their various projects and
              also safekeep it for their future reference.
            </p>
            <div className="flex flex-wrap items-center justify-start mb-4 text-gray-500">
              <span className="mr-4 text-sm">React JS</span>
              <span className="mr-4 text-sm">FireBase</span>
              <span className="mr-4 text-sm">Vercel</span>
            </div>
            <a href="https://github.com/ble-syn/Altschool-Project-Board">
              <Button text="View on Github" />
            </a>
          </div>
        </div>
        <Link href="/project">
          <button
            type="button"
            className="border-none bg-[#FFF4D2] text-yellow-800 font-semibold cursor-pointer text-xs sm:text-sm rounded-sm px-3 py-2 sm:px-4 sm:py-3 text-custom-purple hover:bg-[#f4e6bc] flex mt-4 mb-12 ml-auto"
            aria-label="View All Projects"
          >
            View All Projects
          </button>
        </Link>
      </section>

      {/* <section className="px-6 sm:px-10 md:px-24 lg:px-28 text-center py-28 md:pb-28 md:pt-12 bg-opacity-10 section bg-custom-orange contact-container css-p5e8t e1521u8k0">
        <h2 className="mb-3.5 text-gray-600 tracking-wide uppercase font-semibold text-base">
          Contact
        </h2>
        <h4 className="mb-7 text-2xl sm:text-3xl md:text-4xl tracking-wide font-semibold text-custom-purple">
          Are you ready to work with me?
        </h4>
        <article className="py-6 my-8 md:grid md:grid-cols-2 gap-x-8">
          <article className="self-center w-3/4 mx-auto mb-4 md:mb-0 md:mx-0 md:w-full">
            <Image
              width={500}
              height={500}
              alt="hero illustration"
              src="/assets/blessing.jpeg"
              priority
            />
          </article>
          <article className="self-center text-center md:text-left">
            <p className="mb-3 text-base md:leading-7 md:text-lg text-custom-purple">
              Im open to new opportunities and requests.
              <br />
            </p>
            <p className="mb-5 text-base md:leading-7 md:text-lg text-custom-purple">
              If you have a question, or just want to say hi,try my best to get
              back to you.
            </p>
            <a href="mailto:cherubpeters@gmail.com">
              <button
                type="button"
                className="border border-solid font-semibold bg-transparent cursor-pointer rounded-sm px-5 py-3.5 text-custom-purple border-custom-purple hover:text-indigo-900 hover:border-indigo-900 undefined"
                aria-label="Get in touch"
              >
                Get in touch
              </button>
            </a>
          </article>
        </article>
      </section> */}
      </main>
    </>
  );
}
