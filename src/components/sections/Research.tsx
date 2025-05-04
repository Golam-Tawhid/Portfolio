import React from "react";

const Research = () => {
  const researchProjects = [
    {
      title:
        "Adaptive Self-Supervision for Cross-Language Generalization in Multilingual Conformer-Based VSR",
      description:
        "This ongoing research explores how self-supervised learning can enhance visual speech recognition (VSR) across languages. The goal is to create a multilingual conformer-based model capable of understanding spoken words by analyzing lip movements, even in resource-constrained languages.",
    },
    {
      title:
        "Improving Student Performance by Detecting Stress Using Wearable Devices",
      description:
        "This study investigates how physiological signals from wearable sensors can be analyzed using ML algorithms to detect academic stress in students. The project aims to create predictive models that can help in designing real-time feedback systems for mental well-being and educational success.",
    },
  ];

  return (
    <section id="research" className="section">
      <div className="container-wide">
        <h2 className="section-heading">Research Work</h2>
        <ul className="list-disc list-inside space-y-6 text-lg">
          {researchProjects.map((project, index) => (
            <li key={index}>
              <strong>{project.title}</strong>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Research;
