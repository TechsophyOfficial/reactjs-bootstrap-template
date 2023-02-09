import { render } from '@testing-library/react';
import App from './App';
import '@react-keycloak/web'
import './i18nextInit'

jest.mock("@react-keycloak/web");
test('renders App', () => {
  const component = render(<App />);
  expect(component).toMatchSnapshot();

});
