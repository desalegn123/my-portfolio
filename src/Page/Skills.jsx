const skills = [
  {
    name: 'HTML',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'React.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Express.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    name: 'Flutter',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  },
  {
    name: 'Firebase',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'Java',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'C++',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen w-full bg-black text-white flex flex-col pt-20 pb-20 px-16  bg-gradient-to-r from-gray-800 via-gray-900 to-black dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black">
      {/* Title */}
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        What Can I Do?
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="group flex flex-col items-center">
            <div className="p-6 rounded-lg  transition-all duration-300 group-hover:border-4 group-hover:border-yellow-400 group-hover:animate-bounce rounded-tl-4xl rounded-br-4xl">
              <img src={skill.logo} alt={skill.name} className="w-20 h-16 " />
            </div>
            <p className="mt-2 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
