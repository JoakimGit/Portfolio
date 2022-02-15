import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ title, description }) => {
  const { site } = useStaticQuery(query);

  const { defaultTitle, defaultDescription } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription
  };

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;900&family=Source+Sans+Pro:wght@300;900&display=swap"
        rel="stylesheet"
      ></link>
      <script src="https://kit.fontawesome.com/657711dee1.js" crossorigin="anonymous"></script>
      <html className="scroll-smooth" lang="en"></html>
      <body className="bg-clr-light text-clr-dark font-sans leading-[1.6rem]"></body>
    </Helmet>
  );
};

export default Seo;

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
      }
    }
  }
`;

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

Seo.defaultProps = {
  title: null,
  description: null
};
