const Home = () => {
  return (
    <section className='gap-x-4 py-20 px-8 lg:mx-auto lg:grid lg:w-min lg:grid-cols-[min-content_max-content] lg:py-40' id='home'>
      <h1 className='mb-1 text-5xl lg:text-7xl'>
        Hi, I am <strong className='block'>Joakim Olsen</strong>
      </h1>
      <p className='bg-clr-accent mb-4 inline-block self-start py-1 px-4 font-mono text-xl lg:relative lg:-left-6 lg:col-[-1/1] lg:row-start-2 lg:w-[calc(100%+1.5rem)] lg:text-right lg:text-2xl'>
        full-stack dev
      </p>
      <img
        className='w-full min-w-[250px] max-w-[400px] shadow-lg shadow-black/30 lg:relative lg:z-10 lg:col-start-1 lg:row-span-2 lg:row-start-1'
        src='../images/Joakim-3.jpg'
        alt='Picture of Joakim'
      />
    </section>
  );
};

export default Home;
