import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PaginaLogin from './Pages/PaginaLogin/PaginaLogin';
import AtividadesRealizadas from './Pages/AtividadesRealizadas/AtividadesRealizadas';
import MeuProgressoGeral from './Pages/AtividadesRealizadas/MeuProgressoGeral';
import MeuPlanner from './Pages/MeuPlanner/MeuPlanner';

function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" >
      <div>oi</div>
    </Route>
    <Route exact path="/login">
      <PaginaLogin></PaginaLogin>
    </Route>
    <Route exact path="/atividadesrealizadas">
      <AtividadesRealizadas></AtividadesRealizadas>
    </Route>
    <Route exact path="/atividadesrealizadas/meuprogressogeral">
      <MeuProgressoGeral></MeuProgressoGeral>
    </Route>
    <Route exact path="/meuplanner">
      <MeuPlanner></MeuPlanner>
    </Route>
  </BrowserRouter>
  );
}

export default App;
