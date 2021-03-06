import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Notfound from './components/Notfound/Notfound';
import TopHeader from './components/TopHeader/TopHeader';
import Inventory from './components/Inventory/Inventory';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Register from './components/Register/Register';
import Blogs from './components/Blogs/Blogs';
import UpdateQuantity from './components/UpdateQuantity/UpdateQuantity';
import AddItem from './components/AddItem/AddItem';

function App() {
  return (
    <div className="App">
      <TopHeader></TopHeader>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>} >
        </Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/update/:id' element={
          <RequireAuth>
            <UpdateQuantity />
          </RequireAuth>
        }></Route>
        <Route path='/additem' element={<RequireAuth>
          <AddItem />
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
