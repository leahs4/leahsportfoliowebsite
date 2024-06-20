import logo from './logo.png'
import './App.css';

import HeaderButtons from './HeaderButtons'; // Import the Header component

function App(){
  return (
    <div className="App">
      <HeaderButtons /> {/* Include the Header component here */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ width: '50%', height: '50%' }} />
        <p>
          <p>
            Welcome to Leah Sun's Portfolio Website (〜^∇^)〜
          </p>
        </p>
      </header>
    </div>
  );
}


export default App;
