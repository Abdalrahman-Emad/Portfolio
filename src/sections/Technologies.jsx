import React from 'react';
import { FaPython, FaJs, FaDatabase, FaHtml5, FaCss3, FaReact, FaGithub, FaDocker, FaLinux, FaWindows, FaFigma } from 'react-icons/fa'; // Importing icons from react-icons
import { SiTypescript, SiDjango, SiNextdotjs, SiMui, SiBootstrap, SiSass, SiJquery, SiTailwindcss, SiOdoo } from 'react-icons/si'; // Importing additional icons

const technologies = {
  Languages: [
    { name: 'Python', icon: <FaPython className="tech-icon" /> },
    { name: 'JavaScript', icon: <FaJs className="tech-icon" /> },
    { name: 'TypeScript', icon: <SiTypescript className="tech-icon" /> },
    { name: 'SQL', icon: <FaDatabase className="tech-icon" /> }
  ],
  Web: [
    { name: 'HTML5', icon: <FaHtml5 className="tech-icon" /> },
    { name: 'CSS3', icon: <FaCss3 className="tech-icon" /> },
    { name: 'Django', icon: <SiDjango className="tech-icon" /> },
    { name: 'React.JS', icon: <FaReact className="tech-icon" /> },
    { name: 'Next.JS', icon: <SiNextdotjs className="tech-icon" /> },
    { name: 'MUI', icon: <SiMui className="tech-icon" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="tech-icon" /> },
    { name: 'Sass', icon: <SiSass className="tech-icon" /> },
    { name: 'JQuery', icon: <SiJquery className="tech-icon" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="tech-icon" /> }
  ],
  CI_CD: [
    { name: 'GitHub', icon: <FaGithub className="tech-icon" /> },
    { name: 'Docker', icon: <FaDocker className="tech-icon" /> }
  ],
  OS_Others: [
    { name: 'Linux', icon: <FaLinux className="tech-icon" /> },
    { name: 'Windows', icon: <FaWindows className="tech-icon" /> },
    { name: 'Bash Scripting', icon: <FaLinux className="tech-icon" /> }, // No specific Bash icon, using Linux icon
    { name: 'Figma', icon: <FaFigma className="tech-icon" /> },
    { name: 'Odoo', icon: <SiOdoo className="tech-icon" /> }
  ]
};

const Technologies = () => {
  return (
    <section className="c-space my-20" id="technologies">
      <h3 className="head-text text-center">Technologies I've Worked With</h3>

      <div className="tech-container w-full max-w-4xl px-4 mx-auto">
        {Object.entries(technologies).map(([category, items]) => (
          <div key={category} className="tech-category mb-8">
            <h4 className="text-xl font-semibold mb-4">{category.replace('_', ' ')}</h4>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {items.map(({ name, icon }) => (
                <li key={name} className="tech-item flex items-center gap-2 p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                  {icon}
                  <span className="text-white-800 font-light">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;

