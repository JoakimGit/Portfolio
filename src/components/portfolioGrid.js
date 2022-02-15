import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PortfolioGrid = () => {
  const data = useStaticQuery(query);

  return (
    <section className="bg-clr-dark text-clr-light py-20 px-8 text-center" id="work">
      <h2 className="text-4xl font-black md:text-6xl">My work</h2>
      <p className=" text-clr-accent my-8 text-xl font-black md:text-2xl">
        These are some of the projects I've done
      </p>
      <div className="grid-cols-portfolio grid gap-6">
        {data.allProjectsJson.edges.map(({ node: project }) => (
          <Link
            to={`project/${project.urlName}`}
            className="bg-clr-accent group focus:ring-clr-accent overflow-hidden focus:relative focus:z-10 focus:outline-none focus:ring"
            key={project.title}
          >
            <GatsbyImage
              image={getImage(project.imagePath)}
              alt={project.altText}
              className="portfolio-transition scale h-[101%] w-[101%] hover:scale-[1.2] hover:opacity-75 group-focus:scale-[1.2] group-focus:opacity-75"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

const query = graphql`
  query {
    allProjectsJson(sort: { fields: jsonId }) {
      edges {
        node {
          altText
          title
          urlName
          imagePath {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default PortfolioGrid;
