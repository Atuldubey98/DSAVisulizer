let elementToAdd = document.getElementById("elementToAdd");
let container = document.getElementById("container");
let area = document.getElementById("area");
let listNodes = document.getElementsByClassName("list-node");
let elementToBeAdded = document.getElementById("elementToBeAdded");
let indexToAdd = document.getElementById("indexToAdd");
class ListNode {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }
  appendToList(element) {
    if (this.head == null) {
      this.head = new ListNode(element);
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new ListNode(element);
    this.size++;
  }
  appendElementAtIndex(element, index) {
    if (index > this.size) {
      return;
    }
    const newNode = new ListNode(element);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return;
    }
    let current = this.head;
    console.log({ index, element });
    while (index-- >= 0) {
      if (index === 0) {
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
        return;
      }
      current = current.next;
    }
  }
  deleteByKey(index) {
    if (this.head == null || index < 0) {
      return false;
    }

    let current = this.head;
    if (index === 0) {
      if (this.head == null) {
        return false;
      }
      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      return true;
    }
    while (index-- > 0) {
      if (index == 0) {
        let temp = current.next;
        current.next = current.next.next;
        temp.next = null;
        return true;
      }
      current = current.next;
    }
    return false;
  }
}
let list = new LinkedList();
window.onload = (e) => {
  list.appendToList(6);
  list.appendToList(7);
  list.appendToList(8);
  list.appendToList(9);
  displayAllNode(list.head);
};

const appendToList = () => {
  if (!elementToAdd?.value || area.offsetWidth + 150 > container.offsetWidth) {
    return;
  }
  list.appendToList(elementToAdd?.value);
  displayAllNode(list.head);
};

const displayAllNode = () => {
  let current = list.head;
  area.innerHTML = "";
  while (current != null) {
    area.appendChild(listNodeElement(current.element));
    current = current.next;
  }
};
const listNodeElement = (value) => {
  let element = document.createElement("div");
  element.addEventListener("click", (e) => {
    let index = getIndexOfNode(e.currentTarget.id);
    console.log({ index });
    if (index !== -1) {
      frontNodeColorChange(e.currentTarget.id, "list-link","red");
      if (index !== 0) {
        const id = getIdByIndex(Number(index - 1));
        frontNodeColorChange(id, "list-link","red");
      }
      list.deleteByKey(index);
      setTimeout(() => {
        displayAllNode(list.head);
      }, 500);
    }
  });
  element.setAttribute("id", Math.floor(Math.random() * 100000));
  element.className = "list-node";
  element.innerHTML = `<div class="list-data">${value}</div>
    <div class="list-next"></div>
    <div class="list-link"></div>`;
  return element;
};

const addAtIndexElement = () => {
  if (elementToBeAdded === null && !elementToBeAdded?.value) {
    return;
  }
  if (indexToAdd === null && !indexToAdd?.value) {
    return;
  }

  list.appendElementAtIndex(
    Number(elementToBeAdded.value),
    Number(indexToAdd.value)
  );
  const frontId = getIdByIndex(Number(indexToAdd.value));
  frontNodeColorChange(frontId,"list-data", "green");
  frontNodeColorChange(frontId , "list-link", "red");
  frontNodeColorChange(frontId, "list-next", "green");
  setTimeout(() => {
    displayAllNode();
  }, 1000);
};
const getIndexOfNode = (id) => {
  for (let i = 0; i < listNodes.length; i++) {
    if (listNodes[i].id === id) {
      return i;
    }
  }
  return -1;
};

const getIdByIndex = (index) => {
  for (let i = 0; i <= index; i++) {
    if (index === i) {
      return listNodes[i].id;
    }
  }
  return -1;
};
const frontNodeColorChange = (id, className, color)=>{
  return document.getElementById(id).getElementsByClassName(className)[0].style.cssText=`border-color:${color};`;
}