import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import NavBar from './components/NavBar/NavBar';
import DrawerWrapper from './components/common/Drawer/DrawerWrapper';
import StatsPage from './Pages/StatsPage';
import NFTPage from './Pages/Explore/NFTPage/NFTPage';
import { Context, initialState, Reducer } from './context/Context';

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(Reducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <NavBar />
        <DrawerWrapper />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/ALL%20NFT' element={<NFTPage />} />
          <Route path='/stats' element={<StatsPage />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
