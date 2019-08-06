const util = require('util');

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };

        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        let new_node = new Node(value);

        this.tail.next = new_node;
        this.tail = new_node;
        this.length++;

        return this;
    };

    prepend(value) {
        let new_node = new Node(value);

        new_node.next = this.head;
        this.head = new_node;
        this.length++;

        return this;
    }

    insert(index, value) {
        if (index === 0) {
            return this.prepend(value);
        }

        if (index >= this.length) {
            return this.append(value);
        }

        let new_node = new Node(value);
        let before_node = this.traverseToIndex(index - 1);

        new_node.next = before_node.next;
        before_node.next = new_node;
        this.length++;

        return this;
    }

    remove(index) {
        if (index >= this.length) {
            return this;
        }

        if(index === 0) {
            this.head = this.head.next;
            this.length--;
            return this;
        }

        if (index === this.length - 1) {
            let new_last_node = this.traverseToIndex(index - 1);
            new_last_node.next = null;
            this.tail = new_last_node;
            this.length--;
            return this;
        }

        const node_before_deleted_node = this.traverseToIndex(index - 1);
        node_before_deleted_node.next = node_before_deleted_node.next.next;
        this.length--;

        return this;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter < index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }
}

//10
const myLinkedList = new LinkedList(10);
//10-15
myLinkedList.append(15);
//1-10-15
myLinkedList.prepend(1);
//1-3-10-15
myLinkedList.insert(1, 3);
//1-10-15
myLinkedList.remove(3);
console.log(util.inspect(myLinkedList, false, null, true));