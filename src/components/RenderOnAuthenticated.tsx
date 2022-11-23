import { useKeycloak } from "@react-keycloak/web";

const RenderOnAuthenticated = ({ children }) => {
  const { keycloak } = useKeycloak();
  return <>{keycloak.authenticated && <span>{children}</span>}</>;
};

export default RenderOnAuthenticated;
