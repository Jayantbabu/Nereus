import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>NEREUS | A Biointelligence Company</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main class="h-screen relative overflow-hidden">
        {/* Background Split */}
        <div class="absolute inset-0 flex">
          <div class="w-[55%] sm:w-[50%] md:w-[55%] lg:w-[55%] xl:w-[55%] 2xl:w-[55%] bg-black"></div>
          <div class="w-[45%] sm:w-[50%] md:w-[45%] lg:w-[45%] xl:w-[45%] 2xl:w-[45%] bg-white"></div>
        </div>

        {/* Content Layer */}
        <div class="relative h-full">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Logo"
            class="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain z-20"
          />
          
          {/* Left Content - Black Background */}
          <div class="absolute bottom-16 sm:bottom-24 md:bottom-32 lg:bottom-40 xl:bottom-48 left-2 sm:left-4 md:left-6 lg:left-8 right-[55%] sm:right-[50%] md:right-[55%] lg:right-[55%] xl:right-[55%] 2xl:right-[55%] text-white z-10 px-2 sm:px-4">
            <h1 class="font-[agressive] mb-1 sm:mb-2 leading-none text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              NEREUS
            </h1>
            <p class="tracking-wider font-[agressive] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              A BIOINTELLIGENCE COMPANY
            </p>
          </div>

          {/* Bio Sphere */}
          <img
            src="/sphere.png"
            alt="Bio Sphere"
            class="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 md:w-64 lg:w-72 xl:w-80 2xl:w-96 z-0"
          />
          
          {/* Top Right Heading - White Background */}
          <div class="absolute top-12 sm:top-16 md:top-20 lg:top-24 left-[55%] sm:left-[50%] md:left-[55%] lg:left-[55%] xl:left-[55%] 2xl:left-[55%] right-2 sm:right-4 md:right-6 lg:right-8 text-black z-10 px-2 sm:px-4">
            <h2 class="font-[agressive] leading-tight text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              BUILT FOR ONE. YOU.
            </h2>
          </div>

          {/* Middle Right Section - White Background */}
          <div class="absolute top-32 sm:top-40 md:top-48 lg:top-56 xl:top-64 left-[55%] sm:left-[50%] md:left-[55%] lg:left-[55%] xl:left-[55%] 2xl:left-[55%] right-2 sm:right-4 md:right-6 lg:right-8 text-right text-black z-10 px-2 sm:px-4">
            <p class="font-[agressive] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              EVERY HUMAN CARRIES
              <br />A UNIQUE BIOLOGY.
            </p>
          </div>

          {/* Bottom Right Content - White Background */}
          <div class="absolute bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-16 xl:bottom-20 left-[55%] sm:left-[50%] md:left-[55%] lg:left-[55%] xl:left-[55%] 2xl:left-[55%] right-2 sm:right-4 md:right-6 lg:right-8 text-right text-black z-10 px-2 sm:px-4">
            <p class="font-[agressive] leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              WE INVENT TECHNOLOGY TO REVEAL IT,
              <br />
              WHO YOU'RE BUILT TO BE,
              <br />
              AND THE CAPACITY YOU'RE CAPABLE OF.
            </p>
          </div>

          <div class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center space-x-3 sm:space-x-4 z-20">

            <a href="https://www.instagram.com/nereustechnologies/" target="_blank" rel="noopener noreferrer" class="transition-transform hover:scale-110" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm5.75-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
              </svg>
            </a>

            <a href="https://www.linkedin.com/company/nereus-technologies-pvt-ltd/" target="_blank" rel="noopener noreferrer" class="transition-transform hover:scale-110" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                <path d="M4.98 3.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5zM3 8.75h3.96V21H3V8.75zM9.75 8.75h3.78v1.67h.05a4.14 4.14 0 0 1 3.73-2.05c3.99 0 4.73 2.62 4.73 6.03V21h-3.96v-5.77c0-1.38-.02-3.16-1.93-3.16-1.94 0-2.24 1.51-2.24 3.06V21H9.75V8.75z" />
              </svg>
            </a>

            <a href="mailto:info@nereustechnologies.com" class="transition-transform hover:scale-110" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                <path d="M2.25 4.5A2.25 2.25 0 0 1 4.5 2.25h15a2.25 2.25 0 0 1 2.25 2.25v15a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 19.5v-15zm2.25.75v.513l7.5 4.737 7.5-4.737V5.25H4.5zm15 1.987-7.147 4.512a.75.75 0 0 1-.706 0L4.5 7.237V18.75h15V7.237z" />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
