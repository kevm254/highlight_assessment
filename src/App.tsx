import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Layout/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Body from './components/Layout/Body/Body';
import axios from 'axios';
import { UsersQuery } from './queries/users.query';

function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios({
      url: 'http://localhost:1337/graphql',
      method: 'POST',
      headers: { 'Content-Type': "application/json" },
      data: JSON.stringify({ query: UsersQuery })
    })
      .then(res => {
        if (res?.data) {
          setUsers(res?.data?.data?.allUsers);
        }
      });
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Body userData={users} />
      </div>
    </BrowserRouter>
  );
}

export default App;
