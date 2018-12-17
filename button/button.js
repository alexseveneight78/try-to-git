export default function button() {
  let button = document.createElement("button");
  button.innerHTML = "Push me with effort!";
  document.body.appendChild(button);
}
button();
