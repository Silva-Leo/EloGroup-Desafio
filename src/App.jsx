import GlobalStyle from "./styles/global-style";
import { BrowserRouter } from "react-router-dom";
import Theme from '../src/styles/theme';

// import Routes from "./routes";

function App() {

  return (
    <BrowserRouter>
        <Theme>


        </Theme>  
      <GlobalStyle/>
    </BrowserRouter>
  )
}

export default App;
