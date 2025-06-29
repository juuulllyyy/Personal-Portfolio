import React from "react";
import Image from "next/image";

const ResumeModal = ({ onClose }) => {
  const downloadResume = () => {
    const link = Object.assign(document.createElement("a"), {
      href: "/files/Quijano_Resume.pdf",
      download: "JuleQuijano_Resume.pdf",
    });
    link.click();
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in-scale backdrop-blur-sm">
      <div
        className="flex flex-row items-center border-5 border-[#f8861e] bg-black p-8 shadow-2xl text-center h-70 w-100"
        style={{
          backgroundImage: `
                  repeating-linear-gradient(0deg, rgba(255,191,133,0.1) 0, rgba(255,191,133,0.1) 1px, transparent 2px, transparent 32px),
                  repeating-linear-gradient(90deg, rgba(255,191,133,0.1) 0, rgba(255,191,133,0.1) 1px, transparent 2px, transparent 32px)
                `,
        }}
      >
        {/* Left Section*/}
        <div className="flex flex-col items-center justify-center w-1/2 h-full">
          <h2 className="text-xl font-bold text-[#f8861e] mb-4">
            VARIANT FILE
          </h2>
          <p className="text-md text-[#f8861e] mb-6 italic">
            Access Timeline Record: Resume File
            <br /> <span className="font-bold"> Variant #N2301</span>
          </p>
          <div className="flex flex-row gap-3">
            <button
              className=" p-2 font-bold text-[#f8861e] border-3 border-[#f8861e] hover:bg-[#f8861e] hover:text-black transition"
              onClick={downloadResume}
            >
              Download
            </button>

            <button
              className=" p-2 font-bold text-[#f8861e] border-3 border-[#f8861e] hover:bg-[#f8861e] hover:text-black transition"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
        {/* Left Section*/}
        <div className="flex items-center justify-center w-1/2 h-full">
          <Image
            src="/images/missMinutes2.png"
            alt="profile ID"
            width={500}
            height={200}
            className="overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
