console.log('----------------------------Task:510 "Boggle Word Checker"----------------------------')
let arr =[ 
  ["I","N","G","W"],
  ["B","U","A","E"],
  ["I","U","A","O"],
  ["A","S","R","L"]
]
//UNGA
let word = 'NGA'
function BGW(grid, substr, x, y){
  let symbol = substr.charAt(0)
  
  if(x >= 1 && y >= 1 && grid[x - 1][y - 1] === symbol){
    if(substr.length === 1){
      return true
    }
    return BGW(grid, substr.substr(1), x - 1, y - 1)
  }
  if(x >= 1 && grid[x - 1][y] === symbol){
    if(substr.length === 1){
      return true
    }
    return BGW(grid, substr.substr(1), x - 1, y)
  }
  if(x >= 1 && y < grid[0].length && grid[x - 1][y + 1] === symbol){
    if(substr.length === 1){
      return true
    }
    return BGW(grid, substr.substr(1), x - 1, y + 1)
  }
  if(y >= 1 && grid[x][y - 1] === symbol){
    if(substr.length === 1){
      return true
    }
    return BGW(grid, substr.substr(1), x, y - 1)
  }
  if(grid[x][y] === symbol){
    if(substr.length === 1){
      return true
    }
    return BGW(grid, substr.substr(1), x, y)
  }
  if(y < grid[0].length && grid[x][y + 1] === symbol){
    if(substr.length === 1){
      return true
    }
    return BGW(grid, substr.substr(1), x, y + 1)
  }

  if(x < grid.length && y >= 1 && grid[x + 1][y - 1] === symbol){
    if(substr.length === 1){
      return true
    }
    return BGW(grid, substr.substr(1), x + 1, y - 1)
  }
  if(x < grid.length && grid[x + 1][y] === symbol){
    if(substr.length === 1){
      return true
    }
    return BGW(grid, substr.substr(1), x + 1, y)
  }
  if(x < grid.length && y < grid[0].length && grid[x + 1][y + 1] === symbol){
    if(substr.length === 1){
      return true
    }
    return BGW(grid, substr.substr(1), x + 1, y + 1)
  }
  return false
}
console.log(BGW(arr, word, 1, 1))