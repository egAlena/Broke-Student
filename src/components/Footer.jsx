import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer>
        <div className="footer1">
          <img width="367px" src="../public/img/logo1.png" alt="лого" />
          <p>© 2025 ИП ЕГОРОВА АЛЕНА МИХАЙЛОВНА</p>
      </div>
      <div className="footer2" id="contacts">
          <h1>КОНТАКТЫ</h1>
          <p>телефон: +7 (914) 226-51-83</p>
          <p>почта: egorovaal2915@mail.ru</p>
          <p>адрес: ул. Кулаковского 48</p>
      </div>
      <div className="footer3">
          <h1>ПРАВОВАЯ ИНФОРМАЦИЯ</h1>
          <p>ИНН 123456789012</p>
          <p>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</p>
          <p>ОФЕРТА</p>
      </div>
    </footer>
  );
};
export default Footer;