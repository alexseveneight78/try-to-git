import Block from "../block";

export default class Input extends Block {
  get name() {
    return "input";
  }
  /*текст кнопки, тип инпута*/
  constructor({ placeholder, type = "text", value = "" }) {
    super();

    this.el.classList.toggle("input", true);
    this.el.type = type;
    this.el.placeholder = placeholder;
    this.el.value = value;
  }
}
