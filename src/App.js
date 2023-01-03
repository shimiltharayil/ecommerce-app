import { useSelector } from "react-redux";
import Product from "./components/Product";
import { selectItems } from "./features/basketSlice";

function App() {

  const items = useSelector(selectItems);

  return (
    <div className="">
      <header className="flex justify-between p-3 items-center">
        <div>
          <h1 className="text-2xl">Papa Store</h1>
        </div>
        <div>
          <h3>Items in your basket:{items.length}</h3>
        </div>
      </header>
      <Product id="1" title="Iphone" />
      <Product id="2" title="I pad" />
      <Product  id="3"title="Mac book" />
    </div>
  );
}

export default App;
