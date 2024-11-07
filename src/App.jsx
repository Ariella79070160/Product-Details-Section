import { Routes, Route } from 'react-router-dom';
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage';

import './App.css'



function App() {


  return (
    <Routes>
      <Route path="/" element={<ProductDetailPage />} />
    </Routes>
  )
}

export default App
