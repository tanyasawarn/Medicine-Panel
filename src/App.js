  import Cart from "./Components/Cart/Cart";
  import MedicineForm from "./Components/Medicine/MedicineForm";
import { ShopContextProvider } from "./Components/context/shop-context";
   
function App() {

   

  return (
    
  <ShopContextProvider>
    <MedicineForm/>
  <Cart/>
  </ShopContextProvider>
  );
}

export default App;
