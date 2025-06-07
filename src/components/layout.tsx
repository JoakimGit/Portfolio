import BackToTopLink from "./backToTopLink";
import NavToggleBtn from "./navToggleBtn";
import Seo from "./seo";
import Sidebar from "./sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Seo />
      <Sidebar />
      <NavToggleBtn />
      <main className="sm:pl-[250px] xl:pl-[300px]">{children}</main>
      <BackToTopLink />
    </>
  );
};

export default Layout;
