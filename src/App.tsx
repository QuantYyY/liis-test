import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import 'antd/dist/reset.css';
import './App.css';

import GroupCards from './components/Cards/GroupCards'
import Auth from './components/Auth';


const App: FC = () => {
  return (
    <Routes>
      <Route path='/hotels' element={<GroupCards/>} />
      <Route path='/' element={<Auth/>} />
    </Routes>
  );
}

export default App;
