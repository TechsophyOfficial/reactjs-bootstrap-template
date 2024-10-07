import React, { useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { routes as appRoutes } from "./Routes";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Set the initial route to the dashboard component when the component mounts
  useEffect(() => {
    if (
      location.pathname === `${process.env.PUBLIC_URL}/` ||
      location.pathname === `${process.env.PUBLIC_URL}`
    ) {
      navigate(`${process.env.PUBLIC_URL}/dashboard`);
    }

    // navigate(`${process.env.PUBLIC_URL}/dashboard`);
  }, []);

  return (
    <>
      <Routes>
        {appRoutes.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </>
  );
};

export default Navigation;

/* Control Flow: index -> App -> Navigator*/
