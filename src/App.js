import ReactDOM from 'react-dom';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  ReactDOM.render(<Calculator />,
    document.getElementById('container'));
}

export default App;
