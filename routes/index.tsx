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
        </div>
      </main>
    </>
  );
}
