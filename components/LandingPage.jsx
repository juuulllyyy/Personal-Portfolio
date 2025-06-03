import React from "react";
import Image from "next/image";

const LandingPage = () => {
  return (
    <main className="scroll-smooth">
      <section
        id="landing"
        className="flex flex-row min-h-screen  bg-[#f9deb9] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,191,133,0.2),rgba(255,255,255,0))]"
      >
        {/* Left Section */}
        <div className="xl:block hidden ">
          <Image
            src="/images/fullPic.png"
            alt="Profile Picture"
            width={500}
            height={450}
            className="h-screen w-auto object-contain"
          />
        </div>
        {/* Right Section */}
        <div className="flex-1 flex-col w-auto">
          {/* Nav Bar */}
          <div className=" flex flex-col pl-30 pt-20">
            <Image
              src="/images/TVA logo.png"
              alt="TVA Logo"
              width={200}
              height={200}
              className="mb-2"
            />
            <div className="flex flex-row space-x-2 mb-1">
              <h1 className="text-xl md:text-3xl text-[#e03627] tracking-tighter">
                Greetings,
              </h1>
              <h1 className="text-xl md:text-3xl font-bold text-[#942021] tracking-tighter">
                I'm Jule Jerrish Quijano
              </h1>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-[#e03627] tracking-tighter">
              I'm a Software Developer
            </h1>

            <div className="border-t-2 border-[#e03627] w-180 mt-4 pt-4">
              <p className="text-base md:text-md text-[#942021]">
                I'm a BS in Computer Engineering graduate at Cebu Institute of
                Technology - University.
              </p>
              <p className="text-base md:text-md text-[#942021]">
                I'm a Frontend Developer who focuses on writing clean,
                maintainable code and building responsive, accessible websites.
              </p>
            </div>
            <nav className="mt-4">
              <ul className="flex flex-row space-x-4">
                <li>
                  <a
                    href="#about"
                    className="text-[#ff6508] hover:text-[#e03627] border-2 border-[#ff6508] hover:border-[#e03627] p-y-0.5 px-1 text-lg"
                  >
                    About me
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-[#ff6508] hover:text-[#e03627] border-2 border-[#ff6508] hover:border-[#e03627] p-y-0.5 px-1 text-lg"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex flex-row justify-between space-x-4">
              {/* Social Media Icons */}
              <div>
                <h1 className="text-xl md:text-3xl pt-15 font-bold text-[#e03627] tracking-tighter">
                  Contact this Variant
                </h1>
                <div className="flex flex-row space-x-4 mt-3">
                  <Image
                    src="/images/facebook.png"
                    alt="Facebook Icon"
                    width={30}
                    height={30}
                    className="transition duration-200 hover:brightness-75 hover:[#e03627]"
                  />
                  <Image
                    src="/images/instagram.png"
                    alt="Instagram Icon"
                    width={30}
                    height={30}
                    className="transition duration-200 hover:brightness-75 hover:[#e03627]"
                  />
                  <Image
                    src="/images/linkedin.png"
                    alt="Linkedin Icon"
                    width={30}
                    height={30}
                    className="transition duration-200 hover:brightness-75 hover:[#e03627]"
                  />
                  <Image
                    src="/images/github.png"
                    alt="Github Icon"
                    width={30}
                    height={30}
                    className="transition duration-200 hover:brightness-75 hover:[#e03627]"
                  />
                </div>
              </div>
              {/* Miss Minutes */}
              <Image
                src="/images/missMinutes.png"
                alt="Miss Minutes Icon"
                width={200}
                height={200}
                className="mr-30 scale-x-100 bounce-in-smooth"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
