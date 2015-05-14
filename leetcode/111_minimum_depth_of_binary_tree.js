var buildTree = require('./building').buildTree;


/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  
  if (!root) {
    return 0;
  }

  var lmin = minDepth(root.left);
  var rmin = minDepth(root.right);
      
  if (lmin == 0 && rmin != 0) {
      return rmin + 1;
  } else if (lmin != 0 && rmin == 0) {
      return lmin + 1;
  } else {
      return Math.min(lmin, rmin) + 1;
    }
 
};

var t = buildTree('1,2');
console.log(minDepth(t));
