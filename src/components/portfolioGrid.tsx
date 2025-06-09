import { projectsData } from "@/projects";
import { Link } from "@tanstack/react-router";

const PortfolioGrid = () => {
  const projects = projectsData.sort((a, b) => a.id - b.id);

  return (
    <section className='bg-clr-dark text-clr-light py-20 px-8 text-center' id='work'>
      <h2 className='text-4xl font-black md:text-6xl'>My work</h2>
      <p className=' text-clr-accent my-8 text-xl font-black md:text-2xl'>These are some of the projects I've done</p>
      <div className='grid-cols-portfolio grid gap-6'>
        {projects.map((project) => (
          <Link
            to={"/projects/$name"}
            params={{ name: project.urlName }}
            className='bg-clr-accent group focus:ring-clr-accent overflow-hidden focus:relative focus:z-10 focus:outline-none focus:ring'
            key={project.title}
          >
            <img
              src={`/images/projects/${project.imagePath}`}
              alt={project.altText}
              className='portfolio-transition scale h-[101%] w-[101%] hover:scale-[1.2] hover:opacity-75 group-focus:scale-[1.2] group-focus:opacity-75'
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
