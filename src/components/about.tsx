const About = () => {
  return (
    <section className='my-0 mx-auto max-w-[1000px] py-20 px-8 lg:grid lg:grid-cols-[1fr_200px] lg:gap-x-8' id='about'>
      <h2 className='text-4xl font-black lg:row-[1/2] lg:text-6xl'>Who I am</h2>
      <p className='bg-clr-accent h-fit py-4 px-4 font-mono text-xl lg:relative lg:-left-6 lg:col-span-full lg:row-[2/3] lg:w-[calc(100%+4rem)] lg:pr-[calc(200px+4rem)] lg:pl-6 lg:text-2xl'>
        Software developer based in Lyngby
      </p>
      <div className='my-6 space-y-4 lg:row-start-3 lg:my-2'>
        <p>
          I am 32 years old and I have been working as a software developer for over 3 years now. I am well versed in both frontend as well
          as back-end technologies. I enjoy coding and always welcome the opportunity to learn new languages or frameworks. Most of my work
          experience has been with frontend development, but I have been getting more into the backend and even DevOps side of things.
          Recently, I've been responsible for the full DevOps setup of a new project, including CI/CD pipelines in Azure DevOps, resource
          provisioning in Azure, and DNS configuration, ensuring a smooth and automated deployment from beginning.
        </p>
        <p>
          In my free time I enjoy playing Path of Exile if I'm gaming, reading comics, playing online chess, and watching livestreams on
          twitch.tv. I've also enjoy going to the gym, both the fitness gym, and the climbing gym.
        </p>
        <p>
          I used to study japanese at Copenhagen University and even spent one semester abroad living in Japan. Towards the end of that
          degree, I took an elective in programming and ended up liking it so much it convinced me to change studies, which lead to me
          enrolling in the computer science programme at KEA.
        </p>
      </div>
      <img
        className='shadow-lg shadow-black/30 lg:col-start-2 lg:row-start-1 lg:row-end-4 z-10'
        src={"/images/Joakim-2.jpg"}
        alt='Picture of me'
      />
    </section>
  );
};

export default About;
