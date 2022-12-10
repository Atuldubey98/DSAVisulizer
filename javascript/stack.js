const stack = [];
window.onload = (e) => {
  for (
    let index = 0;
    index < document.getElementsByClassName("col").length;
    index++
  ) {
    document
      .getElementsByClassName("col")
      [index].addEventListener("click", (e) => {
        push(e.target.id);
        displayStack();
        setTimeout(() => {
          pop();
          displayStack();
        }, 5000);
      });
  }
};

const getCube = (value) => {
  return `<div id="stack__cube${value}" class="stack__cube">${value}</div>`;
};

const displayStack = () => {
  let queueById = document.getElementById("stack");
  queueById.innerHTML = "";
  let inner = "";
  for (const element of stack) {
    inner += getCube(element);
  }
  queueById.innerHTML = inner;
};

const changeColorRed = (id) => {
  document.getElementById(id).className = "col col-red";
};
const changeColorWhite = (id) => {
  document.getElementById(id).className = "col col-white";
};

const push = (value) => {
  if (stack.length < 9) {
    stack.push(value);
    changeColorRed(value);
  }
};
const pop = () => {
  if (stack.length > 0) {
    const id = stack.pop();
    changeColorWhite(id);
  }
};
