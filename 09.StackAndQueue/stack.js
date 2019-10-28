require('util').inspect.defaultOptions.depth = null;

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const node = new Node(value);

        if (this.length === 0) {
            this.top = node;
            this.bottom = node;
        } else {
            let temp = this.top;
            this.top = node;
            this.top.next = temp;
        }

        this.length++;

        return this;
    }

    pop() {
        if (!this.top) {
            return null;
        }

        if (this.length === 1) {
            this.bottom = null;
        }

        this.top = this.top.next;
        this.length--;

        return this;
    }

    //isEmpty
}

const myStack = new Stack();
myStack.push('google');
myStack.push('Udemy');
myStack.push('Discord');
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();

console.log(myStack);
//Discord
//Udemy
//google
