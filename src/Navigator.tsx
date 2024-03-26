import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { routes as appRoutes } from "./Routes";

const Navigation = () => {
  const navigate = useNavigate();

  // Set the initial route to the dashboard component when the component mounts
  useEffect(() => {
    navigate(`${process.env.PUBLIC_URL}/dashboard`);
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
          // Add additional routes in Routes.ts as required.
        ))}
      </Routes>
    </>
  );
};

export default Navigation;

/* Control Flow: index -> App -> Navigator*/