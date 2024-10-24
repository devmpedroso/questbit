import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './src/Home';  // Importando a página Home

const App = () => (
  <div>
    <Home />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
