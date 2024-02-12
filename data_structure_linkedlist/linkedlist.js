//take input from user
const readlineSync = require('readline-sync');

// create a Node 
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * 
   * @param {*} data 
   * @param {*} position 
   * @param {*} list 
   */
  // Add node at any position start from 0 to last 
  // all operartions in one code 
  static addNode(data, position, list) {
    const newNode = new Node(data);

    if (!list.head || position === 0) {
      newNode.next = list.head;       //new node next = previous head
      list.head = newNode;           //head is at start that is new one
    } else {
      let current = list.head;
      let count = 0;
      while (current.next && count < position - 1) {
        current = current.next;
        count++;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  // Delete node from any position
  static deleteNode(position, list) {
    if (!list.head) {
      return;
    }

    if (position === 0) {
      list.head = list.head.next;
      return;
    }

    let current = list.head;
    let count = 0;
    while (current.next && count < position - 1) {
      current = current.next;
      count++;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  // Print linked list -
  static printList(list) {
    let temp= "";
    let current = list.head;

    while (current) {
      result += current.data;
      if (current.next) {
        temp += " -> ";
      } 
      current = current.next;
    }

    return result || "Empty List";
  }
}

// Example usage with user input:

const linkedList = new LinkedList();

while (true) {
  const operation = readlineSync.question(
    "Enter operation (add/delete/print/exit): "
  ).toLowerCase();

  if (operation === "exit") {
    break;
  }

  switch (operation) {
    case "add":
      const dataToAdd = readlineSync.question("Enter data to add: ");
      const positionToAdd = readlineSync.question("Enter position to add: ");
      LinkedList.addNode(parseInt(dataToAdd), parseInt(positionToAdd), linkedList);
      break;

    case "delete":
      const positionToDelete = readlineSync.question("Enter position to delete: ");
      LinkedList.deleteNode(parseInt(positionToDelete), linkedList);
      break;

    case "print":
      console.log(LinkedList.printList(linkedList));
      break;

    default:
      console.log("Invalid operation. Please try again.");
  }
}
  
  