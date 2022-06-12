
import './App.css';
import Todolist from "../src/components/Todolist"
import Styles from './components/Styles';
import { ThemeProvider } from './components/ThemeContext';
function App() {
  return (
    <div className="App">
        <ThemeProvider> 
         <Styles/>
     <Todolist/>
      </ThemeProvider>
    </div>
  );
}

export default App;
