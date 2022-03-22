console.log('----------------------------Task:XXX "Binary Search"----------------------------')
function binarySearch(arr, item, low = 0, hight = arr.length - 1){
  let mid = low + Math.floor((hight - low) / 2)
  if(low > hight){
    return 'Такого значения в массиве нет!'
  }
  if(arr[mid] < item){
    return binarySearch(arr, item, mid + 1, hight)
  }
  if(arr[mid] > item){
    return binarySearch(arr, item, low, mid - 1)
  }
  if(arr[mid] === item){
    
    return mid
  }
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11], 12))
















