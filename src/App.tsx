import React, { useEffect, useState } from "react";
import KeycloakWrapper from "./KeycloakWrapper";

const App = () => {
  const [appConfig, setAppConfig] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (sessionStorage.getItem("react-token")) {
          const config = {
            realm: sessionStorage.getItem("realm") || "",
            authURL: sessionStorage.getItem("authURL") || "",
            clientId: sessionStorage.getItem("clientId") || "",
            gatewayURL: sessionStorage.getItem("gatewayURL") || "",
            logoURL: sessionStorage.getItem("logoURL") || "",
          };
          setAppConfig(config);
        } else {
          // Clear session storage
          sessionStorage.clear();
          const response = await fetch(`${window.location.origin}${window.location.pathname}.json`);
          const config = await response.json();
          setAppConfig(config);
        }
      } catch (error) {
        console.error("Error fetching configuration:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {appConfig ? (
        <KeycloakWrapper config={appConfig} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default App;
