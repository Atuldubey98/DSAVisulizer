const queue = [];
window.onload = (e) => {
  for (
    let index = 0;
    index < document.getElementsByClassName("col").length;
    index++
  ) {
    document
      .getElementsByClassName("col")
      [index].addEventListener("click", (e) => {
        enqueue(e.target.id);
        displayQueue();
        setTimeout(() => {
          dequeue();
          displayQueue();
        }, 5000);
      });
  }
};

const getCube = (value) => {
  return `<div id="queue__cube${value}" class="queue__cube">${value}</div>`;
};

const displayQueue = () => {
  let queueById = document.getElementById("queue");
  queueById.innerHTML = "";
  let inner = "";
  for (const element of queue) {
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

const enqueue = (value) => {
  if (queue.length < 9) {
    queue.push(value);
    changeColorRed(value);
  }
};
const dequeue = () => {
  if (queue.length > 0) {
    const id = queue.shift();
    changeColorWhite(id);
  }
};
