import './App.css';
import history from './history';
import { Router, Route, Redirect } from 'react-router-dom';
import { createContext, useState } from 'react';
import { PaginaLogin } from './Pages/PaginaLogin/PaginaLogin';
import AtividadesRealizadas from './Pages/AtividadesRealizadas/AtividadesRealizadas';
import MeuProgressoGeral from './Pages/AtividadesRealizadas/MeuProgressoGeral';
import MeuPlanner from './Pages/MeuPlanner/MeuPlanner';

export const AuthContext = createContext(null);

function App() {

  const [auth, setAuth] = useState({token:null, nome:null});

  return (
    <AuthContext.Provider value={{auth: auth, setAuth: setAuth}}>
      <Router history={history}>
          <Route path="/login" component={PaginaLogin}></Route>
          <Route exact path="/atividadesrealizadas" component={AtividadesRealizadas}>
            {/*auth.token == null? <Redirect to="/login"></Redirect> : <AtividadesRealizadas></AtividadesRealizadas>*/} 
          </Route>
          <Route exact path="/meuprogressogeral" component={MeuProgressoGeral}></Route>
          <Route exact path="/meuplanner" component={MeuPlanner}></Route>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
