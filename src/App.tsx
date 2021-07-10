import React from 'react';
import './App.css';
import { useAuth } from './context/auth-context';
import { AuthenticatedApp } from './anthenticated-app';
import { UnanthenticatedApp } from './unanthenticated-app';

function App() {
  const { user}= useAuth();
  return (
    <div className="App">
     { user ?<AuthenticatedApp/>:<UnanthenticatedApp/>}
    </div>
  );
}

export default App;
