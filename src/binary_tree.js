// main node

var Node = function (val) {
    this.value = val;
    this.left = null;
    this.right = null;
}


// initializing node
function BinarySearchTree() {
    this.root = null;

    this.add = function (data) {
        // first assign root node
        const node = this.root
        if (node === null) {
            this.root = new Node(data)
            return;
        } else {
            // creating tree
            var searchTree = function (node) {
                if (data < node.value) {
                    if (node.left === null) {
                        node.left = new Node(data)
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left)
                    }
                } else if (data > node.value) {
                    if (node.right === null) {
                        node.right = new Node(data)
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right)
                    }
                } else {
                    return null
                }
            }
            // calling  search tree fun.
            return searchTree(node);
        }
    }
    this.findMin = function () {
        let currentNode = this.root;
        while (currentNode.left !== null) {
           currentNode = currentNode.left
        }
        return currentNode.data
    }
}


// pushing data in node 

// BinarySearchTree.prototype.push = function (val) {
//     var root = this.root;

//     if (!root) {
//         this.root = new Node(val);
//         return;
//     }

//     var currentNode = root;
//     console.log("current Node",currentNode)
//     var newNode = new Node(val);
//     console.log("newNode",newNode)

//     while (currentNode) {
//         if (val < currentNode.value) {
//             if (!currentNode.left) {
//                 currentNode.left = newNode.value;
//                 break;
//             } else {
//                 currentNode = currentNode.left;
//             }
//         } else {
//             if (!currentNode.right) {
//                 currentNode.right = newNode.value;
//                 break;
//             } else {
//                 currentNode = currentNode.right;
//             }
//         }
//     }

// }

var bst = new BinarySearchTree();
bst.add(7);
bst.add(8);
bst.add(4);
bst.add(2);
console.log(bst.add(1));
console.log("min",bst.findMin())