class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const new_node = new Node(value);

        if (this.root === null) {
            this.root = new_node;
            return this;
        } else {
            let current_node = this.root;

            while (true) {
                if (current_node.value < new_node.value) {
                    if (current_node.right === null) {
                        current_node.right = new_node;
                        return this;
                    }

                    current_node = current_node.right;
                    continue;
                }

                if (current_node.value > new_node.value) {
                    if (current_node.left === null) {
                        current_node.left = new_node;
                        return this;
                    }

                    current_node = current_node.left;
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) return false;

        let current_node = this.root;

        while (current_node) {
            if (current_node.value === value) return current_node;

            if (current_node.value < value) {
                current_node = current_node.right;
                continue;
            }

            if (current_node.value > value) {
                current_node = current_node.left;
            }
        }

        return false;
    }

    remove(value) {
        if (!this.root) return false;

        let current_node = this.root;
        let parent_node = null;

        while (current_node) {

        }
    }
}

const tree = new BST();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(9));

function traverse(node) {
    const tree = {value: node.value};
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}