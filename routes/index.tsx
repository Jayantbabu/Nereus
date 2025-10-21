import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>NEREUS | A Biointelligence Company</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main class="h-screen relative">
        {/* Background Split */}
        <div class="absolute inset-0 flex">
          <div class="w-[55%] bg-black"></div>
          <div class="w-[45%] bg-white"></div>
        </div>

        {/* Content Layer */}
        <div class="relative h-full">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Logo"
            class="absolute top-8 left-8 w-8 h-8 object-contain"
          />
          
          {/* Left Content */}
          <div class="absolute bottom-64 right-8 left-8 text-white z-10">
              <h1
                class="font-[agressive] mb-2 leading-none"
                style={{ fontSize: "clamp(0.8rem, 8vw, 5rem)" }}
              >
                NEREUS
              </h1>
              <p
                class="tracking-wider font-[agressive]"
                style={{ fontSize: "clamp(0.4rem, 2.5vw, 2rem)" }}
              >
                A BIOINTELLIGENCE COMPANY
              </p>
          </div>

          {/* Bio Sphere */}
          <img
          src="/sphere.png"
          alt="Bio Sphere"
          class="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                 w-[clamp(180px,36vw,580px)] z-0"
          />
          
          {/* Top Right Heading */}
          <div class="absolute top-24 right-8 text-black">
              <h2
                class="font-[agressive] leading-tight"
                style={{ fontSize: "clamp(1.5rem, 4vw, 2.75rem)" }}
              >
                BUILT FOR ONE. YOU.
              </h2>
          </div>

          {/* Middle Right Section */}
          <div class="absolute top-64 right-8 text-right text-black">
              <p
                class="font-[agressive]"
                style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)" }}
              >
                EVERY HUMAN CARRIES<br />A UNIQUE BIOLOGY.
              </p>
          </div>

          {/* Bottom Right Content */}
          <div class="absolute bottom-16 right-8 text-right text-black">
              <p
                class="font-[agressive] leading-relaxed"
                style={{ fontSize: "clamp(0.5rem, 2vw, 1.25rem)" }}
              >
                WE INVENT TECHNOLOGY TO REVEAL IT,<br />
                WHO YOU'RE BUILT TO BE,<br />
                AND THE CAPACITY YOU'RE CAPABLE OF.
              </p>
          </div>
        </div>
      </main>
    </>
  );
}