import React, { useState } from "react";
import Swal from "sweetalert2";
import pot from "../../assets/img/pot.png";
import pot2 from "../../assets/img/pot12.png";
import pot3 from "../../assets/img/pot13.png";
import "./testpage.css";
export default function TestPage() {
  const [test, setTest] = useState({
    questionRadio: "",
    question: "",
  });
  const handleChangeRadio = (e) => {
    const { name, value } = e.target;
    setTest({ ...test, [name]: value });
  };
  console.log(test);
  const handleSubmit = (e) =>{
    e.preventDefault()
    Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
      },
      buttonsStyling: false,
    }).fire({
      title: "",
      html: `<a  style="color: #27ae60">Xin chúc mừng đã hoàn thiện bài khảo sát</a>`,
      icon: "success",
      confirmButtonText: "Xác Nhận",
    });
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="test-page">
      <h1 className="text-center mb-5">Hoàn thiện bài khảo sát</h1>
      <div className="test-ask ">
        <h3>1. Cách làm nào sau đây là đúng khi nêm gia vị</h3>
        <div className="ask-content">
          <div className="ask-item ">
            <div className="item-img">
              <a href="#">
                <label htmlFor="nav-question-1">
                  <img src={pot} alt="" />
                  <i class="fa fa-check-circle"></i>
                </label>
              </a>
              <input
                type="radio"
                name="question"
                onChange={handleChangeRadio}
                value="cau1"
                id="nav-question-1"
              />
            </div>
            <span>Đun 100 độ cho đến khi phép màu xảy ra</span>
          </div>
          <div className="ask-item ">
            <div className="item-img">
              <a href="#">
                <label htmlFor="nav-question">
                  <img src={pot} alt="" />
                  <i class="fa fa-check-circle"></i>
                </label>
              </a>
              <input
                type="radio"
                name="question"
                onChange={handleChangeRadio}
                value="cau2"
                id="nav-question"
              />
            </div>
            <span>Đun 100 độ cho đến khi phép màu xảy ra</span>
          </div>
          <div className="ask-item ">
            <div className="item-img">
              <a href="#">
                <label htmlFor="nav-question-2">
                  <img src={pot} alt="" />
                  <i class="fa fa-check-circle"></i>
                </label>
              </a>
              <input
                type="radio"
                name="question"
                onChange={handleChangeRadio}
                value="cau3"
                id="nav-question-2"
              />
            </div>
            <span>Bỏ cái gì đó cho nước ra màu xanh lá cây</span>
          </div>
          <div className="ask-item ">
            <div className="item-img">
              <a href="#">
                <label htmlFor="nav-question-3">
                  <img src={pot} alt="" />
                  <i class="fa fa-check-circle"></i>
                </label>
              </a>
              <input
                type="radio"
                name="question"
                onChange={handleChangeRadio}
                value="cau4"
                id="nav-question-3"
              />
            </div>
            <span>Cho gói bột giặt vào nồi</span>
          </div>
        </div>
      </div>
      <div className="test-ask">
        <h3>2. Cách làm nào sau đây là đúng khi nêm gia vị</h3>
        <div className="ask-content-second">
          <div className="ask-item ">
            <label htmlFor="radio-toggle-1">
              <input
                type="radio"
                name="questionRadio"
                value="câu này đúng"
                onChange={handleChangeRadio}
                id="radio-toggle-1"
              />
              <div className="checkmark">
                <i class="fa fa-check"></i>
              </div>
              <span>Cho gói bột giặt vào nồi 1</span>
            </label>
          </div>
          <div className="ask-item ">
            <label htmlFor="radio-toggle-2">
              <input
                type="radio"
                name="questionRadio"
                value="câu này đúng"
                onChange={handleChangeRadio}
                id="radio-toggle-2"
              />
              <div className="checkmark">
                <i class="fa fa-check"></i>
              </div>
              <span>Cho gói bột giặt vào nồi 1</span>
            </label>
          </div>
          <div className="ask-item ">
          <label htmlFor="radio-toggle-3">
            <input
              type="radio"
              name="questionRadio"
              value="câu này sai"
              onChange={handleChangeRadio}
              id="radio-toggle-3"
            />
            <div className="checkmark">
              <i class="fa fa-check"></i>
            </div>
              <span>Bỏ cái gì đó cho nước ra màu xanh lá cây</span>
            </label>
          </div>
          <div className="ask-item ">
          <label htmlFor="radio-toggle-4">
            <input
              type="radio"
              name="questionRadio"
              value="câu này ..."
              onChange={handleChangeRadio}
              id="radio-toggle-4"
            />
            <div className="checkmark">
              <i class="fa fa-check"></i>
            </div>
              <span>Bỏ cái gì đó cho nước ra màu xanh lá cây</span>
            </label>
          </div>
        </div>
      </div>
      <div className="test-ask ">
        <h3>3. Cách làm nào sau đây là đúng khi nêm gia vị</h3>
        <div className="ask-content">
          <div className="ask-item ">
            <div className="item-img">
              <a href="#">
                <label htmlFor="nav-question-1">
                  <img src={pot} alt="" />
                  <i class="fa fa-check-circle"></i>
                </label>
              </a>
              <input
                type="radio"
                name="question"
                onChange={handleChangeRadio}
                value="cau1"
                id="nav-question-1"
              />
            </div>
            <span>Đun 100 độ cho đến khi phép màu xảy ra</span>
          </div>
          <div className="ask-item ">
            <div className="item-img">
              <a href="#">
                <label htmlFor="nav-question-5">
                  <img src={pot} alt="" />
                  <i class="fa fa-check-circle"></i>
                </label>
              </a>
              <input
                type="radio"
                name="question"
                onChange={handleChangeRadio}
                value="cau2"
                id="nav-question-5"
              />
            </div>
            <span>Đun 100 độ cho đến khi phép màu xảy ra</span>
          </div>
          <div className="ask-item ">
            <div className="item-img">
              <a href="#">
                <label htmlFor="nav-question-6">
                  <img src={pot} alt="" />
                  <i class="fa fa-check-circle"></i>
                </label>
              </a>
              <input
                type="radio"
                name="question"
                onChange={handleChangeRadio}
                value="cau3"
                id="nav-question-6"
              />
            </div>
            <span>Bỏ cái gì đó cho nước ra màu xanh lá cây</span>
          </div>
          <div className="ask-item ">
            <div className="item-img">
              <a href="#">
                <label htmlFor="nav-question-7">
                  <img src={pot} alt="" />
                  <i class="fa fa-check-circle"></i>
                </label>
              </a>
              <input
                type="radio"
                name="question"
                onChange={handleChangeRadio}
                value="cau4"
                id="nav-question-7"
              />
            </div>
            <span>Cho gói bột giặt vào nồi</span>
          </div>
        </div>
      </div>
      <div className="test-ask">
        <h3>4. Cách làm nào sau đây là đúng khi nêm gia vị</h3>
        <div className="ask-content-second">
          <div className="ask-item ">
            <label htmlFor="radio-toggle-8">
              <input
                type="radio"
                name="questionRadio"
                value="câu này đúng"
                onChange={handleChangeRadio}
                id="radio-toggle-8"
              />
              <div className="checkmark">
                <i class="fa fa-check"></i>
              </div>
              <span>Cho gói bột giặt vào nồi 1</span>
            </label>
          </div>
          <div className="ask-item ">
            <label htmlFor="radio-toggle-9">
              <input
                type="radio"
                name="questionRadio"
                value="câu này đúng"
                onChange={handleChangeRadio}
                id="radio-toggle-9"
              />
              <div className="checkmark">
                <i class="fa fa-check"></i>
              </div>
              <span>Cho gói bột giặt vào nồi 1</span>
            </label>
          </div>
          <div className="ask-item ">
          <label htmlFor="radio-toggle-10">
            <input
              type="radio"
              name="questionRadio"
              value="câu này sai"
              onChange={handleChangeRadio}
              id="radio-toggle-10"
            />
            <div className="checkmark">
              <i class="fa fa-check"></i>
            </div>
              <span>Bỏ cái gì đó cho nước ra màu xanh lá cây</span>
            </label>
          </div>
          <div className="ask-item ">
          <label htmlFor="radio-toggle-11">
            <input
              type="radio"
              name="questionRadio"
              value="câu này ..."
              onChange={handleChangeRadio}
              id="radio-toggle-11"
            />
            <div className="checkmark">
              <i class="fa fa-check"></i>
            </div>
              <span>Bỏ cái gì đó cho nước ra màu xanh lá cây</span>
            </label>
          </div>
        </div>
      </div>
      <div className="test-ask ">
        <h3>5. Cách làm nào sau đây là đúng khi nêm gia vị</h3>
        <div className="ask-content">
          <div className="ask-item ">
            <div className="item-img">
              <a href="#">
                <label htmlFor="nav-question-12">
                  <img src={pot} alt="" />
                  <i class="fa fa-check-circle"></i>
                </label>
              </a>
              <input
                type="radio"
                name="question"
                onChange={handleChangeRadio}
                value="cau1"
                id="nav-question-12"
              />
            </div>
            <span>Đun 100 độ cho đến khi phép màu xảy ra</span>
          </div>
          <div className="ask-item ">
            <div className="item-img">
              <a href="#">
                <label htmlFor="nav-question-13">
                  <img src={pot} alt="" />
                  <i class="fa fa-check-circle"></i>
                </label>
              </a>
              <input
                type="radio"
                name="question"
                onChange={handleChangeRadio}
                value="cau2"
                id="nav-question-13"
              />
            </div>
            <span>Đun 100 độ cho đến khi phép màu xảy ra</span>
          </div>
          <div className="ask-item ">
            <div className="item-img">
              <a href="#">
                <label htmlFor="nav-question-14">
                  <img src={pot} alt="" />
                  <i class="fa fa-check-circle"></i>
                </label>
              </a>
              <input
                type="radio"
                name="question"
                onChange={handleChangeRadio}
                value="cau3"
                id="nav-question-14"
              />
            </div>
            <span>Bỏ cái gì đó cho nước ra màu xanh lá cây</span>
          </div>
          <div className="ask-item ">
            <div className="item-img">
              <a href="#">
                <label htmlFor="nav-question-15">
                  <img src={pot} alt="" />
                  <i class="fa fa-check-circle"></i>
                </label>
              </a>
              <input
                type="radio"
                name="question"
                onChange={handleChangeRadio}
                value="cau4"
                id="nav-question-15"
              />
            </div>
            <span>Cho gói bột giặt vào nồi</span>
          </div>
        </div>
      </div>
      <div className="test-ask">
        <h3>6. Cách làm nào sau đây là đúng khi nêm gia vị</h3>
        <div className="ask-content-second">
          <div className="ask-item ">
            <label htmlFor="radio-toggle-1">
              <input
                type="radio"
                name="questionRadio"
                value="câu này đúng"
                onChange={handleChangeRadio}
                id="radio-toggle-1"
              />
              <div className="checkmark">
                <i class="fa fa-check"></i>
              </div>
              <span>Cho gói bột giặt vào nồi 1</span>
            </label>
          </div>
          <div className="ask-item ">
            <label htmlFor="radio-toggle-1">
              <input
                type="radio"
                name="questionRadio"
                value="câu này đúng"
                onChange={handleChangeRadio}
                id="radio-toggle-1"
              />
              <div className="checkmark">
                <i class="fa fa-check"></i>
              </div>
              <span>Cho gói bột giặt vào nồi 1</span>
            </label>
          </div>
          <div className="ask-item ">
          <label htmlFor="radio-toggle-2">
            <input
              type="radio"
              name="questionRadio"
              value="câu này sai"
              onChange={handleChangeRadio}
              id="radio-toggle-2"
            />
            <div className="checkmark">
              <i class="fa fa-check"></i>
            </div>
              <span>Bỏ cái gì đó cho nước ra màu xanh lá cây</span>
            </label>
          </div>
          <div className="ask-item ">
          <label htmlFor="radio-toggle-3">
            <input
              type="radio"
              name="questionRadio"
              value="câu này ..."
              onChange={handleChangeRadio}
              id="radio-toggle-3"
            />
            <div className="checkmark">
              <i class="fa fa-check"></i>
            </div>
              <span>Bỏ cái gì đó cho nước ra màu xanh lá cây</span>
            </label>
          </div>
        </div>
      </div>
      <div className="btn-complete mb-5">
        <button onClick={handleSubmit}>Hoàn Thành</button>
      </div>
    </div>
    </form>
  );
}
