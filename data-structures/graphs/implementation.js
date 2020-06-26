class Graph {
  constructor() {
    this.numOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(vertex) {
    // We start with an empty array, zero edges
    /* We could use a Linked List too, the concept is the same */
    this.adjacentList[vertex] = [];
    this.numOfNodes++;
  }

  // Having in mind that this is an undirected graph:
  // The connection between two nodes is bi-directional
  addEdge(vertex1, vertex2) {
    // The same vertex is store twice because is bi-directional
    this.adjacentList[vertex1].push(vertex2);
    this.adjacentList[vertex2].push(vertex1);
  }

  showConnections() {
    Object.keys(this.adjacentList).forEach((vertexKey) => {
      console.log(vertexKey, '->', this.adjacentList[vertexKey]);
    });
  }
}

const undirectedGraph = new Graph();
undirectedGraph.addVertex('0');
undirectedGraph.addVertex('1');
undirectedGraph.addVertex('2');
undirectedGraph.addVertex('3');
undirectedGraph.addVertex('4');
undirectedGraph.addVertex('5');
undirectedGraph.addVertex('6');
undirectedGraph.addEdge('3', '1');
undirectedGraph.addEdge('3', '4');
undirectedGraph.addEdge('4', '2');
undirectedGraph.addEdge('4', '5');
undirectedGraph.addEdge('1', '2');
undirectedGraph.addEdge('1', '0');
undirectedGraph.addEdge('0', '2');
undirectedGraph.addEdge('6', '5');

undirectedGraph.showConnections();
