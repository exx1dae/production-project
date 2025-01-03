import { Route, Routes } from "react-router-dom";
import { memo, Suspense, useMemo } from "react";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";

export const AppRouter = memo(() => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter(
      (route) => !(route.authOnly && !isAuth),
    );
  }, [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
});
