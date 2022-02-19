import logo from './logo.svg';
import Header from  './Components/Header.js'
import Chart from './Components/Chart/Chart';
import { useEffect } from 'react';
function App() {

  return (
    <div className="App">
      <Header />
      <Chart />
    </div>
  );
}

export default App;
