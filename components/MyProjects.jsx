"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const projects = [
  {
    title: "MONEYGER",
    subtitle: "CRM SYSTEM",
    description:
      "Moneyger is a Client Relationship Management (CRM) system designed to help businesses track, manage, and maintain client interactions, and finances. It monitors leads, logs interactions, and tracks invoices",
    image: "/images/projectsImages/moneyger.png",
    tools: [
      "/images/tech/js.png",
      "/images/tech/typescript.png",
      "/images/tech/c-sharp.png",
      "/images/tech/netcore.png",
    ],
  },
  {
    title: "SHRMP",
    subtitle: "THESIS",
    description:
      "Shrimp Habitat Regulation and Monitoring Platform (SHRMP) is a mobile-based application with an automated regulation system that regulates the temperature and salinity of the shrimp tank. It is designed to assist shrimp farmers in monitoring and regulating the habitat of their shrimp farms.",
    image: "/images/projectsImages/shrmp.png",
    tools: [
      "/images/tech/c-.png",
      "/images/tech/firebase.png",
      "/images/tech/typescript.png",
      "/images/tech/react.png",
    ],
  },
  {
    title: "KAZE NO TENSHI",
    subtitle: "PVP GAME",
    description:
      "Kaze no Tenshi is a 2D Web-based PvP game that allows players to engage in combat with each other. The game features a variety of characters and offers an immersive 2D gaming experience.",
    image: "/images/projectsImages/kazenotenshi.png",
    tools: [
      "/images/tech/c-sharp.png",
      "/images/tech/unity.png",
      "/images/tech/aseprite.png",
    ],
  },
  {
    title: "LA ACOUSTICA",
    subtitle: "POS SYSTEM",
    description:
      "La Acoustica is a Point of Sale (POS) system designed for a music store. It provides features for managing sales, inventory, and customer interactions, streamlining the sales process for the store.",
    image: "/images/projectsImages/laacoustica.png",
    tools: [
      "/images/tech/c-sharp.png",
      "/images/tech/netcore.png",
      "/images/tech/msaccess.png",
    ],
  },
  {
    title: "GASTWO",
    subtitle: "EXPENSE TRACKER",
    description:
      "GawTwo is a web-based expense tracker that helps users manage their finances by tracking their expenses and providing insights into their spending habits. It offers features for categorizing expenses, setting budgets, and generating reports.",
    image: "/images/projectsImages/gastwo.png",
    tools: [
      "/images/tech/c-sharp.png",
      "/images/tech/netcore.png",
      "/images/tech/razor.png",
    ],
  },
  {
    title: "CONSOLE'S TALE",
    subtitle: "CONSOLE GAME",
    description:
      "Console's Tale is a turn-based console game with RPG-style gameplay. It features random encounters and strategic battles as you progress through the story.",
    image: "/images/projectsImages/consolestale.png",
    tools: ["/images/tech/c-sharp.png", "/images/tech/netcore.png"],
  },
  // Add more projects as needed
];
const MyProjects = () => {
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    // Preload all project images
    projects.forEach((project) => {
      const img = new window.Image();
      img.src = project.image;
    });

    // Preload all tool images
    projects.forEach((project) => {
      project.tools?.forEach((tool) => {
        const img = new window.Image();
        img.src = tool;
      });
    });
  }, []);
  return (
    <section
      id="projects"
      className={`min-h-screen flex p-2 xl:p-6 pt-2  justify-between bg-black border-2 border-t-0 border-[#f8861e] w-full h-full space-x-5`}
    >
      <div
        className="flex flex-col bg-black border-4 border-[#f8861e] w-full"
        style={{
          backgroundImage: `
                    repeating-linear-gradient(0deg, rgba(255,191,133,0.1) 0, rgba(255,191,133,0.1) 1px, transparent 2px, transparent 32px),
                    repeating-linear-gradient(90deg, rgba(255,191,133,0.1) 0, rgba(255,191,133,0.1) 1px, transparent 2px, transparent 32px)
                  `,
        }}
      >
        <div className="flex items-center justify-center p-4 border-b-4 bg-[#f8861e] border-[#f8861e] m-6">
          <h1 className="xl:text-5xl text-3xl font-extrabold tracking-widest text-black">
            VARIANT PROJECTS
          </h1>
        </div>
        {/* Placeholder for projec picture */}
        <div className="flex xl:flex-row flex-col justify-between items h-full px-8 pb-8">
          <div className="flex flex-col justify-between items-center xl:w-50 w-full h-full mr-2">
            <div className="flex flex-col items-center pt-4 border-b-0 xl:border-b-4  border-4 w-full h-full border-[#f8861e]">
              <h1 className="xl:text-2xl text-xl font-bold text-[#f8861e] tracking-widest">
                TOOLS
              </h1>
              <div className="grid xl:grid-cols-2 grid-cols-4 xl:pt-5 py-3 justify-center gap-5 items-center">
                {projects[selected].tools?.map((tool, idx) => (
                  <div
                    key={idx}
                    className=" w-15 h-15 flex items-center justify-center"
                  >
                    <Image
                      src={tool}
                      alt={`Tool ${idx + 1}`}
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>
                )) || (
                  <div className="text-[#f8861e] text-center col-span-2">
                    No tools specified
                  </div>
                )}
              </div>
            </div>
            <div className="xl:grid xl:grid-cols-2 xl:mt-4 w-full h-40 text-[#f8861e] hidden">
              <a
                href="#landing"
                className="flex flex-col  items-center justify-center"
              >
                <Image
                  src="/images/phone.png"
                  alt="phone logo"
                  width={50}
                  height={50}
                  className="border-4"
                />
                <p>CONTACT</p>
              </a>
              <a
                href="#landing"
                className="flex flex-col items-center justify-center"
              >
                <Image
                  src="/images/profile.png"
                  alt="profile logo"
                  width={50}
                  height={50}
                  className="border-4"
                />
                <p>VARIANT</p>
              </a>
            </div>
            <Image
              src="/images/TVA Logo.png"
              alt="TVA Logo"
              width={200}
              height={100}
              className="border-4 hidden xl:block"
            />
          </div>
          {/* Placeholder for project picture */}
          <div className="flex flex-col border-4 border-[#f8861e] p-6 xl:w-150 h-full space-y-2">
            <h2 className="xl:text-3xl text-xl font-bold mb-4 text-[#f8861e] tracking-widest">
              {projects[selected].title},{" "}
              <span className="p-1 pb-0 xl:text-xl text-sm font-semibold text-black bg-[#f8861e]">
                {projects[selected].subtitle}
              </span>
            </h2>
            <div className="w-full h-65 border-4 border-[#f8861e] flex justify-center items-center overflow-hidden">
              <Image
                src={projects[selected].image}
                alt="Project Logo"
                width={1400}
                height={300}
              />
            </div>

            <p className="text-[#f8861e] font-light tracking-wider text-justify">
              {projects[selected].description}
            </p>
          </div>
          {/* Right Div for projects and descriptions*/}
          <div className="flex flex-col xl:w-140 h-full">
            {/* Top for projects*/}
            <div className="flex flex-col justify-center items-center w-full h-20">
              <h1 className="text-[#f8861e] xl:text-2xl text-xl font-semibold tracking-widest">
                PROJECTS
              </h1>
              <h1 className="text-[#f8861e] xl:text-3xl tracking-widest">
                ////////////////////////////////
              </h1>
            </div>
            {/* Bottom for projects*/}
            <div className="flex flex-col items-center p-6 w-full h-full  scrollable-div ">
              <div className="w-full max-w-md flex flex-col gap-3.5">
                {projects.map((project, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelected(idx)}
                    className={`w-full text-left px-5 py-4 rounded-md border-2 transition-all duration-200 font-mono tracking-widest
                ${
                  selected === idx
                    ? "bg-[#f8861e] text-black border-[#f8861e]"
                    : "bg-black text-[#f8861e] border-[#f8861e]"
                }
              `}
                    style={{
                      boxShadow:
                        selected === idx
                          ? "0 0 12px 2px #f8861e"
                          : "0 0 0 1px #f8861e",
                    }}
                  >
                    <span className="text-xl mr-2 font-extrabold">
                      {project.title},{" "}
                    </span>
                    <span className="text-lg mr-2 font-extrabold">
                      {project.subtitle}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
