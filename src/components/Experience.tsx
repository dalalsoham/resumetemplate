import React from 'react';

type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  description: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: 'Freelance Web Developer | Remote',
    period: '2022 - Present',
    description: [
      'Developed a dynamic sailing website for a leading sailing company, leveraging the power of ReactJs functionlity and userinteraction',
      ' Managed the database integration, sourcing data from Excel sheets to maintain accurate and up-date information on thewebsite',
      'Designed visually appealing web pages with Bootstrap, ensuring responsiveness across various devices and screen sizes forenhanced user engagement',
      'Used Material UI components to enhance the website’s look and usability, following contemporary design guidelines',
      'Utilized JavaScript tech stack to efficiently build routing and modeling components, enhancing user navigation and interactionthroughout the website'
    ]
  },
];

export function Experience() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-gray-200 pl-4 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p className="text-gray-600 mb-2">{exp.position} | {exp.period}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}