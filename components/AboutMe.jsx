import React from "react";
import Image from "next/image";
import Timeline from "./ui/Timeline";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "700"] });

const AboutMe = () => {
  return (
    <section
      id="about"
      className={`min-h-screen flex p-12 justify-between bg-black border-2 border-[#f8861e] w-full h-full ${ibmPlex.className} space-x-5`}
    >
      {/* Left Section with Timeline */}
      <div
        className="flex flex-col bg-black border-4 border-[#f8861e] -px-0.5 py-5 pt-4 rounded-4xl w-190 space-y-3"
        style={{
          backgroundImage: `
                  repeating-linear-gradient(0deg, rgba(255,191,133,0.1) 0, rgba(255,191,133,0.1) 1px, transparent 2px, transparent 32px),
                  repeating-linear-gradient(90deg, rgba(255,191,133,0.1) 0, rgba(255,191,133,0.1) 1px, transparent 2px, transparent 32px)
                `,
        }}
      >
        <div className="flex items-center justify-center h-15 bg-[#f8861e]">
          <h1 className="text-2xl font-extrabold tracking-widest">
            VARIANT SKILL ASSESSMENT
          </h1>
        </div>
        <Timeline />

        {/*table for skills*/}
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#f8861e]">
              <th className="px-4 ">SKILL MODULE</th>
              <th className="px-4 ">CLASSIFICATION</th>
              <th className="px-4 ">EFFICIENCY</th>
              <th className="px-4 ">PROFICIENCY LEVEL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="px-4 text-[#f8861e]">C#</th>
              <th className="px-4 text-[#f8861e]">PROGRAMMING LANGUAGE</th>
              <td className="px-4">
                <div className="w-20 h-4 bg-[#222]">
                  <div
                    className="flex h-4 bg-[#f8861e]"
                    style={{ width: "70%" }}
                  >
                    <p className="text-xs mr-2 align-middle">70%</p>
                  </div>
                </div>
              </td>
              <th className="px-4 text-[#f8861e]">ADEPT</th>
            </tr>
            <tr>
              <th className="px-4 text-[#f8861e]">C</th>
              <th className="px-4 text-[#f8861e]">PROGRAMMING LANGUAGE</th>
              <td className="px-4">
                <div className="w-20 h-4 bg-[#222]">
                  <div
                    className="flex h-4 bg-[#f8861e]"
                    style={{ width: "63%" }}
                  >
                    <p className="text-xs mr-2 align-middle">63%</p>
                  </div>
                </div>
              </td>
              <th className="px-4 text-[#f8861e]">ADEPT</th>
            </tr>
            <tr>
              <th className="px-4 text-[#f8861e]">JAVASCRIPT</th>
              <th className="px-4 text-[#f8861e]">PROGRAMMING LANGUAGE</th>
              <td className="px-4">
                <div className="w-20 h-4 bg-[#222]">
                  <div
                    className="flex h-4 bg-[#f8861e]"
                    style={{ width: "54%" }}
                  >
                    <p className="text-xs mr-2 align-middle">54%</p>
                  </div>
                </div>
              </td>
              <th className="px-4 text-[#f8861e]">AVERAGE</th>
            </tr>
            <tr>
              <th className="px-4 text-[#f8861e]">TYPECSRPT</th>
              <th className="px-4 text-[#f8861e]">PROGRAMMING LANGUAGE</th>
              <td className="px-4">
                <div className="w-20 h-4 bg-[#222]">
                  <div
                    className="flex h-4 bg-[#f8861e]"
                    style={{ width: "63%" }}
                  >
                    <p className="text-xs mr-2 align-middle">50%</p>
                  </div>
                </div>
              </td>
              <th className="px-4 text-[#f8861e]">AVERAGE</th>
            </tr>
            <tr>
              <th className="px-4 text-[#f8861e]">PYTHON</th>
              <th className="px-4 text-[#f8861e]">PROGRAMMING LANGUAGE</th>
              <td className="px-4">
                <div className="w-20 h-4 bg-[#222] justify-center">
                  <div
                    className="flex  h-4 bg-[#f8861e]"
                    style={{ width: "45%" }}
                  >
                    <p className="text-xs mr-2 align-middle">45%</p>
                  </div>
                </div>
              </td>
              <th className="px-4 text-[#f8861e]">LOW</th>
            </tr>
            <tr>
              <th className="px-4 text-[#f8861e]">NEXT.JS</th>
              <th className="px-4 text-[#f8861e]">FRAMEWORK</th>
              <td className="px-4">
                <div className="w-20 h-4 bg-[#222]">
                  <div
                    className="flex h-4 bg-[#f8861e]"
                    style={{ width: "54%" }}
                  >
                    <p className="text-xs mr-2 align-middle">54%</p>
                  </div>
                </div>
              </td>
              <th className="px-4 text-[#f8861e]">AVERAGE</th>
            </tr>
            <tr>
              <th className="px-4 text-[#f8861e]">ASP.NET</th>
              <th className="px-4 text-[#f8861e]">FRAMEWORK</th>
              <td className="px-4">
                <div className="w-20 h-4 bg-[#222]">
                  <div
                    className="flex h-4 bg-[#f8861e]"
                    style={{ width: "40%" }}
                  >
                    <p className="text-xs mr-2 align-middle">40%</p>
                  </div>
                </div>
              </td>
              <th className="px-4 text-[#f8861e]">LOW</th>
            </tr>
            <tr>
              <th className="px-4 text-[#f8861e]">ANGULAR</th>
              <th className="px-4 text-[#f8861e]">FRAMEWORK</th>
              <td className="px-4">
                <div className="w-20 h-4 bg-[#222]">
                  <div
                    className="flex h-4 bg-[#f8861e]"
                    style={{ width: "42%" }}
                  >
                    <p className="text-xs mr-2 align-middle">42%</p>
                  </div>
                </div>
              </td>
              <th className="px-4 text-[#f8861e]">LOW</th>
            </tr>
            <tr>
              <th className="px-4 text-[#f8861e]">TAILWIND</th>
              <th className="px-4 text-[#f8861e]">FRAMEWORK</th>
              <td className="px-4">
                <div className="w-20 h-4 bg-[#222]">
                  <div
                    className="flex h-4 bg-[#f8861e]"
                    style={{ width: "54%" }}
                  >
                    <p className="text-xs mr-2 align-middle">54%</p>
                  </div>
                </div>
              </td>
              <th className="px-4 text-[#f8861e]">AVERAGE</th>
            </tr>
            <tr>
              <th className="px-4 text-[#f8861e]">GIT</th>
              <th className="px-4 text-[#f8861e]">VERSION CONTROL</th>
              <td className="px-4">
                <div className="w-20 h-4 bg-[#222]">
                  <div
                    className="flex h-4 bg-[#f8861e]"
                    style={{ width: "70%" }}
                  >
                    <p className="text-xs mr-2 align-middle">70%</p>
                  </div>
                </div>
              </td>
              <th className="px-4 text-[#f8861e]">ADEPT</th>
            </tr>
            <tr>
              <th className="px-4 text-[#f8861e]">VS CODE</th>
              <th className="px-4 text-[#f8861e]">IDE</th>
              <td className="px-4">
                <div className="w-20 h-4 bg-[#222]">
                  <div
                    className="flex h-4 bg-[#f8861e]"
                    style={{ width: "72%" }}
                  >
                    <p className="text-xs mr-2 align-middle">72%</p>
                  </div>
                </div>
              </td>
              <th className="px-4 text-[#f8861e]">ADEPT</th>
            </tr>
            <tr>
              <th className="px-4 text-[#f8861e]">POSTGRESQL</th>
              <th className="px-4 text-[#f8861e]">DATABASE</th>
              <td className="px-4">
                <div className="w-20 h-4 bg-[#222]">
                  <div
                    className="flex h-4 bg-[#f8861e]"
                    style={{ width: "48%" }}
                  >
                    <p className="text-xs mr-2 align-middle">48%</p>
                  </div>
                </div>
              </td>
              <th className="px-4 text-[#f8861e]">LOW</th>
            </tr>
            <tr>
              <th className="px-4 text-[#f8861e]">FIREBASE</th>
              <th className="px-4 text-[#f8861e]">DATABASE</th>
              <td className="px-4">
                <div className="w-20 h-4 bg-[#222]">
                  <div
                    className="flex h-4 bg-[#f8861e]"
                    style={{ width: "50%" }}
                  >
                    <p className="text-xs mr-2 align-middle">50%</p>
                  </div>
                </div>
              </td>
              <th className="px-4 text-[#f8861e]">AVERAGE</th>
            </tr>
            <tr>
              <th className="px-4 text-[#f8861e]">MICROSOFTSQL</th>
              <th className="px-4 text-[#f8861e]">DATABASE</th>
              <td className="px-4">
                <div className="w-20 h-4 bg-[#222]">
                  <div
                    className="flex h-4 bg-[#f8861e]"
                    style={{ width: "40%" }}
                  >
                    <p className="text-xs mr-2 align-middle">40%</p>
                  </div>
                </div>
              </td>
              <th className="px-4 text-[#f8861e]">LOW</th>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Right Section with Profile ID */}
      <div className="flex flex-col space-y-5">
        <div
          className="flex flex-row bg-black border-4 border-[#f8861e] w-170 h-75 p-5 space-x-4"
          style={{
            backgroundImage: `
                  repeating-linear-gradient(0deg, rgba(255,191,133,0.1) 0, rgba(255,191,133,0.1) 1px, transparent 2px, transparent 32px),
                  repeating-linear-gradient(90deg, rgba(255,191,133,0.1) 0, rgba(255,191,133,0.1) 1px, transparent 2px, transparent 32px)
                `,
          }}
        >
          {/* Left Side of the ID */}
          <div className="flex flex-col">
            <div className="flex justify-center border-4 border-[#f8861e] p-1 mb-2">
              <p className="text-md text-[#f8861e] tracking-wide">
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
              <p className="text-md tracking-widest font-bold">VARIANT N2301</p>
            </div>
          </div>
          {/* Right Side of the ID */}
          <div className="flex flex-row bg-black border-4 border-[#f8861e] w-125  p-3 ">
            {/* Input */}
            <div className="flex flex-col space-y-1 ">
              <h1 className="font-bold text-sm tracking-widest text-[#f8861e]">
                VARIANT NAME:
              </h1>
              <h1 className=" text-sm tracking-widest text-[#f8861e] pl-5">
                JULE JERRISH QUIJANO
              </h1>
              <h1 className="font-bold text-sm tracking-widest text-[#f8861e]">
                EDUCATIONAL BACKGROUND:
              </h1>
              <h1 className=" text-sm tracking-widest text-[#f8861e] pl-5">
                BS COMPUTER ENGINEERING GRADUATE
              </h1>
              <h1 className="font-bold text-sm tracking-widest text-[#f8861e]">
                SCHOOL GRADUATED:
              </h1>
              <h1 className=" text-sm tracking-widest text-[#f8861e] pl-5">
                CEBU INSTITUTE OF TECHNOLOGY - UNIVERSITY
              </h1>
              <h1 className="font-bold text-sm tracking-widest text-[#f8861e]">
                ROLE:
              </h1>
              <h1 className=" text-sm tracking-widest text-[#f8861e] pl-5">
                FRONTEND DEVELOPER
              </h1>
            </div>
          </div>
        </div>
        {/* Work Experience Section */}
        <div
          className="flex flex-row bg-black border-4 border-[#f8861e] w-170 h-full p-5"
          style={{
            backgroundImage: `
                  repeating-linear-gradient(0deg, rgba(255,191,133,0.1) 0, rgba(255,191,133,0.1) 1px, transparent 2px, transparent 32px),
                  repeating-linear-gradient(90deg, rgba(255,191,133,0.1) 0, rgba(255,191,133,0.1) 1px, transparent 2px, transparent 32px)
                `,
          }}
        >
          <h1 className="text-[#f8861e]">Work Exp part</h1>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
