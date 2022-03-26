import GlobalStyle from "../src/view/styles/global-style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from "../src/view/styles/theme";

import Layout from "../src/view/assets/components/Layuot/layout";
import CreateLogin from '../src/view/pages/CreateLogin';
import Painel from '../src/view/pages/Painel';
import PainelAddLead from "./view/pages/PainelAddLead";


function App() {
  return (
    <BrowserRouter>
      <Theme>
        <Layout>
          <Routes>
            <Route path="/" element={<CreateLogin />} />
            <Route path="/Painel" element={<Painel />} />
            <Route path="/Painel/NewLead" element={<PainelAddLead />} />
          </Routes>
        </Layout>
      </Theme>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
