import { logProps } from "./components/log-props";
import { UserInfo } from "./components/user-info";
import { userHOC } from "./components/user-hoc";
import { UserInfoForm } from "./components/user-form";

function App() {
  const UserHOC =  userHOC(UserInfo, 2);
  const WrapperComponent = logProps(UserInfo);
  return (
    <>
      <UserInfoForm />
    </>
  );
}

export default App;
