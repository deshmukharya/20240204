// Take input from the user
const readlineSync = require('readline-sync');

// Create a Node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Create a LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }
  /**
   * Add a node to the linked list at a specified position.
   * @param {Number} data - Data to be added to the node.
   * @param {Number} position - Position at which the node should be added (starting from 0).
   * @param {LinkedList} list - The linked list to which the node should be added.
   */
  static addNode(data, position, list) {
    const newNode = new Node(data);

    // If the list is empty or the position is 0, add the node at the beginning.
    if (!list.head || position === 0) {
      newNode.next = list.head;
      list.head = newNode;
    } else {
      let current = list.head;
      let count = 0;

      // Traverse the list to find the node before the specified position.
      while (current.next && count < position - 1) {
        current = current.next;
        count++;
      }

      // Insert the new node into the list at the specified position.
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  /**
   * Delete a node from the linked list at a specified position.
   * @param {Number} position - Position of the node to be deleted.
   * @param {LinkedList} list - The linked list from which the node should be deleted.
   */
  static deleteNode(position, list) {
    // If the list is empty, return.
    if (!list.head) {
      return;
    }

    // If the position is 0, delete the node at the beginning.
    if (position === 0) {
      list.head = list.head.next;
      return;
    }

    let current = list.head;
    let count = 0;

    // Traverse the list to find the node before the specified position.
    while (current.next && count < position - 1) {
      current = current.next;
      count++;
    }

    // If the next node exists, update the pointers to delete the node.
    if (current.next) {
      current.next = current.next.next;
    }
  }

  /**
   * Print the elements of the linked list in a readable format.
   * @param {LinkedList} list - The linked list to be printed.
   * @returns {String} - A formatted string representing the linked list.
   */
  static printList(list) {
    let result = ""; // Initialize an empty string to store the result.
    let current = list.head;

    // Traverse the list and concatenate the data to the result string.
    while (current) {
      result += current.data;
      if (current.next) {
        result += " -> ";
      }
      current = current.next;
    }

    // Return the result string or "Empty List" if the list is empty.
    return result || "Empty List";
  }
}

// Example usage with user input:

const linkedList = new LinkedList(); // Create a new linked list.

// Infinite loop to continuously take user input.
while (true) {
  // Prompt the user to enter an operation.
  const operation = readlineSync.question(
    "Enter operation (add/delete/print/exit): "
  ).toLowerCase();

  // Check if the user wants to exit the loop.
  if (operation === "exit") {
    break;
  }

  // Switch statement to perform different operations based on user input.
  switch (operation) {
    case "add":
      // Prompt the user to enter data and position for adding a node.
      const dataToAdd = readlineSync.question("Enter data to add: ");
      const positionToAdd = readlineSync.question("Enter position to add: ");
      // Call the addNode function to add a node to the linked list.
      LinkedList.addNode(parseInt(dataToAdd), parseInt(positionToAdd), linkedList);
      break;

    case "delete":
      // Prompt the user to enter the position for deleting a node.
      const positionToDelete = readlineSync.question("Enter position to delete: ");
      // Call the deleteNode function to delete a node from the linked list.
      LinkedList.deleteNode(parseInt(positionToDelete), linkedList);
      break;

    case "print":
      // Call the printList function to print the elements of the linked list.
      console.log(LinkedList.printList(linkedList));
      break;

    default:
      console.log("Invalid operation. Please try again.");
  }
}
  
