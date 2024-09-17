export class LinkedList {
  #head;

  constructor() {
    this.#head = null;
  }

  append(value) {
    let newNode = new Node();
    newNode.value = value;

    if (this.#head === null) {
      this.#head = newNode;
    } else {
      this.tail().next = newNode;
    }
  }

  prepend(value) {
    let newNode = new Node();
    newNode.value = value;

    if (this.#head === null) {
      this.#head = newNode;
    } else {
      newNode.next = this.#head;
    }
  }

  size() {
    let counter = 1;
    let pointer = this.#head;
    if (this.#head === null) {
      return 0;
    } else {
      while (pointer.next !== null) {
        counter++;
        pointer = pointer.next;
      }

      return counter;
    }
  }

  head() {
    if (this.#head === null) {
      return new Error("Linked list is empty.");
    } else {
      return this.#head;
    }
  }

  tail() {
    let pointer = this.#head;

    if (pointer === null) {
      return new Error("Linked list is empty.");
    } else {
      while (pointer.next !== null) {
        pointer = pointer.next;
      }

      return pointer;
    }
  }

  at(index) {
    let counter = 0;
    let pointer = this.#head;

    if (index < 0) {
      return new Error("Index must be non-negative.");
    }
    if (this.#head === null) {
      return new Error("Linked list is empty");
    } else {
      while (counter < index && pointer !== null) {
        counter++;
        pointer = pointer.next;
      }

      if (pointer === null) {
        return new Error("Index out of bounds.");
      } else {
        return pointer;
      }
    }
  }

  pop() {
    let prevPointer = null;
    let currPointer = this.#head;

    if (this.#head === null) {
      return new Error("Linked list is empty.");
    } else if (this.#head.next === null) {
      this.#head = null;
    } else {
      while (currPointer.next !== null) {
        prevPointer = currPointer;
        currPointer = currPointer.next;
      }

      let temp = currPointer;
      prevPointer.next = null;
      return temp;
    }
  }

  contains(value) {
    let pointer = this.#head;

    if (this.#head === null) {
      return new Error("Linked list is empty.");
    } else {
      while (pointer !== null) {
        if (pointer.value === value) {
          return true;
        } else {
          pointer = pointer.next;
        }
      }

      return false;
    }
  }

  find(value) {
    let counter = 0;
    let pointer = this.#head;

    if (this.#head === null) {
      return new Error("Linked list is empty.");
    } else {
      while (pointer !== null) {
        if (pointer.value === value) {
          return counter;
        } else {
          pointer = pointer.next;
          counter++;
        }
      }

      return null;
    }
  }

  toString() {
    let output = "";
    let pointer = this.#head;

    if (this.#head === null) {
      return "null";
    } else {
      while (pointer !== null) {
        output += pointer.toString();
        pointer = pointer.next;
      }

      output += "null";
      return output;
    }
  }
}

export class Node {
  #value;
  #next;

  constructor() {
    this.#value = null;
    this.#next = null;
  }

  get value() {
    return this.#value;
  }

  set value(value) {
    this.#value = value;
  }

  get next() {
    return this.#next;
  }

  set next(next) {
    this.#next = next;
  }

  toString() {
    return "( " + this.#value + " ) -> ";
  }
}
