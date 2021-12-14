import React from "react";

const Info = ({ bmi }) => {
  console.log(bmi);
  return (
    <div className="info">
      <h1>Czym jest BMI?</h1>
      <p className="info-text">
        BMI jest jednym z ważnych wskaźniów określających nasz stan fizyczny,
        ale niestety nie wystarczającym. Bardzo ważnym uzupełnieniem BMI jest
        wskaźnik ilości tłuszczu brzusznego - zbyt duży może oznaczać
        niebezpieczną otyłość brzuszną i to nawet przy prawidłowym BMI! Ponadto,
        paradoksalnie, badania naukowe wskazują, że osoby z lekką nadwagą zwykle
        są zdrowsze i żyją dłużej od osób z tzw. "prawidłową wagą". Pojawiają
        się nawet głosy, że ustalony arbitralnie przez WHO próg nadwagi (25)
        jest zbyt niski.
      </p>
      <h1>Zakresy wartości BMI:</h1>
      <p className={bmi < 16 && bmi > 0 ? "active-danger" : null}>
        mniej niż 16 - wygłodzenie
      </p>
      <p className={bmi >= 16 && bmi <= 16.99 ? "active-danger" : null}>
        16 - 16.99 - wychudzenie
      </p>
      <p className={bmi >= 17 && bmi <= 18.49 ? "active-lightdanger" : null}>
        17 - 18.49 - niedowaga
      </p>
      <p className={bmi >= 18.5 && bmi <= 24.99 ? "active-good" : null}>
        18.5 - 24.99 - waga prawidłowa
      </p>
      <p className={bmi >= 25 && bmi <= 29.99 ? "active-lightdanger" : null}>
        25 - 29.99 - nadwaga
      </p>
      <p className={bmi >= 30 && bmi <= 34.99 ? "active-danger" : null}>
        30 - 34.99 - I stopień otyłości
      </p>
      <p className={bmi >= 35 && bmi <= 39.99 ? "active-danger" : null}>
        35 - 39.99 - II stopień otyłości
      </p>
      <p className={bmi > 40 ? "active-danger" : null}>
        powyżej 40 - otyłość skrajna
      </p>
    </div>
  );
};

export default Info;
