import React, { FC } from "react";
import Test from "./pages/Test";
import Dashboard from "./pages/Dashboard";

interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC<{}>;
  index: number;
  //   icon: FC<{}>;
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
    key: "test",
    title: "Test",
    path: `${process.env.PUBLIC_URL}/test`,
    enabled: true,
    component: Test,
    index: 0,
  },
];
