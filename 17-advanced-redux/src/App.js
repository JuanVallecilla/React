import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import { sendCartData, fetchCartData } from "./store/cart-actions";
import Layout from "./components/Layout/Layout";
import Notification from "./components/UI/Notification";
import Products from "./components/Shop/Products";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsvisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      <Layout>
        {showCart && <Cart />}
        {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
