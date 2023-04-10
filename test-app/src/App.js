import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { MyForm } from './form';
import {useState} from 'react';
const ele = <h1>Hello World using JSX</h1> // use of jsx
function App() {
  const [isShown, setIsShown] = useState(false); // use of state
  const handleClick = event => {

    setIsShown(current => !current);

  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
           {ele}  
           <Button onClick={handleClick} variant="contained">Click here for form</Button>  
           {isShown && ( //Conditional rendering
        <MyForm header = "Prop Header here"/>
      )}   
      </header>
    </div>
  );
}

export default App;
