import React from 'react'

function BreadthFirstSearch ({graphMatrix, rootNode}) {

  let nodesLength = {};
  
  for (let i = 0; i < graphMatrix.length; i++) {
    nodesLength[i] = Infinity;
  }
  nodesLength[rootNode] = 0; 
  
  let queue = [rootNode]; 
  let current; 

  while (queue.length !== 0) {
    current = queue.shift();
    
    let currentConnected = graphMatrix[current];
    let neighborIndex = []; 
    let index = currentConnected.indexOf(1); 
    while (index !== -1) {
      neighborIndex.push(index); 
      index = currentConnected.indexOf(1, index + 1); 
    }
    
    for (let j = 0; j < neighborIndex.length; j++) {
      if (nodesLength[neighborIndex[j]] === Infinity) {
        nodesLength[neighborIndex[j]] = nodesLength[current] + 1;
        queue.push(neighborIndex[j]); 
      }
    }
  }

  return <ul>{Object.keys(nodesLength).map((key, index) => {
      return <li key={index}>
          <strong>Node: {index}: </strong>{nodesLength[key]}
          </li>
  })}</ul>;
    

}


export default BreadthFirstSearch