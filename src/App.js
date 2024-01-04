import logo from './logo.svg';
import './App.css';
import AppRouter from './Components/AppRouter';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter/>
    </div>
  );
}

export default App;
