import React, { useState } from "react";
import pot1 from "../../assets/img/pot1.png";
import pot2 from "../../assets/img/pot2.png";
import pot3 from "../../assets/img/pot3.png";
import "./index.css";
export default function Search() {
  return (
    <div className="search">
      <div className="search-text">
        <span>Các bước để có 1 nồi nước đẩy đủ mùi vị thơm ngon</span>
      </div>
      <div className="search-pot">
        <div className="search-pot-img">
          <div className="img img1">
            <div className="text">
              <span>1. 2.0 Lít nước vào nồi</span>
            </div>
            <img src={pot1} alt="" srcset="" />
          </div>
          <div className="img img2">
            <div className="text">
              <span>2. Cho gói enzyme và gia vị vào</span>
            </div>
            <img src={pot2} alt="" srcset="" />
          </div>
          <div className="img img3">
            <div className="text">
              <span>3. Căn chỉnh đúng nhiệt độ 100 độ C</span>
            </div>

            <img src={pot3} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}
