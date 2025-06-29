import React from "react";

const MissMinutes = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in-scale backdrop-blur-sm">
      <div
        className="flex flex-col items-center border-5 border-[#f8861e] bg-black p-10 shadow-2xl text-center h-100 w-100"
        style={{
          backgroundImage: `
                  repeating-linear-gradient(0deg, rgba(255,191,133,0.1) 0, rgba(255,191,133,0.1) 1px, transparent 2px, transparent 32px),
                  repeating-linear-gradient(90deg, rgba(255,191,133,0.1) 0, rgba(255,191,133,0.1) 1px, transparent 2px, transparent 32px)
                `,
        }}
      >
        <h2 className="text-3xl font-bold text-[#f8861e] mb-4">
          Hey there, Variant!
        </h2>
        <p className="text-lg text-[#f8861e] mb-6 italic">
          Miss Minutes says: <br />{" "}
          <span className="font-bold">"You’re out of your timeline!"</span>
        </p>
        <button
          className="mt-2 px-6 py-2 bg-[#f8861e] text-white rounded-lg hover:bg-[#ff6508] transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MissMinutes;
