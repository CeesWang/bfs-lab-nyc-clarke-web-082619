function bfs(rootNode, vertices, edges) {
    let array = [];
    let queue = [];
    rootNode.distance = 0;
    queue.push(rootNode);
    while (queue && queue.length) {
        let first = queue.shift();
        array.push(first);
        let adjacentNodes = findAdjacent(first.name, vertices, edges);
        markDistanceAndPredecessor(first, adjacentNodes);
        queue.push(...adjacentNodes);        
    }
    return array;
}

function findAdjacent(node, vertices, edges) {
    let adjacentEdgePairs = [];
    edges.forEach(edgePair => {
        edgePair.forEach(edge => {
            if (edge === node) {
                adjacentEdgePairs.push(...edgePair);
            }
        });
    });
    let adjacentEdges = adjacentEdgePairs.filter(edge => edge !== node);
    let adjacentNodes = [];
    adjacentEdges.forEach(edge => {
        vertices.forEach(vertice => {
            if (vertice.name === edge && vertice.distance === null) {
                adjacentNodes.push(vertice);
            }
        });
    });
    return adjacentNodes;
}

function markDistanceAndPredecessor(vertice, adjacentNodes) {
    adjacentNodes.forEach(node => {
        node.distance = vertice.distance + 1;
        node.predecessor = vertice;
    });
}