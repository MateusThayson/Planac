import './App.css';
import history from './history';
import { Router, Route, Redirect } from 'react-router-dom';
import { createContext, useState } from 'react';
import { PaginaLogin } from './Pages/PaginaLogin/PaginaLogin';
import AtividadesRealizadas from './Pages/AtividadesRealizadas/AtividadesRealizadas';
import MeuProgressoGeral from './Pages/AtividadesRealizadas/MeuProgressoGeral';
import MeuPlanner from './Pages/MeuPlanner/MeuPlanner';
import PlanoSemestral from './Pages/PlanoSemestral/PlanoSemestral';

export const AppContext = createContext(null);

function App() {
  const [date, setDate] = useState({Mes: null, Dia: null, Ano: null});
  const [auth, setAuth] = useState({token:null, nome:null});

  return (
    <AppContext.Provider value={{auth: auth, setAuth: setAuth, date: date, setDate: setDate}}>
      <Router history={history}>
          <Route path="/login" component={PaginaLogin}></Route>
          <Route exact path="/atividadesrealizadas" component={AtividadesRealizadas}>
            {/*auth.token == null? <Redirect to="/login"></Redirect> : <AtividadesRealizadas></AtividadesRealizadas>*/} 
          </Route>
          <Route exact path="/meuprogressogeral" component={MeuProgressoGeral}></Route>
          <Route exact path="/meuplanner" component={MeuPlanner}></Route>
          <Route exact path="/planosemestral" component={PlanoSemestral}></Route>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
