//import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './styles/App.scss'
import Loader from './components/Loader';
import {Suspense, lazy} from 'react';

const Dashboard =lazy(()=> import("./pages/Dashboard"));
const Products =lazy(()=> import("./pages/Products"));
const Customers =lazy(()=> import("./pages/Customers"));
const Transaction =lazy(()=> import("./pages/Transaction"));
const NewProduct =lazy(()=> import("./management/NewProduct"));
const ProductManagement =lazy(()=> import("./management/ProductManagement"));
const TransactionManagement =lazy(()=> import("./management/TransactionManagement"));
const BarCharts =lazy(()=> import("./pages/charts/BarCharts"));
const PieCharts =lazy(()=> import("./pages/charts/PieCharts"));
const LineCharts =lazy(()=> import("./pages/charts/LineCharts"));

function App() {
  

  return (
    <Router>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/products' element={<Products/>}/>
        <Route path='/admin/customers' element={<Customers/>}/>
        <Route path='/admin/transaction' element={<Transaction/>}/>
        <Route path='/admin/product/new' element={<NewProduct/>}/>
        <Route path='/admin/product/:id' element={<ProductManagement/>}/>
        <Route path='/admin/transaction/:id' element={<TransactionManagement/>}/>
        <Route path='/admin/chart/bar' element={<BarCharts/>}/>
        <Route path='/admin/chart/pie' element={<PieCharts/>}/>
        <Route path='/admin/chart/line' element={<LineCharts/>}/>
      
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App