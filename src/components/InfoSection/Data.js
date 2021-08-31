import ImgOne from "../../images/svg-1.svg";
import ImgTwo from "../../images/svg-2.svg";
import ImgThree from "../../images/svg-3.svg";
export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Премиум Банк",
  headline: "Неограниченные транзакции без комиссии",
  description:
    "Получите доступ к нашему приложению, которое позволит вам отправлять неограниченные транзакции без какой-либо комиссии",
  buttonLabel: "Начать сейчас",
  imgStart: false,
  img: ImgOne,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Неограниченный доступ",
  headline: "Вход в учетную запись в любое время",
  description:
    "Мы позаботимся о вас независимо от того, где вы находитесь. Все, что вам нужно, это подключение к Интернету и телефон или компьютер",
  buttonLabel: "Подробнее",
  imgStart: true,
  img: ImgTwo,
  alt: "piggy",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "singup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Присоединяйтесь к команде",
  headline: "Создать учетную запись, легко!",
  description:
    "Все настроено и готово менее чем за 10 минут. Все, что вам нужно сделать, это добавить свою информацию, и вы готовы к работе.",
  buttonLabel: "Начать сейчас",
  imgStart: false,
  img: ImgThree,
  alt: "Car",
  dark: false,
  primary: false,
  darkText: true,
};
