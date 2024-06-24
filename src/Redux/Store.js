import { configureStore } from "@reduxjs/toolkit";
import  countslice  from "./Counterslice";

export default configureStore({
  reducer:{
    countslice
  }
})