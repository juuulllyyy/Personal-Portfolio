"use client";
import React, { useState } from "react";
import Image from "next/image";

const EmailModal = ({ onClose }) => {
  const [submitStatus, setSubmitStatus] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText("julr789@gmail.com");
    setSubmitStatus("Email address copied to clipboard!");
    setTimeout(() => setSubmitStatus(""), 2000);
  };

  const openGmail = () => {
    const subject = encodeURIComponent("Contact from Portfolio");

    // Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=julr789@gmail.com&su=${subject}`;

    // Open Gmail in new tab
    window.open(gmailUrl, "_blank", "noopener,noreferrer");

    setSubmitStatus("Gmail opened in new tab!");
    setTimeout(() => setSubmitStatus(""), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in-scale backdrop-blur-sm">
      <div className="bg-[#f9deb9] border-4 border-[#e03627] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b-4 border-[#e03627] bg-[#e03627]">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/mail.png"
              alt="Email Icon"
              width={40}
              height={40}
            />
            <h2 className="text-2xl font-bold text-white tracking-wider">
              GET IN TOUCH
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-[#f9deb9] text-3xl font-bold transition-colors duration-200"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Status Message */}
          {submitStatus && (
            <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded text-center">
              {submitStatus}
            </div>
          )}

          {/* Email Display */}
          <div className="bg-white border-2 border-[#e03627] rounded-lg p-4">
            <h3 className="text-lg font-bold text-[#e03627] mb-2">
              My Email Address:
            </h3>
            <div className="flex items-center justify-between bg-[#f9deb9] border border-[#942021] rounded p-3 mb-3">
              <span className="text-[#942021] font-mono text-lg">
                julr789@gmail.com
              </span>
              <button
                onClick={copyEmail}
                className="bg-[#e03627] text-white px-3 py-1 rounded hover:bg-[#942021] transition-colors duration-200 text-sm font-semibold"
              >
                Copy
              </button>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={openGmail}
                className="flex-1 bg-[#ff6508] text-white py-2 px-4 rounded font-semibold hover:bg-[#e05507] transition-colors duration-200 text-sm"
              >
                📧 Open Gmail
              </button>
              <button
                onClick={() =>
                  (window.location.href = `mailto:julr789@gmail.com`)
                }
                className="flex-1 bg-[#942021] text-white py-2 px-4 rounded font-semibold hover:bg-[#7a1b1c] transition-colors duration-200 text-sm"
              >
                📮 Default Email App
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center text-[#942021] text-sm">
            <p>I'll get back to you as soon as possible!</p>
            <p className="mt-1">Usually within 24 hours ⚡</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;
