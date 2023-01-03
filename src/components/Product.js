import { useDispatch } from "react-redux";
import { addToBasket, removeItemFromBasket } from "../features/basketSlice";

function Product({ title, id }) {
  const dispatch = useDispatch();
  const addItem = () => {
    const product = {
      id,
      title,
    };
    dispatch(addToBasket(product));
  };
  const removeItem = () => {
    dispatch(removeItemFromBasket(id))
  };
  return (
    <div className="flex justify-between p-10 bg-green-700 m-5">
      <p>{title}</p>
      <button onClick={addItem} className="bg-red-600">
        Add To Basket
      </button>
      <button className="bg-green-700" onClick={removeItem}>Remove Item</button>
    </div>
  );
}

export default Product;
