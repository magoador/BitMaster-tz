import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import "./App.scss";
import taxi from "./assets/img/taxi.svg";
import right__arrow from "./assets/img/right__arrow.svg";

function App() {
  return (
    <div className="App">
      <div className="App__wrapper">
        <div className="App__fText">Детали заказа</div>
        <hr></hr>
        <div className="App__fromRow From">
          <div className="From__Text">Откуда</div>
          <div className="From__Input">
            <input
              type="text"
              placeholder='Введите адрес в формате "Улица, номер дома"'
            />
          </div>
        </div>
        <div className="App__suitableRow Suitable">
          <div className="Suitable__text">Подходящий экипаж:</div>
          <div className="Suitable__card Card">
            <div className="Card__svg">
              <img src={taxi} alt="" />
            </div>
            <div className="Card__carInfo">
              <div className="Card__carName">Chevroler Lacetti</div>
              <div className="Card__carColor">синий</div>
              <span className="Card__carNumbers">Е234КУ</span>
            </div>
          </div>
        </div>
        <div className="App__mapAndListRow MapAndList">
          <div className="MapAndList__map">
            <YMaps>
              <Map
                defaultState={{ center: [47.226851, 39.724724], zoom: 18 }}
                width={1000}
                height={500}
              >
                <Placemark geometry={[47.226851, 39.724724]} />
              </Map>
            </YMaps>
          </div>
          <div className="MapAndList__list List">
            <div className="List__suitable">
              <div className="List__suitableSvg">
                <img src={taxi} alt="" />
              </div>
              <div className="List__suitableInfo">
                <div className="List__suitableNameAndColor">
                  <div className="List__suitableName">Chevroler Lacetti</div>
                  <div className="List__suitableColor">синий</div>
                </div>
                <div className="List__suitableDestination">100м</div>
              </div>
              <div className="List__suitableButton">
                <button>
                  <img src={right__arrow} alt="" />
                </button>
              </div>
            </div>
            <div className="List__suitable">
              <div className="List__suitableSvg">
                <img src={taxi} alt="" />
              </div>
              <div className="List__suitableInfo">
                <div className="List__suitableNameAndColor">
                  <div className="List__suitableName">Chevroler Lacetti</div>
                  <div className="List__suitableColor">синий</div>
                </div>
                <div className="List__suitableDestination">100м</div>
              </div>
              <div className="List__suitableButton">
                <button>
                  <img src={right__arrow} alt="" />
                </button>
              </div>
            </div>
            <div className="List__suitable">
              <div className="List__suitableSvg">
                <img src={taxi} alt="" />
              </div>
              <div className="List__suitableInfo">
                <div className="List__suitableNameAndColor">
                  <div className="List__suitableName">Chevroler Lacetti</div>
                  <div className="List__suitableColor">синий</div>
                </div>
                <div className="List__suitableDestination">100м</div>
              </div>
              <div className="List__suitableButton">
                <button>
                  <img src={right__arrow} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="App__order">
          <button>Заказать</button>
        </div>
      </div>
    </div>
  );
}

export default App;
