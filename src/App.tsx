import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux'

import { Cart } from "./pages/Cart";
import { Home } from './pages/Home';
import { NotFound } from "./pages/NotFound";
import { FullPizza } from "./pages/FullPizza";

import { store } from "./store";

import './scss/app.scss';
import { Login } from "./pages/Login";
import { MainLayouts } from "./layouts/MainLayouts";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/login' exact={true} component={Login} />
          <MainLayouts>
            <Route path='/' exact={true} component={Home} />
            <Route path='/Cart' exact={true} component={Cart} />
            <Route path='/pizza/:id' component={FullPizza} />
          </MainLayouts>
          <Route path='*' component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
