//import logo from './logo.svg';
import './App.css';


import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Gym from './components/Gym'
import Home from './components/Home'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
  <Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>

 <Route path="/:user_id" element={<Gym/>} />

</Routes>
<Footer/> 
    </div>
  );
}


export default App;
