import getRandomColor from './utils';

export default function initApp() {
  console.log('Hello world');

  const button = document.createElement("button");
  button.textContent = "Изменить цвет страницы";

  button.addEventListener("click", () => {
    //   console.log(getRandomColor());
      document.body.style.background = getRandomColor();
  });

  document.body.append(button);
}