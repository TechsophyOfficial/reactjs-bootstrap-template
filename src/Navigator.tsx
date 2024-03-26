import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { routes as appRoutes } from "./Routes";

const Navigation = () => {
  const navigate = useNavigate();

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
        ))}
      </Routes>
    </>
  );
};

export default Navigation;
