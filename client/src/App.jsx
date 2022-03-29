import { Route, Switch, useLocation } from "react-router-dom";

import Join from "./components/Join";
import Chat from "./components/Chat";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <Switch location={location}>
        <Route path="/" exact>
          <Join />
        </Route>
        <Route path="/chat" exact>
          <Chat location={location} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
