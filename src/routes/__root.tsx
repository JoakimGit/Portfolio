import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />
      <Outlet />
      <TanStackRouterDevtools />
      <Scripts />
    </>
  ),
  head: () => ({
    meta: [
      {
        title: "Joakim Olsen Portfolio Website",
      },
      {
        description: "Website for displaying information and various projects for Joakim Olsen, a full stack developer.",
      },
    ],
    links: [
      {
        href: "https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;900&family=Source+Sans+Pro:wght@300;900&display=swap",
        rel: "stylesheet",
      },
    ],
    scripts: [
      {
        src: "https://kit.fontawesome.com/657711dee1.js",
        crossOrigin: "anonymous",
      },
    ],
  }),
});
