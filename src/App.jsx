import React from "react";
import Css from "./app.css";
import Header from "./components/Header/Header";
import img from "./photo/Group 1.svg";
console.log(Css);
const App = () => {
  return (
    <div className="all">
      <Header />

      <div className="MainContent">
        <div className="number">0</div>
        <div className="btn">
          <button className="first">Увеличить</button>
          <button className="second">Уменшить</button>
          <button className="third">Сбросить</button>
        </div>
      </div>

      <div className="footer">
        <div className="footerF">
          <div>
            <img src={img} alt="21" />
          </div>

          <p>Партнерам</p>
          <p>Разработчикам</p>
          <p>Вакансии</p>
        </div>
        <div className="intucod">
          <p> OOO "интукод",2020</p>
        </div>
      </div>
    </div>
  );
};

export default App;
