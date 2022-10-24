import { Global } from "@emotion/react";
import { reset } from "../../styles/reset";

const App = () => {
  return (
    <div>
      <Global styles={reset} />
      <div>
        리액트 프로젝트!
      </div>
    </div>
  );
};

export default App;
