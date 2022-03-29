console.log('----------------------------Task:510 "Boggle Word Checker"----------------------------')
let arr =[
  ["E","A","R","A"],
  ["N","L","E","C"],
  ["I","A","I","S"],
  ["B","Y","O","R"]
];

function BGW(grid, substr, x, y, hits = []){
  hits.push([x, y])
  let symbol = substr.charAt(0)
  if(x >= 1 && y >= 1 && grid[x - 1][y - 1] === symbol){
    if(substr.length === 1){
      return true
    }
    return BGW(grid, substr.substr(1), x - 1, y - 1, hits)
  }
  if(x >= 1 && grid[x - 1][y] === symbol){
    if(substr.length === 1){
      return true
    }
    return BGW(grid, substr.substr(1), x - 1, y, hits)
  }
  if(x >= 1 && y < grid[0].length && grid[x - 1][y + 1] === symbol){
    if(substr.length === 1){
      return true
    }
    return BGW(grid, substr.substr(1), x - 1, y + 1, hits)
  }
  if(y >= 1 && grid[x][y - 1] === symbol){
    if(substr.length === 1){
      return true
    }
    return BGW(grid, substr.substr(1), x, y - 1, hits)
  }
  if(grid[x][y] === symbol){
    if(substr.length === 1){
      return true
    }
    return BGW(grid, substr.substr(1), x, y, hits)
  }
  if(y < grid[0].length && grid[x][y + 1] === symbol){
    if(substr.length === 1){
      return true
    }
    return BGW(grid, substr.substr(1), x, y + 1, hits)
  }

  if(x < grid.length && y >= 1 && grid[x + 1][y - 1] === symbol){
    if(substr.length === 1){
      return true
    }
    return BGW(grid, substr.substr(1), x + 1, y - 1, hits)
  }
  if(x < grid.length && grid[x + 1][y] === symbol){
    if(substr.length === 1){
      return true
    }
    return BGW(grid, substr.substr(1), x + 1, y, hits)
  }
  if(x < grid.length && y < grid[0].length && grid[x + 1][y + 1] === symbol){
    if(substr.length === 1){
      return true
    }
    return BGW(grid, substr.substr(1), x + 1, y + 1, hits)
  }
  return false
}
function checkWord(grid, word) {
  const first = word.charAt(0)
  for(let i = 0; i < grid.length; i++){
    for(let k = 0; k < grid.length; k++){
      if(grid[i][k] === first){
        return BGW(grid, word, i, k)
      }
    }
  }
}
console.log(checkWord(arr, 'EAR'))
