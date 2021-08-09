import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PaginaLogin from './Pages/PaginaLogin/PaginaLogin';
import AtividadesRealizadas from './Pages/AtividadesRealizadas/AtividadesRealizadas';

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
  </BrowserRouter>
  );
}

export default App;
