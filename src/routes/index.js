import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

// Contexts
import { useAuthentication } from "../contexts/Authentication";

const Routes = () => {
  const { user } = useAuthentication();

  return user ? <AppStack /> : <AuthStack />;
};

export default Routes;
