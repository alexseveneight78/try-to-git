import Button from "../components/button/button";
import Input from "../components/input/input";

window.addEventListener("DOMContentLoaded", function() {
  let button = new Button({ text: "Тестовая кнопка" });
  let input = new Input({ placeholder: "Тестовый инпут" });

  button.append(document.body);
  input.append(document.body);
});
