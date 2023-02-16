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

          
        <section className="px-6 sm:px-10 md:px-24 lg:px-28 text-center md:pb-28 md:pt-12">
        <h2 className="mb-3.5 text-gray-600 tracking-wide uppercase font-semibold text-base">
        Get in touch
        </h2>
        <h4 className="mb-7 text-2xl text-gray-800 sm:text-3xl md:text-4xl tracking-wide font-semibold ">
          Want to work with me?
        </h4>
        <article className="py-6 my-8 md:grid md:grid-cols-2 gap-x-8">
          <article className="self-center w-3/4 mx-auto mb-4 md:mb-0 md:mx-0 md:w-full css-keakeu e1nqwh8g0">
            <Image
                className='rounded-full'
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
              I’m  currently open to new opportunities and requests – freelance work, collaborations and partnership opportunities .


              <br />
            </p>
            <p className="mb-5 text-base md:leading-7 md:text-lg text-custom-purple">
                If you have a good opportunity that matches my skills and experience, questions, 
                or just want to say hi, then don’t hesitate to contact me.
            
            </p>
            <a href="mailto:cherubpeters.com">
              <button
                type="button"
                className="border border-solid font-semibold bg-transparent cursor-pointer rounded-sm px-5 py-3.5  border-black hover:text-yellow-600 hover:border-yellow-600 undefined"
                aria-label="Get in touch"
              >
                Say Hello
              </button>
            </a>
          </article>
        </article>
          </section>
        </>
    
    );
}

export default Contact;