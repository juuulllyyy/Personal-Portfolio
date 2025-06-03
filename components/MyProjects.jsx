import React from "react";

const MyProjects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-neutral-900 "
    >
      <div className="max-w-4xl px-4">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">Projects</h2>
        <p className="text-base md:text-lg">
          Check out some of my recent work.
        </p>
        {/* Map project cards here */}
      </div>
    </section>
  );
};

export default MyProjects;
