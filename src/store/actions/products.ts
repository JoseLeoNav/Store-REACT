import { createAction } from "@reduxjs/toolkit";

const captureText = createAction("captureText", (obj) => ({
  payload: { text: obj.text },
}));

const calculeTotal = createAction("calculeTotal", (obj) => ({
  payload: { products: obj.products },
}));

const numberCart = createAction ("numberCart", (obj)=>({
  payload: { number : obj.number}
}))
export { captureText, calculeTotal, numberCart };
