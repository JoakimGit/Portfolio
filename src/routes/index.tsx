import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/layout";
import About from "@/components/about";
import Footer from "@/components/footer";
import Home from "@/components/home";
import PortfolioGrid from "@/components/portfolioGrid";
import Resume from "@/components/resume";
import "../app.css";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div>
      <Layout>
        <Home />
        <Resume />
        <About />
        <PortfolioGrid />
        <Footer />
      </Layout>
    </div>
  );
}
