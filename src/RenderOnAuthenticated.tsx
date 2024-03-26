import { useKeycloak } from "@react-keycloak/web";

const RenderOnAuthenticated = (props: any) => {
  const { children } = props;
  const { keycloak } = useKeycloak();
  return <>{keycloak.authenticated && <div>{children}</div>}</>;
};

export default RenderOnAuthenticated;
