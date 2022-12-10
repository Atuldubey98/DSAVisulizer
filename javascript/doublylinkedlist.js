const listNodes = document.getElementsByClassName("linked-list")[0];
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(data) {
    let newNode = new ListNode(data);
    this.size++;
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
  printList() {
    let current = this.head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const list = new LinkedList();

window.onload = () => {
  list.append(5);
  list.append(6);
  list.append(7);
  list.append(8);
  refreshLinkedList();
};

const refreshLinkedList = () =>{
  listNodes.innerHTML="";
  let current = list.head;
  while (current != null) {
    listNodes.appendChild(getListNode(current.data));
    current=current.next;
  }
}
const getListNode = (value) => {
  const div = document.createElement("div");
  div.classList.add("list-node");
  div.innerHTML = `<hr />
  <div class="list-prev"></div>
  <div class="list-data">${value}</div>
  <div class="list-next"></div>
  <hr />`;
  return div;
};

const appendToLinkedList = ()=>{
  const valueNode = document.getElementById("valueToAppend");
  if (valueNode === null  || valueNode.value==="")return;
  // Fetch the previous node and change the color.
  if (list.size !== 0) {
    setTimeout(() => {
      refreshLinkedList();
    }, 500);
  }
  list.append(valueNode.value);
  valueNode.value = "";
}