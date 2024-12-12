import React, { ReactNode, useState, useEffect } from "react";

interface Route {
  path: string;
  component: ReactNode;
}

const Router: React.FC<{ routes: Route[]; currentPath?: string }> = ({
  routes,
  currentPath,
}) => {
  const [current, setCurrent] = useState(
    currentPath ||
      (typeof window !== "undefined" ? window.location.pathname : "/")
  );

  useEffect(() => {
    if (!currentPath && typeof window !== "undefined") {
      const onPopState = () => setCurrent(window.location.pathname);
      window.addEventListener("popstate", onPopState);
      return () => window.removeEventListener("popstate", onPopState);
    }
  }, [currentPath]);

  const route = routes.find((r) => r.path === current);

  //   const route = routes.find((r) => {
  //     if (r.path === "/" && current === "/") {
  //       return true;
  //     }
  //     return r.path === current;
  //   });

  if (!route) {
    return <h1>404 Not Found</h1>;
  }

  return <>{route.component}</>;
};

export default Router;
