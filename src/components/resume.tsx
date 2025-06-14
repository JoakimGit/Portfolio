const Resume = () => {
  return (
    <section className='bg-developer-img-3 text-clr-light bg-clr-dark bg-cover py-16 px-8 text-center bg-blend-multiply' id='resume'>
      <h2 className='mb-16 text-4xl font-black lg:row-[1/2] lg:text-6xl'>Resume</h2>
      <div className='space-y-12 md:grid md:grid-cols-2 xl:grid-cols-4 md:space-y-0 md:gap-y-6 md:gap-x-4'>
        <div>
          <h3 className='mb-2 text-3xl font-black'>Experience</h3>
          <div className='border-clr-accent mx-auto w-4/5 max-w-[350px] border-t'></div>
          <div className='my-4'>
            <p className='font-black'>21-5 A/S</p>
            <p>apr 2022 - present</p>
            <p>Software developer</p>
          </div>
          <div className='my-4'>
            <p className='font-black'>LogiSnap ApS (intern)</p>
            <p>juli 2021 - sep 2021</p>
            <p>Frontend developer</p>
          </div>
        </div>

        <div>
          <h3 className='mb-2 text-3xl font-black'>Education</h3>
          <div className='border-clr-accent mx-auto w-4/5 max-w-[350px] border-t'></div>

          <div className='my-4'>
            <p className='font-black'>Københavns erhvervsakademi</p>
            <p>2019-2022</p>
            <p>Datamatiker</p>
          </div>

          <div className='my-4'>
            <p className='font-black'>Københavns universitet</p>
            <p>2015-2019</p>
            <p>Bachelor i asienstudier (Japan studier)</p>
          </div>

          <div className='my-4'>
            <p className='font-black'>Copenhagen Business School</p>
            <p>2014-2015</p>
            <p>HA Almen erhvervsøkonomi</p>
          </div>

          <div className='my-4'>
            <p className='font-black'>Kongsholm Gymnasium og HF</p>
            <p>2009-2012</p>
            <p>Gymnasie STX</p>
          </div>
        </div>

        <div>
          <h3 className='mb-2 text-3xl font-black'>Skills</h3>
          <div className='border-clr-accent mb-4 mx-auto w-3/5 max-w-[200px] border-t 2xl:w-5/6 2xl:max-w-[450px]'></div>

          <h3 className='font-black'>Programming Languages:</h3>
          <div className='flex flex-wrap justify-center gap-x-1 mb-4'>
            <p>JavaScript, TypeScript, C#, SQL</p>
          </div>

          <h3 className='font-black'>Frameworks & Libraries:</h3>
          <div className='flex flex-wrap justify-center gap-x-1 mb-4'>
            <p>React, Next.js, Angular, ASP.NET, Tailwindcss, Umbraco CMS</p>
          </div>

          <h3 className='font-black'>Cloud & DevOps:</h3>
          <div className='flex flex-wrap justify-center gap-x-1 mb-4'>
            <p>Docker, Git, Microsoft Azure, Azure DevOps</p>
          </div>

          <h3 className='font-black'>Others:</h3>
          <div className='flex flex-wrap justify-center gap-x-1 mb-4'>
            <p>Convex, MongoDB, NodeJS, Scrum</p>
          </div>
        </div>

        <div>
          <h3 className='mb-2 text-3xl font-black'>Personal</h3>
          <div className='border-clr-accent mx-auto mb-4 w-3/5 max-w-[200px] border-t'></div>
          <div>
            <p>Lundtoftegårdsvej 13</p>
            <p>2800 Kongens Lyngby</p>
            <p>Denmark</p>
            <p>+45 61 86 02 74</p>
            <p>jokke34@gmail.com</p>
          </div>

          <div className='mt-6'>
            <p className='text-lg font-black'>Interests:</p>
            <p>Bouldering</p>
            <p>Fitness</p>
            <p>Gaming</p>
            <p>Chess</p>
            <p>Programming</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
