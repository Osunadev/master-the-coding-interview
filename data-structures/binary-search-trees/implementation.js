class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// In our insert() and lookup() we're iterating using divide
// and conquer, this means we don't visit all the nodes on the tree
class BinarySearchTree {
  constructor() {
    // The root node
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currNode = this.root;

    while (currNode !== null) {
      // Checking if the value to insert is greater than the value of the current node
      if (value > currNode.value) {
        // If we reached the leaf node
        if (!currNode.right) {
          currNode.right = newNode;
          return this;
        }

        currNode = currNode.right;
      } else {
        // If we reached the leaf node
        if (!currNode.left) {
          currNode.left = newNode;
          return this;
        }

        currNode = currNode.left;
      }
    }
  }

  lookup(value) {
    let currNode = this.root;
    let isValueStored = false;

    while (currNode !== null) {
      if (value === currNode.value) {
        isValueStored = true;
        break;
      } else if (value > currNode.value) {
        currNode = currNode.right;
      } else {
        currNode = currNode.left;
      }
    }

    return isValueStored ? value : null;
  }

  /**
   * Function that finds the node of interest and returns the closest parent
   * of the node and whether the node was found on the 'left' or 'right' branch
   * @param {number} value - The value of the node to be find
   * @returns {Object} - The Object with the parent node and the indication if
   * it was found on the 'left' or 'right'
   */
  _getParentNode(value) {
    let currNode = this.root;
    let parentNode = null;
    let branchLabel = null;

    while (currNode !== null) {
      if (value > currNode.value) {
        if (currNode.right && currNode.right.value === value) {
          parentNode = currNode;
          branchLabel = 'right';
          break;
        }

        currNode = currNode.right;
      } else {
        if (currNode.left && currNode.left.value === value) {
          parentNode = currNode;
          branchLabel = 'left';
          break;
        }

        currNode = currNode.left;
      }
    }

    return { parentNode, branchLabel };
  }

  /**
   * Basically, there are 4 possible cases when deleting a node
   * 1. It's a leaf node
   * 2. It only has 1 child
   * 3. It has 2 child nodes, but the right node doesn't have a left branch
   * 4. It has 2 child nodes, and the right node have a left branch
   */

  // It took me quite a lot to come up with this solution, about hours
  remove(value) {
    // If we don't have any node
    if (!this.root) return;

    /* First, we need to find where our Node is located */
    let isValueAtTheRoot = false;
    let parentNodeObj = {};

    // We need to check if the node of interest is the root
    if (this.root.value === value) isValueAtTheRoot = true;
    else {
      // If the value is not the root, we need to check for the parent of the value node
      parentNodeObj = this._getParentNode(value);
    }

    let nodeHasFound = parentNodeObj.parentNode || isValueAtTheRoot;
    // If we didn't find any node with that value
    if (!nodeHasFound) return;

    /* Now that we know that the value node exists, we assing it to a variable */
    const { parentNode, branchLabel } = parentNodeObj;

    let nodeToRemove = isValueAtTheRoot ? this.root : parentNode[branchLabel];

    /* Checking the different possibilities mentioned above */
    // 1
    if (!nodeToRemove.left && !nodeToRemove.right) {
      if (isValueAtTheRoot) {
        this.root = null;
      } else {
        parentNode[branchLabel] = null;
      }
    }
    // 2
    else if (!!nodeToRemove.left + !!nodeToRemove.right === 1) {
      let replacementNode;
      if (nodeToRemove.left) replacementNode = nodeToRemove.left;
      if (nodeToRemove.right) replacementNode = nodeToRemove.right;

      if (isValueAtTheRoot) {
        this.root = replacementNode;
      } else {
        parentNode[branchLabel] = replacementNode;
      }
    } else {
      let currLeftBranch = nodeToRemove.left;
      let currRightBranch = nodeToRemove.right;

      // 3
      if (!nodeToRemove.right.left) {
        if (isValueAtTheRoot) {
          this.root = currRightBranch;
          this.root.left = currLeftBranch;
        } else {
          parentNode[branchLabel] = currRightBranch;
          parentNode[branchLabel].left = currLeftBranch;
        }
      }
      // 4
      else {
        let rightNodeLeftBranch = currRightBranch.left;
        let closestParentNode = currRightBranch;

        while (rightNodeLeftBranch.left !== null) {
          closestParentNode = rightNodeLeftBranch;
          rightNodeLeftBranch = rightNodeLeftBranch.left;
        }

        // Now, the closestParent is the leaf node
        closestParentNode.left = null;

        if (isValueAtTheRoot) {
          this.root = rightNodeLeftBranch;
          this.root.left = currLeftBranch;
          this.root.right = currRightBranch;
        } else {
          parentNode[branchLabel] = rightNodeLeftBranch;
          parentNode[branchLabel].left = currLeftBranch;
          parentNode[branchLabel].right = currRightBranch;
        }
      }
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(160);
bst.insert(180);
bst.insert(15);
bst.insert(1);
//      9
//  4      20
//1  6  15    170
//         160  180

// Deleting from the root, case 4
bst.remove(9);
//      15
//  4      20
//1  6        170
//         160  180

// Case 2
bst.remove(20);
//      15
//  4      170
//1  6   160  180

bst.insert(173);
bst.insert(185);
//      15
//  4      170
//1  6   160    180
//            173  185

// Case 4
bst.remove(170);
//      15
//  4       173
//1  6   160    180
//                 185

// Case 1
bst.remove(6);
//      15
//  4       173
//1     160    180
//                 185

// Case 3
bst.remove(173);
//      15
//  4       180
//1     160    185

console.log(JSON.stringify(traverse(bst.root)));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
