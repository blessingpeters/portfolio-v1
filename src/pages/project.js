import Head from "next/head";
import Image from "next/image";
import Button from "@/components/Button";
import image1 from "public/assets/altschool-project-board.png";
import image2 from "public/assets/247comcare.png";
import image3 from "public/assets/mygithub.png";
import image4 from "public/assets/random-user-generator.png";
import image5 from "public/assets/ip-address-tracker.png";
import image6 from "public/assets/redactr.png";
import image7 from "public/assets/tip-calculator.png";
import image8 from "public/assets/calculator.png";
import image9 from "public/assets/advice-generator.png";

const details = [
  {
    image: image1,
    title: "AltSchool Project Board",
    description:
      "Web application that helps students of Altschool Africa upload and showcase their various projects and also safekeep it for their future reference.",
    tags: "React Js, FireBase",
    alt: "image of 247comcare landing page",
    link1: "http://altschool-project-board.vercel.app/",
    link2: "https://github.com/blessingpeters/altschool-project-board",
  },
  {
    image: image2,
    alt: "image of 247comcare landing page",
    title: "247 COMCARE",
    description: "247 Comcare is a solution that provides customized Customer Service for industry leading startups and modern companies.",
    tags: "React Js",
    link1: "http://247comcare.com/",
    link2: "https://github.com/blessingpeters/247comcare",
  },
  {
    image: image3,
    alt: "image of my github landing page",
    title: "MY GITHUB",
    description:
      "React application developed by implementing an API fetch of my GitHub Portfolio and Repository",
    link1: "https://my-github-ble-syn.vercel.app/",
    link2: "https://github.com/blessingpeters/myGithub",
  },
  {
    image: image4,
    alt: "image of random user generator landing page",
    title: "RANDOM USER GENERATOR",
    description:
      "React app that produces random users by retrieving user information from the randomuser.me API.",
    tags: "React Js",
    link1: "https://random-user-generator-app.blesyn.repl.co/",
    link2: "https://github.com/blessingpeters/Random-user-generator-app",
  },
  {
    image: image5,
    alt: "image of IP address tracker page",
    title: "IP ADDRESS TRACKER",
    description:
      "React app developed by implementing an API fetch of users Location, IP address, Time zone and ISP.",
    tags: "React Js",
    link1: "https://blesyn-ip-address-tracker.vercel.app/",
    link2: "https://github.com/blessingpeters/IP-address-tracker",
  },
  {
    image: image6,
    alt: "image of redactr landing page",
    title: "Redactr",
    description:
      " Redactr is an app that helps users safely share content on social media by scrambling portions of the text they don’t want the world to read/see.",
    tags: "Html, Css, JavaScript",
    link1: "https://redactrapp.netlify.app/index.html",
    link2: "https://github.com/blessingpeters/Redactr-Hackathon-Circle-70-",
  },
  {
    image: image7,
    alt: "image of tip calculator",
    title: "Tip Calculator App",
    description:
      "A single page application that helps calculate tips percentage based on the amount of items bought",
    tags: "Html, Css, JavaScript",
    link1: "https://blessingpeters.github.io/tip-calculator-app/",
    link2: "https://github.com/blessingpeters/tip-calculator-app",
  },
  {
    image: image8,
    alt: "image of react calculator page",
    title: "Calculator",
    description:
      "A React Calculator that performs basic mathematical operations",
    tags: "React Js",
    link1: "http://react-calculator-ble-syn.vercel.app/",
    link2: "https://github.com/blessingpeters/reactCalculator",
  },
  {
    image: image9,
    alt: "image of Advive generator",
    title: "Advive Generator",
    description:
      "Single Application that generates advice",
    tags: "Html, Css, JavaScript",
    link1: "https://blessingpeters.github.io/Advice-generator-app/",
    link2: "https://github.com/blessingpeters/Advice-generator-app",
  },
];

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
          {details.map((detail, i) => {
            return (
              <div
                key={i}
                className="col-span-1 mb-12 rounded-md sm:w-3/4 md:w-full shadow-card hover:-translate-y-1 shadow-md"
              >
                <a
                  href={detail.link1}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    width={500}
                    height={200}
                    alt={detail.alt}
                    src={detail.image}
                    className="rounded-tl-md object-cover object-top rounded-tr-md"
                    priority
                  />
                  <div className="p-5">
                    <h4 className="mb-2 text-base font-semibold text-gray-800 uppercase sm:text-lg">
                      {detail.title}
                    </h4>
                    <p className="mb-4 text-sm leading-5 text-gray-700">
                      {detail.description}
                    </p>
                    <div className="flex flex-wrap items-center justify-start mb-3 text-gray-500 stack">
                      <span className="mr-2 text-xs">{detail.tags}</span>
                    </div>
                  </div>
                </a>
                <div className="pl-6">
                <a href={detail.link2}>
                  <Button text="View on Github" />
                </a>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default Project;
