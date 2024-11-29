import { useEffect, useState } from "react";
import styled from "styled-components";

function FooterContainer({ className }) {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=f171b402e571f68f1241d1905450b0e8"
    )
      .then((res) => res.json())
      .then(({ main, name, weather }) => {
        setCity(name);
        setTemperature(Math.round(main.temp));
        setWeather(weather[0].description);
      });
  }, []);

  return (
    <div className={className}>
      <div>
        <div>Блог вэб-разработчика</div>
        <div>web@developer.ru</div>
      </div>

      <div>
        <div>
          {city},{" "}
          {new Date().toLocaleString("ru", { day: "numeric", month: "long" })}
        </div>
        <div>
          {temperature} градусов, {weather}
        </div>
        <div>{city}</div>
      </div>
    </div>
  );
}

const Footer = styled(FooterContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 54px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  font-weight: bold;

  position: fixed;
  bottom: 0;
  width: 1320px;
`;

export default Footer;
