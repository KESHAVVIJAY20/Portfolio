import React from "react";

export default function Skills() {
  const skills = [
    { name: "React", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "Node.js", level: "80%" },
    { name: "MongoDB", level: "75%" },
    { name: "Tailwind CSS", level: "90%" },
    { name: "Firebase", level: "70%" },
  ];

  return (
    <section className="py-20 bg-[#0B0F19] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "React",
            "JavaScript",
            "Node.js",
            "MongoDB",
            "Tailwind CSS",
            "MS Excel",
            "MS Word",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur hover:bg-white/10 transition"
            >
              <h3 className="text-lg font-medium">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
