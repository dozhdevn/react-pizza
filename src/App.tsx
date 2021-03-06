import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux'
import { Header } from './components/Header';

import { Cart } from "./pages/Cart";
import { Home } from './pages/Home';
import { NotFound } from "./pages/NotFound";
import { FullPizza } from "./pages/FullPizza";

import { store } from "./store";

import './scss/app.scss';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <div className="content">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path='/pizza/:id' element={<FullPizza/>}/>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
