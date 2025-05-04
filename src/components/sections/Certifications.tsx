import React from "react";

const Certifications = () => {
  const certifications = [
    "Python & Flask",
    "Database with Python",
    "App Development",
    "Software Engineering Simulation",
  ];

  return (
    <section id="certifications" className="section">
      <div className="container-wide">
        <h2 className="section-heading">Certifications</h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
