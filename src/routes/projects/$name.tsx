import Layout from "@/components/layout";
import { projectsData } from "@/projects";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/$name")({
  component: RouteComponent,
});

function RouteComponent() {
  const { name } = Route.useParams();
  const project = projectsData.find((project) => project.urlName === name);
  if (!project) return <div>Project couldn't be found</div>;
  return (
    <div>
      <Layout>
        <Link className='bg-clr-dark text-clr-light hover:text-clr-light/80 relative left-4 top-4 rounded-lg p-2 font-black' to='/'>
          Go back
        </Link>

        <section className='gap-x-4 px-8 pt-20 pb-8 lg:mx-auto lg:grid lg:w-min lg:grid-cols-[min-content_max-content] lg:pt-40' id='home'>
          <h1 className='mb-1 text-5xl lg:text-7xl'>
            <strong className='block w-min'>{project.title}</strong>
          </h1>
          <p className='bg-clr-accent mb-4 inline-block self-start py-1 px-4 font-mono text-xl lg:relative lg:-left-6 lg:col-[-1/1] lg:row-start-2 lg:w-[calc(100%+2.5rem)] lg:text-right lg:text-2xl xl:mb-20'>
            {project.subtitle}
          </p>
          <div className='-mt-4 text-xl lg:col-[-1/1] lg:row-start-3 lg:text-right lg:text-2xl xl:-mt-20'>
            <a className='mb-2 block underline hover:opacity-70' href={project.githubUrl}>
              See github
            </a>
            {project.liveSiteUrl && (
              <a className='underline hover:opacity-70' href={project.liveSiteUrl}>
                Live site
              </a>
            )}
          </div>
          <img
            src={`/images/projects/${project.imagePath}`}
            alt={project.altText}
            className='block min-w-[250px] max-w-[400px] shadow-lg shadow-black/30 lg:relative lg:z-10 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:min-w-[400px] xl:min-w-[600px]'
          />
        </section>

        <div className='mx-auto flex max-w-[1000px] items-center px-8'>
          <p className='pr-2 pb-1 text-2xl'>Tags:</p>
          <p className='text-lg font-black'>{project.tags.join(", ")}</p>
        </div>

        <div className='mx-auto mt-4 max-w-[1000px] space-y-4 px-8'>
          {project.description.map((paragraph, i) => (
            <p key={i} className='max-w-2xl text-lg'>
              {paragraph}
            </p>
          ))}
        </div>
      </Layout>
    </div>
  );
}
