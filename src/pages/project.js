import Head from "next/head";
import Image from "next/image";
import Button from "@/components/Button";

function ProjectDetails({ image, title, desc, tags }) {
  return (
    <>
      {image}
      <div className="p-6 portfolio-content">
        <h4 className="mb-2 text-base font-semibold text-gray-800 uppercase sm:text-lg">
          {title}
        </h4>
        <p className="mb-4 text-sm leading-5 text-gray-700">{desc}</p>
        <div className="flex flex-wrap items-center justify-start mb-3 text-gray-500 stack">
          <span className="mr-2 text-xs">{tags}</span>
        </div>
      </div>
    </>
  );
}

function Project() {
  return (
    <>
      <Head>
        <title>Blessing Peters | About</title>
        <meta
          name="description"
          content="Portfolio website for Blessing Peters"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-6 sm:px-10 md:px-24 lg:px-28 pt-12 bg-slate-50">
        <h2 className="mb-7 text-gray-800 text-2xl sm:text-3xl md:text-4xl tracking-wide font-semibold">
          Projects
        </h2>

        <section className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className=" w-full col-span-1 mb-12 rounded-md sm:w-3/4 md:w-full shadow-card hover:-translate-y-0.5">
            <a
              href="http://altschool-project-board.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
              className=""
            >
              <ProjectDetails
                image={
                  <Image
                    width={500}
                    height={200}
                    alt="Project"
                    src="/assets/altschool-project-board.png"
                    className="rounded-tl-md object-cover object-top rounded-tr-md"
                    priority
                  />
                }
                title="AltSchool Project Board"
                desc=" Web application that helps students of Altschool Africa upload and showcase their various projects and also safekeep
                      it for their future reference."
                tags="React Js FireBase"
              />
            </a>
            <a href="https://github.com/ble-syn/Altschool-Project-Board">
              <Button text="View on Github" />
            </a>
          </div>

          <div className=" w-full col-span-1 mb-12 rounded-md sm:w-3/4 md:w-full shadow-card hover:-translate-y-0.5">
            <a
              href="http://altschool-project-board.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
              className=""
            >
              <ProjectDetails
                image={
                  <Image
                    width={500}
                    height={200}
                    alt="Project"
                    src="/assets/247comcare.png"
                    className="rounded-tl-md object-cover object-top rounded-tr-md"
                    priority
                  />
                }
                title="247Comcare"
                desc=" Web application that helps students of Altschool Africa upload and showcase their various projects and also safekeep
                  it for their future reference."
                tags="React Js FireBase"
              />
            </a>
            <a href="https://github.com/ble-syn/Altschool-Project-Board">
              <Button text="View on Github" />
            </a>
          </div>
          <div className=" w-full col-span-1 mb-12 rounded-md sm:w-3/4 md:w-full shadow-card hover:-translate-y-0.5">
            <a
              href="http://altschool-project-board.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
              className=""
            >
              <ProjectDetails
                image={
                  <Image
                    width={500}
                    height={200}
                    alt="Project"
                    src="/assets/mygithub.png"
                    className="rounded-tl-md object-cover object-top rounded-tr-md"
                    priority
                  />
                }
                title="My GitHub"
                desc=" Web application that helps students of Altschool Africa upload and showcase their various projects and also safekeep
                    it for their future reference."
                tags="React Js FireBase"
              />
            </a>
            <a href="https://github.com/ble-syn/Altschool-Project-Board">
              <Button text="View on Github" />
            </a>
          </div>
          <div className=" w-full col-span-1 mb-12 rounded-md sm:w-3/4 md:w-full shadow-card hover:-translate-y-0.5">
            <a
              href="http://altschool-project-board.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
              className=""
            >
              <ProjectDetails
                image={
                  <Image
                    width={500}
                    height={200}
                    alt="Project"
                    src="/assets/random-user-generator.png"
                    className="rounded-tl-md object-cover object-top rounded-tr-md"
                    priority
                  />
                }
                title="Random User Generator"
                desc=" Web application that helps students of Altschool Africa upload and showcase their various projects and also safekeep
                    it for their future reference."
                tags="React Js FireBase"
              />
            </a>
            <a href="https://github.com/ble-syn/Altschool-Project-Board">
              <Button text="View on Github" />
            </a>
          </div>
          <div className=" w-full col-span-1 mb-12 rounded-md sm:w-3/4 md:w-full shadow-card hover:-translate-y-0.5">
            <a
              href="http://altschool-project-board.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
              className=""
            >
              <ProjectDetails
                image={
                  <Image
                    width={500}
                    height={200}
                    alt="Project"
                    src="/assets/ip-address-tracker.png"
                    className="rounded-tl-md object-cover object-top rounded-tr-md"
                  />
                }
                title="IP Address Tracker"
                desc=" Web application that helps students of Altschool Africa upload and showcase their various projects and also safekeep
                    it for their future reference."
                tags="React Js FireBase"
              />
            </a>
            <a href="https://github.com/ble-syn/Altschool-Project-Board">
              <Button text="View on Github" />
            </a>
          </div>
          <div className=" w-full col-span-1 mb-12 rounded-md sm:w-3/4 md:w-full shadow-card hover:-translate-y-0.5">
            <a
              href="http://altschool-project-board.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
              className=""
            >
              <ProjectDetails
                image={
                  <Image
                    width={400}
                    height={100}
                    alt="Project"
                    src="/assets/redactr.png"
                    className="rounded-tl-md object-cover object-top rounded-tr-md"
                    priority
                  />
                }
                title="Redactr"
                desc=" Web application that helps students of Altschool Africa upload and showcase their various projects and also safekeep
                    it for their future reference."
                tags="React Js FireBase"
              />
            </a>
            <a href="https://github.com/ble-syn/Altschool-Project-Board">
              <Button text="View on Github" />
            </a>
          </div>
          <div className=" w-full col-span-1 mb-12 rounded-md sm:w-3/4 md:w-full shadow-card hover:-translate-y-0.5">
            <a
              href="http://altschool-project-board.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
              className=""
            >
              <ProjectDetails
                image={
                  <Image
                    width={400}
                    height={100}
                    alt="Project"
                    src="/assets/calculator.png"
                    className="rounded-tl-md object-cover object-top rounded-tr-md"
                    priority
                  />
                }
                title="Calculator"
                desc=" Web application that helps students of Altschool Africa upload and showcase their various projects and also safekeep
                    it for their future reference."
                tags="React Js FireBase"
              />
            </a>
            <a href="https://github.com/ble-syn/Altschool-Project-Board">
              <Button text="View on Github" />
            </a>
          </div>
          <div className=" w-full col-span-1 mb-12 rounded-md sm:w-3/4 md:w-full shadow-card hover:-translate-y-0.5">
            <a
              href="https://altschool-project-board.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
              className=""
            >
              <ProjectDetails
                image={
                  <Image
                    width={400}
                    height={100}
                    alt="Project"
                    src="/assets/advice-generator.png"
                    className="rounded-tl-md object-cover object-top rounded-tr-md"
                    priority
                  />
                }
                title="Advice Generator"
                desc=" Web application that helps students of Altschool Africa upload and showcase their various projects and also safekeep
                    it for their future reference."
                tags="React Js FireBase"
              />
            </a>
            <a href="https://github.com/ble-syn/Altschool-Project-Board">
              <Button text="View on Github" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Project;
