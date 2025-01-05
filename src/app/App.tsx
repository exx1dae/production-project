import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useEffect } from "react";
import { useTheme } from "./providers/ThemeProvider";
import { useDispatch, useSelector } from "react-redux";
import { getUserInited, userActions } from "entities/User";

function App() {
  const { theme } = useTheme();

  const dispatch = useDispatch();

  const isInited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames("app", {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {isInited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
}

export default App;
