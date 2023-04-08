import Topbar from "components/TopBar";
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
