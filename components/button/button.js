import Block from "../block";

export default class Button extends Block {
  get name() {
    return "button";
  }
  /*Кнопка + текст кнопки*/
  constructor({ text, type = "button" }) {
    super();
    this.el.textContent = text;
    this.el.classList.toggle("button");
    this.el.type = type;
  }
}
