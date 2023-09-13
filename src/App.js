import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AddProduct from './pages/AddProduct';
import ProductList from './pages/ProductList';
import UpdateProduct from './pages/UpdateProduct';
import Profile from './pages/Profile';
import Home from './pages/Home';
import ConfirmOTP from './pages/ConfirmOTP';
function App() {
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.clear();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const checkuser=()=>{
    let data=localStorage.getItem("user");
    console.log(data);
    return data;
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<ProductList/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/update/:id" element={<UpdateProduct/>}/>
        <Route path="/logout" element={<h1>Logout</h1>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/ConfirmOTP" element={<ConfirmOTP/>} />
        <Route path="/signup" element={checkuser()===null?<SignUp/>:<ProductList/>}/>
        <Route path="/login" element={checkuser()===null?<Login/>:<ProductList/>}/>
      </Routes>
      </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
