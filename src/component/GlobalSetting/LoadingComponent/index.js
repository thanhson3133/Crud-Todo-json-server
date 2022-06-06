import React from "react";
import { useSelector } from "react-redux";
import img from "../../../assets/img/loading.gif";
import "./styles.css";
export default function Loading() {
  const loading = useSelector((state) => state.LoadingReducer.isloading);
  if(loading){
    return (
        <div className="bgLoading">
          <img src={img} />
        </div>
      );
  }
  else{
    return ''
  }
}
