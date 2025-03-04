const About = () => {
  return (
    <section className="h-screen w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black text-white flex items-start">
      <div className="ml-10 mt-20 max-w-4xl">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">
          A Little About Me
        </h2>
        <p className="text-lg mb-4">
          Hello, My name is{' '}
          <span className="font-semibold text-blue-400">Naol Chala</span>. I am
          a Software Engineering Student at
          <span className="font-semibold text-gray-300">
            {' '}
            Adama Science and Technology University
          </span>
          . I have been coding for almost{' '}
          <span className="font-semibold text-blue-400">3 years</span> now.
        </p>
        <p className="text-lg mb-4">
          As a{' '}
          <span className="font-semibold text-blue-400">
            Full-stack Web and Mobile Developer
          </span>
          , I have a broad range of skills that allow me to build imaginative
          and innovative solutions for web and mobile applications. My expertise
          in both front-end and back-end development enables me to work with
          various technology stacks and create seamless, user-friendly
          experiences.
        </p>
        <p className="text-lg mb-4">
          I stay up-to-date with the latest technologies to ensure my skills
          remain relevant. Whether it's working with{' '}
          <span className="font-semibold text-blue-400">
            React, Node.js, or Flutter
          </span>
          , I'm always eager to take on new challenges and expand my knowledge.
        </p>
        <p className="text-lg">
          If you're looking for a skilled Full-stack Developer who is passionate
          about programming and dedicated to delivering high-quality results, I
          would be thrilled to work with you.
        </p>
      </div>
    </section>
  );
};

export default About;
