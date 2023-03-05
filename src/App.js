
import './App.css';

import NavBar from './NavBar';
import Home from './Home';

function App() {
  //ici on écrit la partie logique du components

  const title = ['malthus','echicoua','Elie'];

  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
