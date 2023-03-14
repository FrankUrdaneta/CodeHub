import './App.css';
import AppNavbar from './components/AppNavbar';
import Bodys from './components/Bodys';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <AppNavbar/>
      <Bodys />
      {/* <CodeBox initialCode="var carro='fiat'" placeholder="este texto indica que ..." /> */}
      </header>
    </div>
  );
}

export default App;
