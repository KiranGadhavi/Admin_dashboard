//import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './styles/App.scss'
import Loader from './components/Loader';
import {Suspense, lazy} from 'react';

const Dashboard =lazy(()=> import("./pages/Dashboard"));
const Products =lazy(()=> import("./pages/Products"));
const Customers =lazy(()=> import("./pages/Customers"));
const Transaction =lazy(()=> import("./pages/Transaction"));
function App() {
  

  return (
    <Router>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/products' element={<Products/>}/>
        <Route path='/admin/customers' element={<Customers/>}/>
        <Route path='/admin/transaction' element={<Transaction/>}/>
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App
