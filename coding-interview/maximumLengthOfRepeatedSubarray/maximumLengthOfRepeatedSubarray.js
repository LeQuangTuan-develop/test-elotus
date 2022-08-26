/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findLength(nums1, nums2) {
  const n = nums1.length;
  const m = nums2.length;
  // Auxiliary dp[][] array
  let dp = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(m + 1);
    for (let j = 0; j <= m; j++) dp[i][j] = 0;
  }
  // Updating the dp[][] table
  // in Bottom Up approach
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      // If A[i] is equal to B[i]
      // then dp[j][i] = dp[j + 1][i + 1] + 1
      if (nums1[i] == nums2[j]) dp[j][i] = dp[j + 1][i + 1] + 1;
    }
  }
  let maxm = 0;

  // Find maximum of all the values
  // in dp[][] array to get the
  // maximum length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // Update the length
      maxm = Math.max(maxm, dp[i][j]);
    }
  }

  // Return the maximum length
  return maxm;
}

// Driver Code
let A = [1, 2, 3, 2, 1, 5, 8];
let B = [4, 3, 2, 1, 4, 7];

// Function call to find
// maximum length of subarray
document.write(findLength(A, B));
