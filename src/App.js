import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Header from './components/includes/Header';
import ProductDetails from './pages/ProductDetails';
import CategoryDetails from './pages/CategoryDetails';
import CartDetails from './pages/CartDetails';
import CategoryFormal from './pages/CategoryFormal';
import CategoryParty from './pages/CategoryParty';
import CategoryGynm from './pages/CategoryGynm';

function App() {
  return (

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup" element={<Header />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/CategoryDetails" element={<CategoryDetails />} />
          <Route path="/CartDetails" element={<CartDetails />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/product/:id" element={<CartDetails/>} />
          <Route path="/CategoryFormal" element={<CategoryFormal />} />
          <Route path="/CategoryParty" element={<CategoryParty />} />
          <Route path="/CategoryGynm" element={<CategoryGynm />} />
        </Routes>
      </Router>
  );
}

export default App;
