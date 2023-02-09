import React, { useState } from "react";
import { Typography } from "@mui/material";
import keycloak from "../keycloak";
import Button from "../components/common/controls/Button";
import Input from "../components/common/controls/Input";
import SIZE from "../theme/colors.json";
import COLORS from "../theme/colors.json";
import { request } from "../services/request";
import CONSTANTS from "../constants/constants";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  label: {
    marginBottom: SIZE[0],
    fontSize: SIZE[15],
    textAlign: "left",
    color: COLORS.GRAY,
  },
}));

const Profile = () => {
  const classes = useStyles();
  const [updateEnable, setUpdateEnbale] = useState(true);
  const size = "small";
  const variant = "standard";
  const [firstName, setFirstName] = useState(
    sessionStorage.getItem(CONSTANTS.FIRST_NAME)
  );
  const [lastName, setLastName] = useState(
    sessionStorage.getItem(CONSTANTS.LAST_NAME)
  );
  const UPDATE_PROFILE_URL = `auth/admin/realms/techsophy-platform/users/`;
  const USER_ID = `${sessionStorage.getItem(CONSTANTS.USER_ID)}`;
  const USER_MAIL = `${sessionStorage.getItem(CONSTANTS.USER_EMAIL)}`;
  const { idTokenParsed } = keycloak;

  let formBody = {
    id: USER_ID,
    username: USER_MAIL,
    enabled: true,
    firstName: firstName,
    lastName: lastName,
    requiredActions: ["UPDATE_PROFILE"],
    access: {
      manageGroupMembership: true,
      view: true,
      mapRoles: true,
      impersonate: true,
      manage: true,
    },
  };

  const handleProfileUpdate = async () => {
    try {
      await request
        .put(
          `${process.env.REACT_APP_KEYCLOAK_URL}` +
            UPDATE_PROFILE_URL +
            USER_ID,
          formBody
        )
        .then(() => {
          sessionStorage.setItem(
            CONSTANTS.FIRST_NAME,
            idTokenParsed.given_name
          );
          sessionStorage.setItem(
            CONSTANTS.LAST_NAME,
            idTokenParsed.family_name
          );
          setUpdateEnbale(true);

          alert("User has been updated successfully!");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "50px" }}
    >
      <Typography variant="h3">
        <Input
          label="User Email"
          value={sessionStorage.getItem("user-email")}
          name="userEmail"
          type="text"
          size={size}
          inputLabelStyles={classes.label}
          disabled
          required
          variant={variant}
        />
        <Input
          label="First Name"
          value={firstName}
          name="first-name"
          type="text"
          size={size}
          inputLabelStyles={classes.label}
          required
          variant={variant}
          onChange={(e) => {
            setUpdateEnbale(false);
            setFirstName(e.target.value);
          }}
        />
        <Input
          label="Last Name"
          value={lastName}
          name="last-name"
          type="text"
          size={size}
          inputLabelStyles={classes.label}
          required
          variant={variant}
          onChange={(e) => {
            setUpdateEnbale(false);
            setLastName(e.target.value);
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 20,
            margin: 20,
          }}
        >
          <Button
            text="Update"
            size={size}
            disabled={updateEnable}
            onClick={() => {
              handleProfileUpdate();
            }}
          />
        </div>
      </Typography>
    </div>
  );
};

export default Profile;
