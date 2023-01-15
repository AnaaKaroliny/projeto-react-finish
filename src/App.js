import React, { useState, useEffect } from "react";
import Basket from "./components/Basket/Basket";
import { Container } from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import data from "./database";

import GlobalStyle from "./GlobalStyle";

function App() {
  const { products } = data;

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("carrinho de produtos")) || []
  );
  const [query, setQuery] = useState("");
  const [orderParam, setOrderParam] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(+Infinity);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const handleInputQuery = (event) => setQuery(event.target.value);
  const handleInputOrderParam = (event) => setOrderParam(event.target.value);
  const handleInputMin = (event) => setMinPrice(event.target.value);
  const handleInputMax = (event) => setMaxPrice(event.target.value);

  const clearCart = () => {
    return setCartItems([]);
  };

  const checkoutCart = () => {
    return alert("Completed purchase, thank you!!"), setCartItems([]);
  };

  useEffect(() => {
    localStorage.setItem("carrinho de produtos", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div>
      <GlobalStyle />
      <Header countCartItems={cartItems.length}></Header>
      <Container>
        <Main
          onAdd={onAdd}
          products={products}
          query={query}
          orderParam={orderParam}
          inputQuery={handleInputQuery}
          inputOrder={handleInputOrderParam}
          handleMin={handleInputMin}
          handleMax={handleInputMax}
          minPrice={minPrice}
          maxPrice={maxPrice}
        ></Main>
        <Basket
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}
          clearCart={clearCart}
          checkoutCart={checkoutCart}
        ></Basket>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
