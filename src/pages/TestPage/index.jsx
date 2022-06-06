import React from "react";
import pot from "../../assets/img/pot.png";
import pot2 from "../../assets/img/pot12.png";
import pot3 from "../../assets/img/pot13.png";
import "./testpage.css";
export default function TestPage() {
  return (
    <div className="test-page">
      <div className="test-ask ">
        <h3>1. Cách làm nào sau đây là đúng khi nêm gia vị</h3>
        <div className="ask-content ">
          <div className="ask-item ">
            <div className="item-img">
              <img src={pot} alt="" />
              <i class="fa fa-check-circle"></i>
            </div>
            <span>Cho gói bột giặt vào nồi 1</span>
          </div>
          <div className="ask-item ">
            <div className="item-img">
              <img src={pot} alt="" />
              <i class="fa fa-check-circle"></i>
            </div>
            <span>Đun 100 độ cho đến khi phép màu xảy ra</span>
          </div>
          <div className="ask-item ">
            <div className="item-img">
              <img src={pot} alt="" />
              <i class="fa fa-check-circle"></i>
            </div>
            <span>Bỏ cái gì đó cho nước ra màu xanh lá cây</span>
          </div>
          <div className="ask-item ">
            <div className="item-img">
              <img src={pot} alt="" />
              <i class="fa fa-check-circle"></i>
            </div>
            <span>Cho gói bột giặt vào nồi</span>
          </div>
        </div>
      </div>
      <div className="btn-complete">
        <button >
          Hoàn Thành
        </button>
      </div>
    </div>
  );
}
