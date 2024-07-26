import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AddSubscription from './components/AddSubscription';
import View from './components/View';
import Search from './components/Search';
import Delete from './components/Delete';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <Routes>

     <Route path='/' element={<Home/>}/>
     <Route path='/add' element={<AddSubscription/>}/>
     <Route path='/view' element={<View/>}/>
     <Route path='/search' element={<Search/>}/>
     <Route path='/delete' element={<Delete/>}/>

     </Routes>
    </BrowserRouter>
  );
}

export default App;
