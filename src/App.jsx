import { DUMMY_PRODUCTS } from './dummy-products.js';
import Header from './components/shared/Header/Header.jsx'
import Shop from './components/features/Products/Shop.jsx'
import Product from './components/features/Products/Product.jsx';
import CartContextProvider from './components/store/shopping-cart-context.jsx';


function App() {
  return (
    <CartContextProvider>
      <Header />
      <Shop> 
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}</Shop>
    </CartContextProvider>
  );
}

export default App;