import React from "react";

const MissMinutes = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
      <div className="bg-white rounded-2xl p-10 shadow-2xl text-center ">
        <h2 className="text-3xl font-bold text-[#e03627] mb-4">
          Hey there, Variant!
        </h2>
        <p className="text-lg text-[#942021] mb-6 italic">
          Miss Minutes says: <br />{" "}
          <span className="font-bold">"You’re out of your timeline!"</span>
        </p>
        <button
          className="mt-2 px-6 py-2 bg-[#e03627] text-white rounded-lg hover:bg-[#ff6508] transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MissMinutes;
