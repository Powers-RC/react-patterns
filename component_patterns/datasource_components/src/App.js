// import { CurrentUserLoader } from "./components/current-user-loader";
// import { UserLoader } from './components/user-loader';
import {UserInfo} from './components/user-info';
// import { BookInfo } from './components/book-info';
// import { ResourceLoader } from './components/resource-loader';
import axios from 'axios';
import {DataSource} from'./components/data-source';


const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
}

const getDataFromLocalStorage = (key) => () => {
  return localStorage.getItem(key);
}

const Message = ({msg}) => <h1>{msg}</h1>;

function App() {
  return (
    <>
      <DataSource
        getData={() => getDataFromServer("/users/2")}
        resourceName={"user"}
      >
        <UserInfo />
      </DataSource>
      <DataSource
        getData={() => getDataFromLocalStorage("test")}
        resourceName={"msg"}
      >
        <Message />
      </DataSource>
    </>
  );
}

export default App;
