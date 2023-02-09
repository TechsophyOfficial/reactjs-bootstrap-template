import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "../components/common/controls/Button";
import CONSTANTS from "../constants/constants";

const Home = () => {
  return (
    <>
      <Grid
        container
        style={{ justifyContent: "flex-end", padding: "0px 30px" }}
      >
        <div
          className="content-body-div"
          style={{ display: "block", paddingLeft: "50px", width: "70%" }}
        >
          <div className="inner-page">
            <p style={{ fontSize: "24px" }}>Overview</p>
            <p>
              Ready to use multi-lingual web application with all basic and
              necessary components, integrated with KeyCloak authentication, SxP
              and MUI styled components.
            </p>
            <p>
              The main agenda of this templete project is to reduced the
              development time doing the same basic things for all
              web-application over and over.
            </p>
            <p>
              This project will give you a skeleton of the base project where
              you don't have to start the development from the scratch.
            </p>
            <p style={{ fontSize: "24px" }}>List of features</p>
            <p>
              Below are the list of features we have implemented in this
              application.
            </p>
            <ul>Header</ul>
            <ul>Footer</ul>
            <ul>Setting(to configure Language and country)</ul>
            <ul>Profile(to Update the user details)</ul>
            <ul>Basic UI components(Bootstrapped with MUI)</ul>
            <p>
              Click "List of Component's Available" on the top right side of
              this page to see the list of UI components and how to use it in
              the application with example.{" "}
            </p>
          </div>
        </div>
        <div>
          <Link to={"/component-list"}>
            <Button text={CONSTANTS.COMPONENT_LIST_MSG} />
          </Link>
        </div>
      </Grid>
    </>
  );
};

export default Home;
