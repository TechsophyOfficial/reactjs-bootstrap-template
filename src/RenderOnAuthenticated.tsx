// import { useKeycloak } from "@react-keycloak/web";
// import { ReactNode } from "react";

// interface RenderOnAuthenticatedProps {
//   children: ReactNode;
// }

// const RenderOnAuthenticated = (props: RenderOnAuthenticatedProps) => {
//   const { children } = props;
//   const { keycloak } = useKeycloak();
//   return <>{keycloak.authenticated && <div>{children}</div>}</>;
// };

// export default RenderOnAuthenticated;

import React from "react";

function RenderOnAuthenticated() {
  return <div>RenderOnAuthenticated</div>;
}

export default RenderOnAuthenticated;
