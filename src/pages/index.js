import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import Home from "../components/home";
import About from "../components/about";
import Resume from "../components/resume";
import PortfolioGrid from "../components/portfolioGrid";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Seo></Seo>
        <Home></Home>
        <Resume></Resume>
        <About></About>
        <PortfolioGrid></PortfolioGrid>
        <Footer></Footer>
      </Layout>
    </div>
  );
};

export default IndexPage;
