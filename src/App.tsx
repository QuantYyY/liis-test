import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import 'antd/dist/reset.css';
import './App.css';

import GroupCards from './components/Cards/GroupCards'
import Auth from './components/Auth';


const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Auth/>} />
      <Route path='/hotels' element={<GroupCards/>} />
    </Routes>
  );
}

export default App;
