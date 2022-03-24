import GlobalStyle from "./styles/global-style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from "../src/styles/theme";

import Layout from "./components/Layuot/layout";
import CreateLogin from './pages/CreateLogin';
import Painel from './pages/Painel';


function App() {
  return (
    <BrowserRouter>
      <Theme>
        <Layout>
          <Routes>
            <Route path="/" element={<CreateLogin />} />
            <Route path="/Painel" element={<Painel />} />
          </Routes>
        </Layout>
      </Theme>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
