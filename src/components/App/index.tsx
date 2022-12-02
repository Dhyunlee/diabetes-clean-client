import Topbar from "components/Topbar";
import RouterContainer from "routes";
import { Header, Main } from "styles/common";
const App = () => {
  return (
    <div className="app-wrap">
      <Header>
        <Topbar />
      </Header>
      <Main>
        <RouterContainer />
      </Main>
    </div>
  );
};

export default App;
