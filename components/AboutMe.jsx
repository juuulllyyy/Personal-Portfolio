"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Timeline from "./ui/Timeline";
import { IBM_Plex_Sans } from "next/font/google";
import ResumeModal from "./modals/ResumeModal";

const ibmPlex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "700"] });

const experiences = [
  {
    company: "PIXEL8 WEB SOLUTIONS AND CONSULTANCY",
    role: "Frontend Developer / Team Leader",
    period: "JUNE 2023",
    description: "Fixed and built responsive UIs.",
  },
  {
    company: "GOOGLE DEVELOPERS STUDENT CLUB",
    role: "Evaluator",
    period: "AUGUST 2023",
    description: "Assess and enhance members' feedback delivery competencies.",
  },
];

const AboutMe = () => {
  const [current, setCurrent] = useState(0);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (showResumeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showResumeModal]);

  return (
    <section
      id="about"
      className={`min-h-screen flex flex-col xl:flex-row p-3 gap-5 xl:p-12 justify-between bg-black border-2 border-b-0 border-[#f8861e]  ${ibmPlex.className}`}
    >
      {/* Left Section with Timeline */}
      <div
        className="flex flex-col bg-black border-4 border-[#f8861e] -px-0.5 py-5 rounded-4xl w-full xl:w-190 xl:space-y-10"
        style={{
          backgroundImage: `
                  repeating-linear-gradient(0deg, rgba(255,191,133,0.1) 0, rgba(255,191,133,0.1) 1px, transparent 2px, transparent 32px),
                  repeating-linear-gradient(90deg, rgba(255,191,133,0.1) 0, rgba(255,191,133,0.1) 1px, transparent 2px, transparent 32px)
                `,
        }}
      >
        <div className="flex items-center justify-center w-full xl:h-15 bg-[#f8861e]">
          <h1 className="xl:text-2xl text-xl font-extrabold tracking-widest">
            VARIANT SKILL ASSESSMENT
          </h1>
        </div>
        <Timeline />

        {/*table for skills*/}
        <table className="w-full text-left text-xs xl:text-sm xl:font-bold">
          <thead>
            <tr className="bg-[#f8861e]">
              <th className="p-1">SKILL MODULE</th>
              <th className="p-1 hidden xl:block">CLASSIFICATION</th>
              <th className="p-1">EFFICIENCY</th>
              <th className="p-1">PROFICIENCY LEVEL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="p-1 text-[#f8861e]">C#</th>
              <th className="p-1 text-[#f8861e] hidden xl:block">
                PROGRAMMING LANGUAGE
              </th>
              <td className="p-1">
                <div className="w-20 h-4 bg-[#222]">
                  <div
                    className="flex h-4 bg-[#f8861e]"
                    style={{ width: "70%" }}
                  >
                    <p className="text-xs mr-2 align-middle">70%</p>
                  </div>
                </div>
              </td>
              <th className="p-1 text-[#f8861e]">ADEPT</th>
            </tr>
            <tr>
              <th className="p-1 text-[#f8861e]">JAVASCRIPT</th>
              <th className="p-1 text-[#f8861e] hidden xl:block">
                PROGRAMMING LANGUAGE
              </th>
              <td className="p-1">
                <div className="w-20 h-4 bg-[#222]">
                  <div
                    className="flex h-4 bg-[#f8861e]"
                    style={{ width: "54%" }}
                  >
                    <p className="text-xs mr-2 align-middle">54%</p>
                  </div>
                </div>
              </td>
              <th className="p-1 text-[#f8861e]">AVERAGE</th>
            </tr>
            <tr>
              <th className="p-1 text-[#f8861e]">TYPECSRPT</th>
              <th className="p-1 text-[#f8861e] hidden xl:block">
                PROGRAMMING LANGUAGE
              </th>
              <td className="p-1">
                <div className="w-20 h-4 bg-[#222]">
                  <div
                    className="flex h-4 bg-[#f8861e]"
                    style={{ width: "63%" }}
                  >
                    <p className="text-xs mr-2 align-middle">50%</p>
                  </div>
                </div>
              </td>
              <th className="p-1 text-[#f8861e]">AVERAGE</th>
            </tr>
            <tr>
              <th className="p-1 text-[#f8861e]">NEXT.JS</th>
              <th className="p-1 text-[#f8861e] hidden xl:block">FRAMEWORK</th>
              <td className="p-1">
                <div className="w-20 h-4 bg-[#222]">
                  <div
                    className="flex h-4 bg-[#f8861e]"
                    style={{ width: "54%" }}
                  >
                    <p className="text-xs mr-2 align-middle">54%</p>
                  </div>
                </div>
              </td>
              <th className="p-1 text-[#f8861e]">AVERAGE</th>
            </tr>
            <tr>
              <th className="p-1 text-[#f8861e]">ANGULAR</th>
              <th className="p-1 text-[#f8861e] hidden xl:block">FRAMEWORK</th>
              <td className="p-1">
                <div className="w-20 h-4 bg-[#222]">
                  <div
                    className="flex h-4 bg-[#f8861e]"
                    style={{ width: "42%" }}
                  >
                    <p className="text-xs mr-2 align-middle">42%</p>
                  </div>
                </div>
              </td>
              <th className="p-1 text-[#f8861e]">LOW</th>
            </tr>
            <tr>
              <th className="p-1 text-[#f8861e]">TAILWIND</th>
              <th className="p-1 text-[#f8861e] hidden xl:block">FRAMEWORK</th>
              <td className="p-1">
                <div className="w-20 h-4 bg-[#222]">
                  <div
                    className="flex h-4 bg-[#f8861e]"
                    style={{ width: "54%" }}
                  >
                    <p className="text-xs mr-2 align-middle">54%</p>
                  </div>
                </div>
              </td>
              <th className="p-1 text-[#f8861e]">AVERAGE</th>
            </tr>
            <tr>
              <th className="p-1 text-[#f8861e]">GIT</th>
              <th className="p-1 text-[#f8861e] hidden xl:block">
                VERSION CONTROL
              </th>
              <td className="p-1">
                <div className="w-20 h-4 bg-[#222]">
                  <div
                    className="flex h-4 bg-[#f8861e]"
                    style={{ width: "70%" }}
                  >
                    <p className="text-xs mr-2 align-middle">70%</p>
                  </div>
                </div>
              </td>
              <th className="p-1 text-[#f8861e]">ADEPT</th>
            </tr>
            <tr>
              <th className="p-1 text-[#f8861e]">POSTGRESQL</th>
              <th className="p-1 text-[#f8861e] hidden xl:block">DATABASE</th>
              <td className="p-1">
                <div className="w-20 h-4 bg-[#222]">
                  <div
                    className="flex h-4 bg-[#f8861e]"
                    style={{ width: "48%" }}
                  >
                    <p className="text-xs mr-2 align-middle">48%</p>
                  </div>
                </div>
              </td>
              <th className="p-1 text-[#f8861e]">LOW</th>
            </tr>
            <tr>
              <th className="p-1 text-[#f8861e]">FIREBASE</th>
              <th className="p-1 text-[#f8861e] hidden xl:block">DATABASE</th>
              <td className="p-1">
                <div className="w-20 h-4 bg-[#222]">
                  <div
                    className="flex h-4 bg-[#f8861e]"
                    style={{ width: "50%" }}
                  >
                    <p className="text-xs mr-2 align-middle">50%</p>
                  </div>
                </div>
              </td>
              <th className="p-1 text-[#f8861e]">AVERAGE</th>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Right Section with Profile ID */}
      <div className="flex flex-col space-y-5">
        <div
          className="flex flex-row justify-center bg-black border-4 border-[#f8861e] xl:w-170 h-75 p-5 space-x-4 rounded-2xl"
          style={{
            backgroundImage: `
                  repeating-linear-gradient(0deg, rgba(255,191,133,0.1) 0, rgba(255,191,133,0.1) 1px, transparent 2px, transparent 32px),
                  repeating-linear-gradient(90deg, rgba(255,191,133,0.1) 0, rgba(255,191,133,0.1) 1px, transparent 2px, transparent 32px)
                `,
          }}
        >
          {/* Left Side of the ID */}
          <div className="flex items-center flex-col w-25 xl:w-50">
            <div className="flex items-center justify-center border-4 border-[#f8861e] p-1 mb-2">
              <p className="text-sm xl:text-md text-[#f8861e] tracking-wide">
                CONFIRM IDENTITY
              </p>
            </div>
            <Image
              src="/images/profID.png"
              alt="TVA Logo"
              width={200}
              height={200}
              className="border-4 border-[#f8861e] mb-2"
            />
            <div className="flex justify-center bg-[#f8861e] p-0.5">
              <p className="text-md tracking-widest font-bold ">
                VARIANT N2301
              </p>
            </div>
          </div>
          {/* Right Side of the ID */}
          <div className=" flex flex-row xl:text-sm text-xs bg-black border-4 border-[#f8861e] xl:w-125 w-75  p-3 xl:tracking-widest  overflow-hidden ">
            {/* Input */}
            <div className="flex flex-col space-y-1 ">
              <h1 className="font-bold text-[#f8861e]">VARIANT NAME:</h1>
              <h1 className="   text-[#f8861e] pl-5">JULE JERRISH QUIJANO</h1>
              <h1 className="font-bold   text-[#f8861e]">
                EDUCATIONAL BACKGROUND:
              </h1>
              <h1 className="   text-[#f8861e] pl-5">
                BS COMPUTER ENGINEERING GRADUATE
              </h1>
              <h1 className="font-bold   text-[#f8861e]">SCHOOL GRADUATED:</h1>
              <h1 className="  text-[#f8861e] pl-5">
                CEBU INSTITUTE OF TECHNOLOGY - UNIVERSITY
              </h1>
              <h1 className="font-bold   text-[#f8861e]">ROLE:</h1>
              <h1 className="  text-[#f8861e] pl-5">FRONTEND DEVELOPER</h1>
            </div>
          </div>
        </div>
        {/* Work Experience Section */}
        <div className="flex flex-col items-center xl:flex-row h-full w-full space-x-5 justify-between">
          <div
            className="flex flex-col bg-black border-4 border-[#f8861e] space-y-2 h-full w-full p-y-5 pt-5 rounded-2xl"
            style={{
              backgroundImage: `
                  repeating-linear-gradient(0deg, rgba(255,191,133,0.1) 0, rgba(255,191,133,0.1) 1px, transparent 2px, transparent 32px),
                  repeating-linear-gradient(90deg, rgba(255,191,133,0.1) 0, rgba(255,191,133,0.1) 1px, transparent 2px, transparent 32px)
                `,
            }}
          >
            <div className="flex justify-center items-center w-full h-10 bg-[#f8861e]">
              <h1 className="xl:text-xl font-extrabold tracking-widest">
                VARIANT EXPERIENCE TIMELINE
              </h1>
            </div>
            <div className="flex justify-center flex-row items-center space-x-4 p-3">
              <button
                onClick={prev}
                className="text-[#f8861e] text-2xl px-2 hover:text-[#ff6508] hover:scale-130 transition"
                aria-label="Previous"
              >
                &#8592;
              </button>
              <div className="rounded-xl p-6 w-80 text-center  tracking-widest">
                <h2 className="text-xl font-bold text-[#f8861e] mb-3">
                  {experiences[current].company}
                </h2>
                <p className="text-sm text-[#f8861e]">
                  {experiences[current].role}
                </p>
                <p className="text-sm text-[#f8861e]">
                  {experiences[current].period}
                </p>
                <p className="text-xs text-[#f8861e] mt-2">
                  {experiences[current].description}
                </p>
              </div>
              <button
                onClick={next}
                className="text-[#f8861e] text-2xl px-2 hover:text-[#ff6508] hover:scale-130 transition"
                aria-label="Next"
              >
                &#8594;
              </button>
            </div>
          </div>
          {/* Logo and resume part */}
          <div className="flex xl:flex-col items-center w-full h-full justify-evenly xl:justify-between ">
            <div
              className="flex flex-col justify-center -space-y-6"
              onClick={() => setShowResumeModal(true)}
              style={{ cursor: "pointer" }}
            >
              <Image
                src="/images/fileTVA.png"
                alt="File Logo"
                width={70}
                height={70}
                className=" w-auto brightness-120 scale-70 transition duration-200 hover:scale-80 cursor-pointer"
              />
              <div className="flex justify-center items-center">
                <h1 className="text-md text-[#f8861e] font-extrabold tracking-widest">
                  VARIANT'S RESUME
                </h1>
              </div>
            </div>

            <Image
              src="/images/TVA logo.png"
              alt="TVA Logo"
              width={150}
              height={150}
              className=" w-auto "
            />
          </div>
        </div>
      </div>
      {showResumeModal && (
        <ResumeModal onClose={() => setShowResumeModal(false)} />
      )}
    </section>
  );
};

export default AboutMe;
