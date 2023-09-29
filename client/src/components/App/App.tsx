import React from 'react';
import logo from './logo.svg';
import headerStyles from './App.module.css';
import Navbar from '../Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import MainTodoPage from '../ToDoComponents/MainTodoPage/MainTodoPage';

function App(): JSX.Element {
  return (
    <div className={headerStyles.App}>
      <header className={headerStyles.AppHeader}>
        <h5 className={headerStyles.headerTitle}>Мой список дел!</h5>
        <img src={logo} className={headerStyles.AppLogo} alt="logo" />
      </header>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<MainTodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
