import Topbar from "components/Topbar";
import RouterContainer from "routes";
import { Header, MainContainer } from "./styles";
const App = () => {
  return (
    <div className="app-wrap">
      <Header>
        <Topbar/>
      </Header>
      <MainContainer>
         <RouterContainer/>
      </MainContainer>
    </div>
  );
};

export default App;
