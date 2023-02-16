import Head from 'next/head'
import Image from "next/image";
function Contact() {
    return ( 
        <>
          <Head>
            <title>Blessing Peters | Contact</title>
            <meta name="description" content="Portfolio website for Blessing Peters" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {/* <section className="px-6 sm:px-10 md:px-24 lg:px-28 text-center py-28 md:pb-28 md:pt-12 bg-opacity-10 section bg-custom-orange contact-container css-p5e8t e1521u8k0">
        <h2 className="mb-3.5 text-gray-600 tracking-wide uppercase font-semibold text-base">
        Get in touch
        </h2>
        <h4 className="mb-7 text-2xl sm:text-3xl md:text-4xl tracking-wide font-semibold text-custom-purple">
          Want to work with me?
        </h4>
        <article className="py-6 my-8 md:grid md:grid-cols-2 gap-x-8">
          <article className="self-center w-3/4 mx-auto mb-4 md:mb-0 md:mx-0 md:w-full css-keakeu e1nqwh8g0">
            <Image
              width={500}
              height={500}
              alt="hero illustration"
              src="/assets/blessing.jpeg"
              decoding="async"
              data-nimg="intrinsic"
              loading="lazy"
            />
          </article>
          <article className="self-center text-center md:text-left">
            <p className="mb-3 text-base md:leading-7 md:text-lg text-custom-purple">
              I’m  currently open to new opportunities and requests – freelance or collaborations .


              <br />
            </p>
            <p className="mb-5 text-base md:leading-7 md:text-lg text-custom-purple">
              However, If you have any question, or just want to say hi, i’ll do my best to get back to you!.
            </p>
            <a href="mailto:cherubpeters.com">
              <button
                type="button"
                className="border border-solid font-semibold bg-transparent cursor-pointer rounded-sm px-5 py-3.5 text-custom-purple border-custom-purple hover:text-indigo-900 hover:border-indigo-900 undefined"
                aria-label="Get in touch"
              >
                Say Hello
              </button>
            </a>
          </article>
        </article>
          </section> */}
        </>
    
    );
}

export default Contact;