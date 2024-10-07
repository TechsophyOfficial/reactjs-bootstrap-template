import React, { FC } from "react";
import Test from "./pages/PlaceHolder";
import Dashboard from "./pages/Dashboard";

interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC;
  index: number;
}

export const routes: Array<Route> = [
  {
    key: "dashboard",
    title: "Dashboard",
    path: `${process.env.PUBLIC_URL}/dashboard`,
    enabled: true,
    component: Dashboard,
    index: 0,
  },

  {
    key: "placeholder",
    title: "Placeholder",
    path: `${process.env.PUBLIC_URL}/placeholder`,
    enabled: true,
    component: Test,
    index: 0,
  },
];
