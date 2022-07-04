import React from "react";
import { Outlet } from "react-router-dom";

const state = {
  products: [],
  sourceProducts: [],
};

const ProductsPage = () => {
  return (
    <>
      <div>ProductsPage</div>
      <Outlet />
    </>
  );
};

export default ProductsPage;
