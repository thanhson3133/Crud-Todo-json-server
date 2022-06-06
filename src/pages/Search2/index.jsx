import React, { useState } from "react";
import pot1 from "../../assets/img/pot11.png";
import pot2 from "../../assets/img/pot12.png";
import pot3 from "../../assets/img/pot13.png";
import "./style.css";
export default function Search2() {
  return (
    <div className="search2">
      <div className="search2-text">
        <span>Các bước để có nồi nước dùng Bún Soul</span>
      </div>
      <div className="search2-pot">
        <div className="search2-pot-img">
          <div className="img img1">
            <div className="img-hover">
              <img src={pot1} alt="" srcset="" />
            </div>
            <div className="text">
              <span>Cho gói enzyme và gia vị vào</span>
            </div>
          </div>
          <div className="img img2">
            <div className="img-hover">
              <img src={pot2} alt="" srcset="" />
            </div>
            <div className="text">
              <span>Căn chỉnh đúng nhiệt độ 100 độ C</span>
            </div>
          </div>
          <div className="img img3">
            <div className="img-hover">
              <img src={pot3} alt="" srcset="" />
            </div>

            <div className="text">
              <span>2.0 Lít nước vào nồi</span>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-ask">
        <button className="btn btn-success">Trả Lời</button>
      </div>
    </div>
  );
}
