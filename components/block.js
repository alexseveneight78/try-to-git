export default class Block {
  get name() {
    throw new Error("Invalid component name");
  }

  constructor() {
    this.el = document.createElement(this.name);
  }

  append(root) {
    root.appendChild(this.el);
  }
}
