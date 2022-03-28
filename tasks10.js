console.log('----------------------------Task:516 "Fun with trees: max sum"----------------------------')
var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};
var root = new TreeNode(5, new TreeNode(-22, new TreeNode(9), new TreeNode(50)), new TreeNode(11, new TreeNode(9), new TreeNode(2)));

function maxSum(root, accum = 0) {
  if(root === null){
    return 0
  }
  if(!root.left && !root.right){
    return accum + root.value
  }
  if(!root.left ){
    return Math.max(maxSum(root.right, accum + root.value), 0)
  }
  if(!root.right){
    return Math.max(0, maxSum(root.left, accum + root.value))
  }
  return Math.max(maxSum(root.right, accum + root.value), maxSum(root.left, accum + root.value))
}

//Почему это сработало?? Как js понимает, что нужно сравнивать свойство .value ???
function maxSum(root) {
    if (!root) return 0;
    return root.value + Math.max(maxSum(root.left), maxSum(root.right))
}
//