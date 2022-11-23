import { render } from '@testing-library/react';
import RenderOnAuthenticated from '../RenderOnAuthenticated';
import '@react-keycloak/web'

jest.mock("@react-keycloak/web", () => ({ useKeycloak: mockUseKeycloak }));
function mockUseKeycloak() {
  const token = "A random string that is non zero length";
  const userProfile = {
    username: "test",
    email: "test@example.com",
    firstName: "Test",
    lastName: "User",
  };
  const realmAccess = { roles: ["user"] };

  const authClient = {
    authenticated: true,
    hasRealmRole(ignored) {
      return true;
    },
    hasResourceRole(ignored) {
      return true;
    },
    idToken: token,
    profile: userProfile,
    realm: "TestRealm",
    realmAccess,
    refreshToken: token,
    token,
  };
  return { initialized: true, keycloak: authClient };
}
test('renders RenderOnAuthenticated', () => {
  const component = render(<RenderOnAuthenticated />);
  expect(component).toMatchSnapshot();

});
