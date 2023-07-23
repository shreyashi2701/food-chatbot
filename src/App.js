
import './App.css';
// import Bachg from './Pages/Bachg';
import {Route, Routes} from "react-router-dom";
import Login from './Pages/Login';
import UserInput from './Pages/UserInput';
import FoodOrderChat from './Pages/FoodOrderChat';



function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Login/>}/>
        <Route path='/LoginForm' element = {<UserInput/>}/>
        <Route path='/FoodOrderChat' element = {<FoodOrderChat/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
