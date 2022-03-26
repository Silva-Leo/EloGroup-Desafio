import GlobalStyle from "../src/view/styles/global-style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from "../src/view/styles/theme";

import Layout from "../src/view/assets/components/Layuot/layout";
import CreateLogin from '../src/view/pages/CreateLogin';
import Painel from '../src/view/pages/Painel';


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
