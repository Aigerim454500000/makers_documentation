import React from "react";
import "./AddFooterstyle.css";

const AddFooter = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__left">
          <img src="logo-w 2.svg" alt="" />
          <span>Community</span>
          <p>2021</p>
        </div>

        <div className="footer__right">
          <div className="test_class">
            <span>makers</span>
          </div>
          <ul className="right_link">
            <a href="">Lorem Ipsum</a>
            <a href="">Lorem Ipsum</a>
            <a href="">Lorem Ipsum</a>
            <a href="">Lorem Ipsum</a>
            <a href="">Lorem Ipsum</a>
          </ul>

          <ul className="right_link">
            <a href="">Lorem Ipsum</a>
            <a href="">Lorem Ipsum</a>
            <a href="">Lorem Ipsum</a>
            <a href="">Lorem Ipsum</a>
            <a href="">Lorem Ipsum</a>
          </ul>

          <ul className="right_link">
            <a href="">Lorem Ipsum</a>
            <a href="">Lorem Ipsum</a>
            <a href="">Lorem Ipsum</a>
            <a href="">Lorem Ipsum</a>
            <a href="">Lorem Ipsum</a>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default AddFooter;
