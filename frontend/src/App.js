import logo from './logo.svg';
import './App.css';
import { Login } from './component/login';
import { Register } from './component/register';
import { UserNotes } from './component/userNotes';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        abc
        
      </header> */}
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/note' element={<UserNotes/>}/>
      </Routes>

    </div>
  );
}

export default App;
