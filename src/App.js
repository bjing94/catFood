import Flexbox from "./components/Flexbox";
import Typography from "./components/Typography";
import CatCard from "./components/CatCard";
import { catFood } from "./mockData";
import { useState } from "react";

import "./App.css";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  const cards = catFood.map(({ inStock, id, ...rest }) => {
    return (
      <CatCard
        key={`cat-card-${id}`}
        disabled={!inStock}
        selected={shoppingCart.includes(id)}
        {...rest}
        onBuy={() => {
          if (!inStock) return;
          if (shoppingCart.includes(id)) {
            const idx = shoppingCart.indexOf(id);
            const newShoppingCart = [...shoppingCart];
            newShoppingCart.splice(idx, 1);
            setShoppingCart(newShoppingCart);
          } else {
            const newShoppingCart = [...shoppingCart, id];
            setShoppingCart(newShoppingCart);
          }
        }}
      />
    );
  });

  return (
    <div className="App">
      <Flexbox
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        fluid
      >
        <Typography fontSize={36} color="primary" textAlign="center">
          Ты сегодня покормил кота?
        </Typography>
        <Flexbox justifyContent="center" fluid>
          {cards}
        </Flexbox>
      </Flexbox>
    </div>
  );
}

export default App;
