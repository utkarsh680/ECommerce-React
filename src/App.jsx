import React from "react";
import { Provider } from "react-redux"; // Import Provider from react-redux
import Product from "./pages/Product";
import store from "./Redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <Product />
        </div>
      </Provider>
    </>
  );
}

export default App;
