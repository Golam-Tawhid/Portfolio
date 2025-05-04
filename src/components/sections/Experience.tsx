import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Research Member",
      organization: "BIOSE (Biomedical Science and Engineering Research Center)",
      duration: "June 2024 – Present",
      description: "Working as a core member of the interdisciplinary research team at BIOSE, I contribute to projects that apply computer science to biomedical challenges. My role includes developing data-driven models, experimenting with machine learning pipelines, and collaborating with domain experts to transform biological data into actionable insights. I also assist in preparing research documentation for publication in academic journals."
    },
    {
      role: "Census Enumerator",
      organization: "Bangladesh Bureau of Statistics (BBS)",
      duration: "June 2022",
      description: "Contributed to the national census initiative by conducting door-to-door interviews of over 300 individuals. Ensured over 99% data accuracy by following rigorous data collection protocols and adapting communication techniques to various community contexts. Successfully completed government training in data ethics, communication, and digital form handling."
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container-wide">
        <h2 className="section-heading">Work Experience</h2>
        <ul className="list-disc list-inside space-y-6 text-lg">
          {experiences.map((exp, index) => (
            <li key={index}>
              <strong>{exp.role}</strong> – {exp.organization} ({exp.duration})
              <p>{exp.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
